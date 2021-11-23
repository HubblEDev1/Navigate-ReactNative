import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {
    const {signIn, authState} = useContext(AuthContext);
    console.log(authState);
    return (
        <View style={ styles.borderMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            {
                !authState.isLoggedIn ? <TouchableOpacity  style={styles.menuContainer} title = "SignIn" onPress = {signIn}><Text>SIgn IN</Text></TouchableOpacity>: null
            }
            
        </View>
        
        
    )
};