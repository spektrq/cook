package com.spektr.server.controller;

import com.spektr.server.model.Recipe;
import com.spektr.server.repository.RecipeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

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
        return _recipeRepository.findAll();
    }

    @GetMapping("recipes/{id}")
    public Recipe getRecipes(@PathVariable long id) {
        _logger.info("Request for recipe {}", id);
        return _recipeRepository.findById(id)
                                .orElseThrow(() ->
                                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find recipe with id " + id));
    }

    @PostMapping("recipes")
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) throws URISyntaxException {
        _logger.info("Request to create recipe: {}", recipe.toString());
        Recipe result = _recipeRepository.save(recipe);
        return ResponseEntity.created(new URI("/api/recipes" + result.getId()))
                             .body(result);
    }

    @PutMapping("recipes/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable long id, @RequestBody Recipe recipeDetails) {
        Recipe recipe = _recipeRepository.findById(id)
                                         .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find recipe with id " + id));

        recipe.setTitle(recipeDetails.getTitle());

        Recipe updatedRecipe = _recipeRepository.save(recipeDetails);
        return ResponseEntity.ok(updatedRecipe);
    }

    @DeleteMapping("recipes/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteRecipe(@PathVariable long id) {
        Recipe recipe = _recipeRepository.findById(id)
                                         .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find recipe with id " + id));

        _recipeRepository.delete(recipe);

        return ResponseEntity.ok(Map.of("deleted", true));
    }
}
