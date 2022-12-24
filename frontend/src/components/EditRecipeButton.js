import { useNavigate } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FiEdit } from 'react-icons/fi'

function EditRecipeButton(props) {
  let navigate = useNavigate();
  return (
    <Button className="btn-edit" variant="primary" onClick={() => navigate(`/recipes/modify-recipe/${props.id}`)}>
     Edit <FiEdit />
    </Button>
  );
}

export default EditRecipeButton
