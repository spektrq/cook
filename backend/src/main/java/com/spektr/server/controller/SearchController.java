package com.spektr.server.controller;

import com.spektr.server.model.Recipe;
import com.spektr.server.service.SearchService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

import static org.apache.tomcat.jni.Socket.send;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("api/search/")
public class SearchController {
    private final Logger _logger = LoggerFactory.getLogger(this.getClass());

    private final String _apiKey = "b4T9bNhT09oYFD5lC3h7sw==wnrS6p5LpelvG1Ex";
    private final String _recipeApiBaseUrl = "https://api.api-ninjas.com/v1/recipe";

    @Autowired
    private SearchService _searchService;

    private final static HttpClient _httpclient = HttpClient.newHttpClient();

    @GetMapping("query")
    public String queryForRecipe(@RequestParam String searchTerm) {
        _logger.trace("GET request received for recipe query");

        HttpRequest request = null;
        HttpResponse<String> response = null;
        try {
            request = HttpRequest.newBuilder()
                                             .uri(new URI(String.format("%s?query=%s", _recipeApiBaseUrl, searchTerm)))
                                             .header("X-Api-Key", _apiKey)
                                             .build();
            response = _httpclient.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (URISyntaxException | IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        if (request == null || response == null) {
            throw new RuntimeException();
        }

        return response.body();
    }
}
