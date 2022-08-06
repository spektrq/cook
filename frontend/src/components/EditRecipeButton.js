import { useNavigate } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';

function EditRecipeButton(props) {
  let navigate = useNavigate();
  return (
    <Button variant="info" onClick={() => navigate(`/recipes/modify-recipe/${props.id}`)}>
     Edit
    </Button>
  );
}

export default EditRecipeButton
