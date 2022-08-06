import Navigation from './components/Navigation.js';
import Home from './pages/Home';
import Recipes from './pages/Recipes.js';
import CreateRecipe from './pages/CreateRecipe.js';
import ViewRecipe from './pages/ViewRecipe.js';

import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/modify-recipe/:id' element={<CreateRecipe />} />
            <Route path='/recipes/view-recipe/:id' element={<ViewRecipe />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
