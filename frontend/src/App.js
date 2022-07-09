import RecipeList from './components/RecipeList';
import CreateRecipeForm from './components/CreateRecipeForm';

import Navigation from './components/Navigation.js';
import Home from './pages/Home';
import Recipes from './pages/Recipes.js';
import EditRecipe from './pages/EditRecipe';
import CreateRecipe from './pages/CreateRecipe.js';

import React, { Component }  from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/create-recipe' element={<CreateRecipe />} />
            <Route path='/recipes/edit-recipe/:id' element={<EditRecipe />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
