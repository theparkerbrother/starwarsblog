import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PeopleDetail = () => {
  const { id } = useParams();  // Get the dynamic id from the URL
  console.log(`The id is: ${id}.`);
  return (
    <h1>This is the peopleDetail. The id is {id}.</h1>
  )
};

export default PeopleDetail;
