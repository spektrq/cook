import React from 'react';
import RecipeService from '../services/RecipeService'
import {Alert, Button} from 'react-bootstrap';

const handleDelete = async (id, updateRecipes, toggleAlert) => {
  await RecipeService.deleteRecipe(id);
  updateRecipes();
  toggleAlert(-1, "");
}

function DeleteAlert(props) {
  return (
      <Alert variant="danger" onClose={() => props.toggleAlert(-1, props.recipeTitle)} dismissible>
        <Alert.Heading>Are you sure you want to delete your {props.recipeTitle} recipe?</Alert.Heading>
        <hr />
        <Button variant="danger" onClick={() => handleDelete(props.id, props.updateRecipes, props.toggleAlert)}>Confirm</Button>
      </Alert>
    );
}

export default DeleteAlert
