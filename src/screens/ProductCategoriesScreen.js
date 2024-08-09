import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const categories = [
  { id: '1', name: 'Munchies', image: require('../assets/categories/1.png') },
  { id: '2', name: 'Sweets', image: require('../assets/categories/2.png') },
  { id: '3', name: 'Biscuits', image: require('../assets/categories/3.png') },
  { id: '4', name: 'Cold Drinks', image: require('../assets/categories/4.png') },
  { id: '5', name: 'Noodles, Pasta, Vermi', image: require('../assets/categories/5.png') },
  { id: '6', name: 'Breakfast & Sauces', image: require('../assets/categories/6.png') },
  { id: '7', name: 'Tea, coffee & more', image: require('../assets/categories/7.png') },
  { id: '8', name: 'Dairy, Bread & Eggs', image: require('../assets/categories/8.png') },
  { id: '9', name: 'Hair Care', image: require('../assets/categories/9.png') },
  { id: '10', name: 'Cleaning Essentials', image: require('../assets/categories/10.png') },
  { id: '11', name: 'Battery & Power', image: require('../assets/categories/11.png') },
  { id: '12', name: 'Female Hygiene', image: require('../assets/categories/12.png') },
];

export default function ProductCategoriesScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.itemWrapper}>
      <TouchableOpacity 
        style={styles.itemContainer} 
        onPress={() => navigation.navigate('ProductSubCategoriesScreen', { categoryId: item.id, categoryName: item.name })}
      >
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header 
        title="Product Categories"
        subtitle="Select a category"
        onBackPress={() => navigation.goBack()}
        onSearchPress={() => navigation.navigate('SearchScreen')}
      />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={4}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemWrapper: {
    alignItems: 'center',
    margin: 5,
    width: 70, // Width to match itemContainer and text
  },
  itemContainer: {
    width: 70,
    height: 70, // Adjusted to fit within the wrapper
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    justifyContent: 'center', // Centers content vertically
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5, // Space between the text and the box
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    width: 70, // Match the width of the container
  },
  listContainer: {
    paddingHorizontal: 20,
  },
});
