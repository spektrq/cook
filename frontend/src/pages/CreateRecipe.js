import React from 'react';
import CreateRecipeForm from '../components/CreateRecipeForm'
import {useParams} from 'react-router'

function Create() {

  const { id } = useParams()

  return (
    <div className='create'>
      <CreateRecipeForm id={id}/>
    </div>
  );
}

export default Create;
