import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

  console.log(results);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {searchApi(term)}}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found: {results.length}</Text>
      <ResultsList results={filterResultsByPrice('€')} title="Cost effective"/>
      <ResultsList results={filterResultsByPrice('€€')} title="Bit Pricier"/>
      <ResultsList results={filterResultsByPrice('€€€')} title="Big Spender"/>
      <ResultsList results={filterResultsByPrice('€€€€')} title="Gold Digger"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
