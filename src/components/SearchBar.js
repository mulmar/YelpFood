import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15
  }
});

export default SearchBar;
