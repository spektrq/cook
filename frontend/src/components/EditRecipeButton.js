import { useNavigate } from "react-router-dom";
import React, { Component }  from 'react';

function EditRecipeButton(props) {
  let navigate = useNavigate();
  return (
    <div>
      <button className="btn btn-info" onClick={() => navigate(`/recipes/edit-recipe/${props.id}`)}>
       Edit
      </button>
    </div>
  );
}

export default EditRecipeButton
