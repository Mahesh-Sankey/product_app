import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from '../screens/OrdersScreen';
import ProductCategoriesScreen from '../screens/ProductCategoriesScreen';
import ProductSubCategoriesScreen from '../screens/ProductSubCategoriesScreen';
import ProductListScreen from '../screens/ProductListScreen';
import OverviewScreen from '../screens/OverviewScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Orders: require('../assets/icons/orders.png'),
  Products: require('../assets/icons/inventory_2.png'),
  Overview: require('../assets/icons/currency_rupee.png'),
  Profile: require('../assets/icons/person.png'),
};

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Orders"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource = icons[route.name];
          return (
            <Image
              source={iconSource}
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: focused ? '#000' : 'gray'
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Products" component={ProductCategoriesScreen} />
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ProductSubCategoriesScreen" component={ProductSubCategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
