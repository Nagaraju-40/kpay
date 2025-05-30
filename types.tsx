import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCategory = () => {
  return (
    <View style={styles.container}>
      {/* Insecticides Category */}
      <View style={styles.categoryContainer}>
        <Image
          source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with your image URL or local path
          style={styles.image}
        />
        <Text style={styles.categoryName}>Insecticides</Text>
        
        <Text style={styles.rating}>Rating: 4.5</Text>
      </View>

      {/* Fungicides Category */}
      <View style={styles.categoryContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6nZmryOH-OZYfIwtpFyMtLfjnlSkW_boxSoIhmVVJ3esc3x_Y25O2Qk&s' }} // Replace with your image URL or local path
          style={styles.image}
        />
        <Text style={styles.categoryName}>Pesticides</Text>
        <Text style={styles.rating}>Rating: 4.5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductCategory;