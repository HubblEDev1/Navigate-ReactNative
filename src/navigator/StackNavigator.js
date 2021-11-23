import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

/*Only typescript
export type RootStackParams = {
  Tab1Screen: undefined,
  Tab2Screen: undefined,
  Tab3Screen: undefined,
  PersonaScreen: {id: Number, name: string},
}
*/

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    //initialRouteName="Tab2Screen" define el inicio del stack
    screenOptions={{
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent'
      },
      cardStyle:{
        backgroundColor: 'white'
      }
    }}
    >
      <Stack.Screen name="Tab1Screen" options={{title:"Página 1"}} component={Tab1Screen} />
      <Stack.Screen name="Tab2Screen" options={{title:"Página 2"}} component={Tab2Screen} />
      <Stack.Screen name="Tab3Screen" options={{title:"Página 3"}} component={Tab3Screen} />
      <Stack.Screen name="PersonaScreen" options={{title:"Persona"}} component={PersonaScreen} />
    </Stack.Navigator>
  )
}
