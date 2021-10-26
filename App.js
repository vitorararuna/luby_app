import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer >
        <Routes />
    </NavigationContainer>
  );
}
