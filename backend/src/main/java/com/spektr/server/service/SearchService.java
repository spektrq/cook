package com.spektr.server.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spektr.server.model.SearchResultRecipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {
    @Autowired
    private SearchRestClient _client;

    public List<SearchResultRecipe> getRecipesFromSearchTerm(String searchTerm) {
        String jsonResponse = _client.performSearchTermQuery(searchTerm);
        List<SearchResultRecipe> results = new ArrayList<>();
        try {
            results = convertJsonToSearchResultRecipe(jsonResponse);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error whilst processing recipe search results", e);
        }
        return results;
    }

    private List<SearchResultRecipe> convertJsonToSearchResultRecipe(String json) throws JsonProcessingException {
        final ObjectMapper objectMapper = new ObjectMapper();
        return List.of(objectMapper.readValue(json, SearchResultRecipe[].class));
    }
}
