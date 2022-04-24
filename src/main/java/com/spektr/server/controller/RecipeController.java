package com.spektr.server.controller;

import com.spektr.server.model.Recipe;
import com.spektr.server.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("recipes")
    public List<Recipe> getRecipes() {
        return this.recipeRepository.findAll();
    }
}
