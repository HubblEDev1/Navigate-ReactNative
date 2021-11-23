import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tab1Screen } from './src/screens/Tab1Screen';
import { StackNavigator } from './src/navigator/StackNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerNav } from './src/navigator/DrawerNav';
import { TabBottom } from './src/navigator/TabBottom';
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNav/>
      </AppState>
    </NavigationContainer>
  )
};

const AppState = ({children}) => {
  console.log(children);
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}