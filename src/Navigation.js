import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import MoviesScreen from './screens/movie/MoviesScreen';
import MovieDetailsScreen from './screens/movie/MovieDetailsScreen';
import MovieReviewsScreen from './screens/movie/MovieReviewsScreen';
import SignUpScreen from './screens/movie/SignUpScreen';
import LoginScreen from './screens/movie/LoginScreen';
import ProfileScreen from './screens/movie/ProfileScreen';
import FavoritesScreen from './screens/movie/FavoritesScreen';

// Context
import { UserAuth } from './context/AuthContext';

const Stack = createStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='MovieDetails' component={MovieDetailsScreen} />
        </Stack.Navigator>
    );
}

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    <AuthStack.Navigator>
            <AuthStack.Screen name='SignUp' component={SignUpScreen} />
            <AuthStack.Screen name='Login' component={LoginScreen} />
    </AuthStack.Navigator>
}

const moviesName = 'Movies';
const favoritesName = 'Favorites';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={moviesName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === moviesName) {
              iconName = focused ? 'home' : 'home-outline';
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

        <Tab.Screen name={moviesName} component={MoviesScreen} />
        <Tab.Screen name={favoritesName} component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
    )
}

export default Navigation;