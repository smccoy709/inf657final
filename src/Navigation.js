import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/movie/HomeScreen';
import MoviesScreen from './screens/movie/MoviesScreen';
import MovieDetailsScreen from './screens/movie/MovieDetailsScreen';
import MovieReviewsScreen from './screens/movie/MovieReviewsScreen';
import LoginScreen from './screens/movie/LoginScreen';
import SignUpScreen from './screens/movie/SignUpScreen';
import ProfileScreen from './screens/movie/ProfileScreen';
import FavoritesScreen from './screens/movie/FavoritesScreen';

import CustomButton from "./shared/CustomButton";

// Context
import { UserAuth } from './context/AuthContext';
const Stack = createNativeStackNavigator();
const homeName = 'Home';
const moviesName = 'Movies';
const favoritesName = 'Favorites';

const Tab = createBottomTabNavigator();

function Navigation2() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{
              title: 'Sign In',
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              title: 'Sign Up',
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
      </NavigationContainer>
      );
      }
      function Navigator() {
        return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
            } else if (rn === moviesName) {
              iconName = focused ? 'film' : 'film-sharp';
            } else if (rn === favoritesName) {
              iconName = focused ? 'heart' : 'heart-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={moviesName} component={MoviesScreen} />
        <Tab.Screen name={favoritesName} component={FavoritesScreen} />
      </Tab.Navigator>
  );
      }

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Movies' component={TabNavgiator} />
            <Drawer.Screen name='Profile' component={ProfileScreen} />
            <Drawer.Screen name='MovieReviews' component={MovieReviewsScreen} />
        </Drawer.Navigator>
    );
}

export default Navigation2;