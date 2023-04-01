package com.spektr.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Component
public class SearchRestClient {

    @Autowired
    private HttpClient _httpclient;
    private final static String _apiKey = "b4T9bNhT09oYFD5lC3h7sw==wnrS6p5LpelvG1Ex";
    private final static String _recipeApiBaseUrl = "https://api.api-ninjas.com/v1/recipe";

    public String performSearchTermQuery(String searchTerm) {
        HttpRequest request = buildRequest(String.format("query=%s", searchTerm));
        try {
            return _httpclient.send(request, HttpResponse.BodyHandlers.ofString()).body();
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(String.format("Exception thrown whilst trying to send request to %s", request.uri().toString()), e);
        }
    }

    private HttpRequest buildRequest(String path) {
        String uriString = String.format("%s?%s", _recipeApiBaseUrl, path);
        try {
            URI uri = new URI(uriString);
            return HttpRequest.newBuilder()
                    .uri(uri)
                    .header("X-Api-Key", _apiKey)
                    .build();
        } catch (URISyntaxException e) {
            throw new RuntimeException(String.format("URI %s violates RFC 2396", uriString), e);
        }
    }
}
