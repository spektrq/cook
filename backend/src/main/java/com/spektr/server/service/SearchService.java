package com.spektr.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchService {
    @Autowired
    private SearchRestClient _client;

    public String getRecipesFromSearchTerm(String searchTerm) {
        return _client.performSearchTermQuery(searchTerm);
    }
}
