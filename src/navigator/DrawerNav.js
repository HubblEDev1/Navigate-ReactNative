import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { TabBottom } from './TabBottom';
import { TopTapNav } from './TopTapNav';

const Drawer = createDrawerNavigator();

export const DrawerNav = ({navigation}) => {
  const {width} = useWindowDimensions();
  
  return (
    <Drawer.Navigator 
      drawerType={width > 750 ? 'permanent':'front'}
      drawerContent={(props)=><MenuInterno {...props}/>}
    >
      <Drawer.Screen name="TabBottom" component={TabBottom} />
      <Drawer.Screen name="TabTop" component={TopTapNav} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}) => {
  console.log({navigation});
  return(
    <DrawerContentScrollView style = {{backgroundColor: 'black'}}>
      {/*Photo*/}
      <View style={styles.photo}>
        <Image
          source={{uri: 'https://biblosgym.com/wp-content/uploads/2021/03/cropped-logo-trazo-blanco.png'}}
          style={styles.avatar}
        />
      </View>
      {/*Menu */}
      <View style = {styles.menuContainer}>
        <TouchableOpacity onPress={()=>{navigation.navigate('StackNavigator')}}>
          <Text style = {styles.menuText}>Bottom Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('StackNavigator')}}>
          <Text style = {styles.menuText}>Top Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('SettingsScreen')}}>
          <Text style = {styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}