import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri : result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>rating: {result.rating}, reviews: {result.review_count}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    name: {
        fontSize: 14,
        fontWeight: "bold"
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    container: {
       marginLeft: 15
    }
});
  
  export default ResultsDetail;
  