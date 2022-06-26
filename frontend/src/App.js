import RecipeComponent from './components/RecipeComponent';
import NavBar from './components/NavBar.js';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes.js';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
