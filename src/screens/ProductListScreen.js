import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';

const products = [
  { id: '1', name: 'Product 1', image: require('../assets/categories/1.png'), price: '₹100' },
  { id: '2', name: 'Product 2', image: require('../assets/categories/2.png'), price: '₹200' },
  // ... more products
];

export default function ProductListScreen({ route, navigation }) {
  const { subCategoryName } = route.params;

  return (
    <View style={styles.container}>
      <Header 
        title={subCategoryName}
        subtitle="Select a product"
        onBackPress={() => navigation.goBack()}
        onSearchPress={() => navigation.navigate('SearchScreen')}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: '#333',
  },
});
