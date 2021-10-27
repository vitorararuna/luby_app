import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/provders/user';

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer >
          <Routes />
          <StatusBar backgroundColor="#1F1F1F" style="light" />
        </NavigationContainer>
      </UserProvider>

    </>
  );
}
