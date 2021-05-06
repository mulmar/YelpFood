import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchApi = async (searchTerm) => {
      console.log('hi there!');
      try{
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'zaandam'
          }
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessage('something went wrong!');
      }
    };
  
  //Call searchApi when components is rendered the first time.
  //searchApi('pasta');
  
  useEffect(()=> {searchApi('pasta');},[]);

  return [searchApi, results, errorMessage];
};