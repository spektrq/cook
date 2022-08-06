import { useNavigate } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button'

function CreateRecipeButton() {
  let navigate = useNavigate();
  return (
      <Button variant="primary" onClick={() => navigate('/recipes/modify-recipe/-1')}>
       Create Recipe
      </Button>
  );
}

export default CreateRecipeButton
