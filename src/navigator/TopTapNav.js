import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

export const TopTapNav = () => {
  
    const {top:paddingTop} = useSafeAreaInsets();

    return (
    <Tab.Navigator
        
        style={{paddingTop}}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions = {{
          activeTintColor : colores.principal,
          showIcon: true,
          style: {
              borderTopColor: colores.principal,
              borderTopWidth: 0,
              /*backgroundColor: 'black'Change the color of tabs */
          }, labelStyle: {
              fontSize: 15
          }
      }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color, focused, size}) => {
                //console.log(route);
                console.log(route.name);
                let iconName;
                switch(route.name){
                    case 'Albums':
                        iconName = <Text><Icon name="rocket" size={20} color="#900" /></Text>
                    break;
                    case 'Chat':
                        iconName = <Text><Icon name="rocket" size={20} color="#900" /></Text>
                    break;
                    case 'Contacts':
                        iconName = <Text><Icon name="rocket" size={20} color="#900" /></Text>
                    break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
          })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}