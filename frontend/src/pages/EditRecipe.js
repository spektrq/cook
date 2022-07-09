import EditRecipeForm from '../components/EditRecipeForm'

import React, { Component }  from 'react'
import {useParams} from 'react-router'

function EditRecipe() {
  const { id } = useParams()
  return (
    <div className='edit'>
      <EditRecipeForm recipeId={id}/>
    </div>
  );
}

export default EditRecipe;
