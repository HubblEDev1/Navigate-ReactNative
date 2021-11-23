import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {
    
    const insets= useSafeArea();
    const {authState} = useContext(AuthContext);
    
    
    return(
        <View style = {{marginTop:insets.top+28}}>
            <Text style = {styles.title} >Settings</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
        </View>
    )
}