package com.spektr.server.controller;

import com.spektr.server.model.Recipe;
import com.spektr.server.repository.RecipeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class RecipeController {

    private final Logger _logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private RecipeRepository _recipeRepository;

    @GetMapping("recipes")
    public List<Recipe> getRecipes() {
        _logger.info("Request for recipes");
        _recipeRepository.flush();
        return _recipeRepository.findAll();
    }

    @PostMapping("recipes")
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) throws URISyntaxException {
        _logger.info("Request to create recipe: {}", recipe.toString());
        Recipe result = _recipeRepository.save(recipe);
        return ResponseEntity.created(new URI("/api/recipes" + result.getId()))
                             .body(result);
    }
}
