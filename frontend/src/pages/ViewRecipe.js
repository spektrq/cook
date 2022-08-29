import React from 'react';
import ViewRecipeForm from '../components/ViewRecipeForm'

import {useParams} from 'react-router'

function View() {

  const { id } = useParams()

  return (
    <div className='view'>
      <ViewRecipeForm id={id}/>
    </div>
  );
}

export default View;
