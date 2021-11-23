import React, { useEffect } from 'react';
import { Text, Touchable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableIcon } from '../components/TouchableIcon';

export const T1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, [])

    return(
        
        <View>
            <TouchableIcon iconName="rocket"/>           
        </View>
        )
};