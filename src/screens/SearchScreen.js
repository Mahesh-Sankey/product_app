import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Snickers Peanut Chocolate Bar', weight: '22g', price: '₹24', image: require('../assets/categories/1.png') },
  { id: '2', name: 'Snickers Almond Chocolate Bar', weight: '22g', price: '₹24', image: require('../assets/categories/2.png') },
  { id: '3', name: 'Snickers Butterscotch Chocolate Bar', weight: '22g', price: '₹24', image: require('../assets/categories/3.png') },
  { id: '4', name: 'Snickers Berry Whip Chocolate Bar', weight: '20g', price: '₹24', image: require('../assets/categories/4.png') },
];

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/categories/searchBack.png')} style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search for products"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        {query ? (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Image source={require('../assets/categories/searchCancel.png')} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <Image source={require('../assets/categories/searchbox.png')} style={styles.icon} />
        )}
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>

            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => setQuery(item.name)}
            >
              <Image source={item.image} style={styles.suggestionImage} />
              <Text style={styles.suggestionText}>{item.name} - {item.weight}</Text>
            </TouchableOpacity>

            {query.toLowerCase() === item.name.toLowerCase() && (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <View style={styles.cardContent}>
                  <Text style={styles.cardWeight}>{item.weight}</Text>
                  <Text style={styles.cardPrice}>{item.price}</Text>
                  <Image source={item.image} style={styles.cardImage} />
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 20,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: '#000',
    padding: 5,
    borderRadius: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  suggestionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#000',
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  suggestionImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
  suggestionText: {
    fontSize: 16,
    color: '#000',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardWeight: {
    fontSize: 16,
    color: '#000',
  },
  cardPrice: {
    fontSize: 16,
    color: '#000',
  },
  cardImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  addButton: {
    backgroundColor: '#0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
