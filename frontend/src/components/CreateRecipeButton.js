import { useNavigate } from "react-router-dom";
import React, { Component }  from 'react';

function CreateRecipeButton() {
  let navigate = useNavigate();
  return (
    <div>
      <button className="btn btn-primary" onClick={() => navigate('/recipes/create-recipe')}>
       Create Recipe
      </button>
    </div>
  );
}

export default CreateRecipeButton
