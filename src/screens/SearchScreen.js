import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults' 

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };


  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {searchApi(term)}}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList  results={filterResultsByPrice('€')} title="Goedkoop"/>
      <ResultsList  results={filterResultsByPrice('€€')} title="Normaal"/>
      <ResultsList  results={filterResultsByPrice('€€€')} title="Duur"/>
      <ResultsList  results={filterResultsByPrice('€€€€')} title="Portemonnee leger"/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
