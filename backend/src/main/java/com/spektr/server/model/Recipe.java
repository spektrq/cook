package com.spektr.server.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "recipe_id")
    private List<Ingredient> ingredients;

    @ElementCollection
    @CollectionTable(name = "recipe_method_steps", joinColumns = @JoinColumn(name = "recipe_id"))
    @Column(name = "method_step")
    private List<String> methodSteps;

    public Recipe() {}

    public Recipe(String title, List<Ingredient> ingredients, List<String> methodSteps) {
        this.title = title;
        this.ingredients = ingredients;
        this.methodSteps = methodSteps;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getMethodSteps() {
        return methodSteps;
    }

    public void setMethodSteps(List<String> methodSteps) {
        this.methodSteps = methodSteps;
    }

    @Override
    public String toString() {
        return String.format("%s, %s, %s", title, ingredients, methodSteps);
    }
}
