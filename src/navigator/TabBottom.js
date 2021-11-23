import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { T1Screen } from '../screens/T1Screen';
import { T2Screen } from '../screens/T2Screen';
import { T3Screen } from '../screens/T3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTapNav } from './TopTapNav';
import Icon from 'react-native-vector-icons/FontAwesome';

export const TabBottom = () => {
    return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>  
};

const TabBottomAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <TabBottomAndroid.Navigator
      sceneAnimationEnabled = {true}
      barStyle = {{
        backgroundColor: colores.principal
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
            //console.log(route);
            let iconName;
            switch(route.name){
                case 'T1Screen':
                    iconName = <Text><Icon name="rocket" size={20} color="#900" /></Text>
                break;
                case 'T2Screen':
                    iconName = <Text><Icon name="star" size={20} color="#900" /></Text>
                break;
                case 'StackNavigator':
                    iconName = <Text><Icon name="trash" size={20} color="#900" /></Text>
                break;
            }
            return <Text style={{color}}>{iconName}</Text>
        }
      })}
    >
      <TabBottomAndroid.Screen name="T1Screen" options={{title: 'Tab1'}} component={T1Screen} />
      <TabBottomAndroid.Screen name="T2Screen" options={{title: 'Tab2'}} component={TopTapNav} />
      <TabBottomAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </TabBottomAndroid.Navigator>
  );
}

const TabBottomIOS = createBottomTabNavigator();

const TabsIOS = ()=>{
  return (
    <TabBottomIOS.Navigator
      sceneContainerStyle = {{
          backgroundColor: 'white' /*Color de fondo de los tabs */
      }}
      tabBarOptions = {{
          activeTintColor : colores.principal,
          style: {
              borderTopColor: colores.principal,
              borderTopWidth: 0,
              backgroundColor: 'black'
          }, labelStyle: {
              fontSize: 15
          }
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
            //console.log(route);
            let iconName;
            switch(route.name){
                case 'T1Screen':
                    iconName = 'T1'
                break;
                case 'T2Screen':
                    iconName = 'T2'
                break;
                case 'StackNavigator':
                    iconName = 'ST'
                break;
            }
            return <Text style={{color}}>{iconName}</Text>
        }
      })}
      
    >
      <TabBottomIOS.Screen name="T1Screen" options={{title: 'Tab1'}} component={T1Screen} />
      <TabBottomIOS.Screen name="T2Screen" options={{title: 'Tab2'}} component={Top} />
      <TabBottomIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
      
    </TabBottomIOS.Navigator>
  );
}