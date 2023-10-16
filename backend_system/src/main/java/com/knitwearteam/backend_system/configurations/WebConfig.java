package com.knitwearteam.backend_system.configurations;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("GET, POST, PUT, DELETE, UPDATE")
                .allowedOrigins("http://localhost:8080, https://mumsik.onrender.com")
                .exposedHeaders("X-Get-Header")
                .maxAge(3600);
    }
}