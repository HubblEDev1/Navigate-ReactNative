import React, { useEffect, useContext } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome';


export const Tab1Screen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => 
            <TouchableOpacity 
                style = {{ marginLeft: 15 } }
                title = "Menu"
                onPress = {() => navigation.toggleDrawer() } 
            > 
            < Text > 
                < Icon name = "bars" size = { 20 } color = "#900"/> 
            </Text>
            </TouchableOpacity >
        })
    }, [])

    return(
        <View style = { styles.borderMargin }>
            <Text style = { styles.title }> Tab1Screen </Text> 
            <Button title = "Ir página 2" onPress = {() => navigation.navigate('Tab2Screen') }/> 
            <Button title = "Persona" onPress = {() => navigation.navigate('PersonaScreen') }/> 
            <Text> Navegar con argumentos </Text> 
            <View style = {{ flexDirection: 'row' } }>
                <TouchableOpacity style = { styles.box } onPress = {
                    () => navigation.navigate('PersonaScreen', { id: 1, name: 'Edwin' }) } >
                <Text> Edwin </Text> 
                </TouchableOpacity> 
                <TouchableOpacity style = { styles.box } onPress = {
                    () => navigation.navigate('PersonaScreen', { id: 2, name: 'Valdez' }) } >
                <Text > Valdez </Text> 
                </TouchableOpacity> 
            </View> 
        </View>
    )
};