package com.knitwearteam.backend_system.configurations;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:3000, http://mumsik-front.onreader.com")
                        .allowedMethods("*")
                        .allowCredentials(true);
            }
//            @Override
//            public void addResourceHandlers(ResourceHandlerRegistry registry) {
//                registry
//                        .addResourceHandler("/images/**")
//                        .addResourceLocations("/images/")
//                        .setCachePeriod(3600)
//                        .resourceChain(true)
//                        .addResolver(new PathResourceResolver());
//            }
        };
    }
}