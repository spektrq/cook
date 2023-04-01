package com.spektr.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.http.HttpClient;

@Configuration
public class HttpClientAutoConfiguration {

    @Bean
    HttpClient httpClient() {
        return HttpClient.newHttpClient();
    }
}
