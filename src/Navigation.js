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

const Tab = createBottomTabNavigator();
function TabNavgiator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Movies' component={HomeStackScreen} options={{
                tabBarIcon: ({size}) => {
                    <MaterialCommunityIcons name='home' color='black' size={size} />
                }
            }} />
            <Tab.Screen name='Favorites' component={FavoritesScreen} options={{
                tabBarIcon: ({size}) => {
                    <MaterialCommunityIcons name='cart' color='black' size={size} />
                }
            }} />
        </Tab.Navigator>
    )
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

export default function Navigation() {
    const { user } = UserAuth();
    return (
        <NavigationContainer>
            {user ? <DrawerNavigator /> : <AuthStackScreen />}
        </NavigationContainer>
    );
}
