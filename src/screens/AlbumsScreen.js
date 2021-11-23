import React, {useContext} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {
    
    const {logOut ,authState} = useContext(AuthContext);
    return (
        <View style={ styles.borderMargin}>
            <Text>AlbumsScreen</Text>
            {
                authState.isLoggedIn ? <TouchableOpacity  style={styles.menuContainer} title = "LogOut" onPress = {logOut}><Text>LogOut</Text></TouchableOpacity>: null
            }
        </View>
    )
};