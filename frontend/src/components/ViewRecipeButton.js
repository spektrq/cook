import React from 'react';
import RecipeService from '../services/RecipeService'
import Button from 'react-bootstrap/Button';

const handleDelete = async (id, updateRecipes) => {
  await RecipeService.deleteRecipe(id);
  updateRecipes();
}

function DeleteRecipeButton(props) {

  return (
    <Button variant='danger' onClick={() => handleDelete(props.id, props.updateRecipes)}>
     Delete
    </Button>
  );
}

export default DeleteRecipeButton
