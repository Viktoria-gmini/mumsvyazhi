package com.knitwearteam.backend_system.bot;

import com.knitwearteam.backend_system.Services.CustomerService;
import com.knitwearteam.backend_system.bot.botconfig.BotConfig;
import com.knitwearteam.backend_system.bot.messages.MAIN_CONST;
import com.knitwearteam.backend_system.bot.messages.STANDART_CONST;
import com.knitwearteam.backend_system.model.BespokenCustom;
import com.knitwearteam.backend_system.model.Customer;
import com.knitwearteam.backend_system.model.Image;
import com.knitwearteam.backend_system.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.methods.send.SendPhoto;
import org.telegram.telegrambots.meta.api.objects.InputFile;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class MainBot extends TelegramLongPollingBot {
    final BotConfig config;
    StandartBot standartBot;
    MasterBot masterBot;
    NoOrderBot noOrderBot;
    ScenarioType scenarioType = ScenarioType.MAIN;
    @Autowired
    private final CustomerService customerService ;

    public MainBot(BotConfig config, CustomerService customerService) {
        this.config = config;
        this.customerService = customerService;
    }

    @Override
    public String getBotUsername() {
        return config.getBotName();
    }

    @Override
    public String getBotToken() {
        return config.getBotToken();
    }

    @Override
    public void onUpdateReceived(Update update) {
        if(update.hasMessage() && update.getMessage().hasText()){
            String startMessage = update.getMessage().getText();
            long chat_id = update.getMessage().getChatId();
            String username = update.getMessage().getChat().getUserName();
            if ("/start".equals(startMessage)) {
                startCommandReceived(chat_id, username);
            }

        } else if(update.hasCallbackQuery()){

            String call_data = update.getCallbackQuery().getData();

            switch (call_data) {
                case "ОТКАЗАЛИСЬ ОТ ЗАКАЗА" -> standartBot.order_refused();
                case "СВЯЗАТЬСЯ С МАСТЕРОМ" -> standartBot.order_agreed();
            }
        }

    }
    private void startCommandReceived(long chat_id, String username){
        sendMessage(chat_id,MAIN_CONST.HI_CUSTOMER);

        // Вызов метода, время выполнения которого мы хотим замерить
        //Если человек не делал заказ, то с ним базар короткий
        Customer customer = customerService.findByUserName(username);
        if (customer!=null){
            try {
                if((customer.getProducts()==null)||(customer.getBespokenCustom()==null)){
                  noOrderBot= new NoOrderBot(chat_id);
                  noOrderBot.start();
                  return;
                } else {
                    scenarioType =ScenarioType.STANDART;
                }
            } catch (Exception e) {
                this.sendMessage(chat_id, MAIN_CONST.NO_ORDER);
                this.sendMessage(chat_id, MAIN_CONST.VISIT_OUR_SITE);
            }
        } else {
            noOrderBot= new NoOrderBot(chat_id);
            noOrderBot.start();
            return;
        }
        if ("979309424".equals(Long.toString(chat_id))) {
            scenarioType = ScenarioType.MASTER;
        }
        handler(chat_id, username);


    }
    private void handler(long chat_id, String userName){
        switch (scenarioType) {
            case STANDART -> {
                standartBot = new StandartBot(chat_id, userName);
                standartBot.start();
            }
            case MASTER -> {
                masterBot = new MasterBot(chat_id);
                masterBot.start();
            }
        }
    }
    public void sendMessage(long chat_id, String textToSend) {
        SendMessage message = new SendMessage();
        message.setChatId(String.valueOf(chat_id));
        message.setText(textToSend);
        try {
            execute(message);
        } catch (TelegramApiException e) {
            throw new RuntimeException(e);
        }
    }
    class StandartBot{
        long chat_id;
        String userName;
        @Autowired
        private final TelegramBotService telegramBotService = new TelegramBotService();

        StandartBot(long chat_id, String userName){
            this.chat_id=chat_id;
            this.userName = userName;
        }

        void start(){
            SendMessage message = new SendMessage();
            message.setChatId(String.valueOf(chat_id));
            sendMessage(chat_id,STANDART_CONST.WE_FOUND_YOUR_ORDER);
            standartBot.order_found(userName);
            message.setText(STANDART_CONST.WHAT_DO_YOU_WANT);
            InlineKeyboardMarkup markupInline = new InlineKeyboardMarkup();
            List<List<InlineKeyboardButton>> rowsInline = new ArrayList<>();
            List<InlineKeyboardButton> rowInline1 = new ArrayList<>();
            List<InlineKeyboardButton> rowInline2 = new ArrayList<>();
            // создаем первую кнопку для в ряду
            InlineKeyboardButton deleteButton = new InlineKeyboardButton();

// устанавливаем параметр текста на кнопке
            deleteButton.setText("Отказаться от заказа");

// устанавливаем параметр callback_data
            deleteButton.setCallbackData("ОТКАЗАЛИСЬ ОТ ЗАКАЗА");

// создаем по аналогии вторую кнопку в ряду
            InlineKeyboardButton connectWithMasterButton = new InlineKeyboardButton();
            connectWithMasterButton.setText("Связаться с мастером и утвердить заказ");
            connectWithMasterButton.setCallbackData("СВЯЗАТЬСЯ С МАСТЕРОМ");
            rowInline1.add(deleteButton);
            rowInline2.add(connectWithMasterButton);
            rowsInline.add(rowInline1);rowsInline.add(rowInline2);
            markupInline.setKeyboard(rowsInline);
            message.setReplyMarkup(markupInline);
            try {
                execute(message);
            } catch (TelegramApiException e) {
                throw new RuntimeException(e);
            }
        }

        void order_found(String userName){
            List<Product> products = customerService.getProductsByUserName(userName);
            if(products.size()>0) {
                for (Product product : products) {
                    String caption = product.getTitle() + " " + product.getPrice() + "руб." + "\n" + product.getDescription();
                    byte[] bytes = product.getImages().get(0).getBytes();
                    InputFile inputFile = convertToInputFile(bytes);
                    telegramBotService.sendPhoto(chat_id, inputFile, caption);
                }
            } else {
                BespokenCustom custom = customerService.getBespokenCustomByUserName(userName);
                System.out.println(custom);
                String caption = custom.getDescription();
                for (Image image : custom.getImages()) {
                    byte[] bytes = image.getBytes();
                    InputFile inputFile = convertToInputFile(bytes);
                    telegramBotService.sendPhoto(chat_id, inputFile, caption);
                    caption="";
                }
            }
        }
        void order_refused(){
            customerService.deleteCustomer(userName);
            sendMessage(chat_id,STANDART_CONST.DELETE_ORDER);
        }
        void order_agreed(){
            sendMessage(chat_id,"Хорошо, мастер с Вами свяжется так скоро как сможет.");
            sendMessage(chat_id, STANDART_CONST.CONNECT_WITH_MASTER);
        }

    }
    class MasterBot{
        long chat_id;

        MasterBot(long chat_id){
            this.chat_id=chat_id;
        }

        void start(){
            sendMessage(chat_id,"Добрый день, Анна!");
        }
    }
    class NoOrderBot{
        long chat_id;

        NoOrderBot(long chat_id){
            this.chat_id=chat_id;
        }

        void start(){
            sendMessage(chat_id, MAIN_CONST.NO_ORDER);
            sendMessage(chat_id, MAIN_CONST.VISIT_OUR_SITE);
        }
    }
    @RequiredArgsConstructor
    private class TelegramBotService {


        public void sendPhoto(long chatId, InputFile inputFile, String caption) {
            SendPhoto message = new SendPhoto();
            message.setChatId(String.valueOf(chatId));

            message.setPhoto(inputFile);
            message.setCaption(caption);
            try {
                execute(message);
            } catch (TelegramApiException e) {
                e.printStackTrace();
            }
        }
    }
    public static InputFile convertToInputFile(byte[] imageBytes) {
        return new InputFile(new ByteArrayInputStream(imageBytes), "image.jpg");
    }

}
