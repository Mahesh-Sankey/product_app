import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';

const subCategories = [
  { id: '1', name: 'Noodles, Pasta, Vermi' },
  { id: '2', name: 'Breakfast & Sauces' },
  // ... other subcategories
];

export default function ProductSubCategoriesScreen({ route, navigation }) {
  const { categoryId, categoryName } = route.params;

  return (
    <View style={styles.container}>
      <Header 
        title={categoryName}
        subtitle="Select a subcategory"
        onBackPress={() => navigation.goBack()}
        onSearchPress={() => navigation.navigate('SearchScreen')}
      />
      <FlatList
        data={subCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('ProductListScreen', { subCategoryId: item.id, subCategoryName: item.name })}
          >
            <Text style={styles.text}>{item.name}</Text>
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
  },
  item: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});
