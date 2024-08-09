import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const productDetails = {
  id: '1',
  name: 'Snickers Peanut Chocolate Bar',
  image: require('../assets/categories/1.png'),
  weight: '22g',
  price: '₹24',
};

export default function SearchResultScreen({ route, navigation }) {
  const { productId } = route.params;
  const product = productDetails;

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productWeight}>{product.weight}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000', 
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productWeight: {
    fontSize: 14,
    color: '#000', 
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000', 
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
