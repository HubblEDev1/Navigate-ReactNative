import React from 'react';
import { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';

export const TouchableIcon = ({iconName}) => {
    const {changeFavIcon} = useContext(AuthContext);
    console.log(changeFavIcon);
    return (
        <TouchableOpacity onPress={() => changeFavIcon(iconName)}>
            <Icon name={iconName} size={50} color="#900"/>
        </TouchableOpacity>
    )
};
