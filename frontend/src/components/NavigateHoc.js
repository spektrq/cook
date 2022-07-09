import { useNavigate } from 'react-router-dom';
import React, { Component }  from 'react';

export const withNavigate = Component => props => {
  const navigate = useNavigate();
  return <Component {...props} navigate={navigate} />;
};
