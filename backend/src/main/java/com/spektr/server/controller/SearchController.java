package com.spektr.server.controller;

import com.spektr.server.model.SearchResultRecipe;
import com.spektr.server.service.SearchService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("api/")
public class SearchController {
    private final Logger _logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private SearchService _searchService;

    @GetMapping("search")
    public List<SearchResultRecipe> queryForRecipe(@RequestParam(name = "term") String searchTerm) {
        _logger.trace("GET request received for recipe query");
        return _searchService.getRecipesFromSearchTerm(searchTerm);
    }
}
