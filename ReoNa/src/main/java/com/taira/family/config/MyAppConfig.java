package com.taira.family.config;


import com.taira.family.service.HelloService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyAppConfig {
    @Bean
    public HelloService helloService() {
        System.out.println("添加HelloService组件");
        return new HelloService();
    }
}
