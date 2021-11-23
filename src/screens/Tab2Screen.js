import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab2Screen = () => {
    const navigator = useNavigation();//Uso del hook
    useEffect(() => {
        navigator.setOptions({
            title: "Hola mundo",
            headerBackTitle: 'return'
        })
        
    }, [])
    
    return(
        <View style = {styles.borderMargin}>
            <Text style={styles.title}>Página2screen</Text>
            <Button title="Ir página 3" onPress = {() => navigator.navigate('Tab3Screen') }/>           
        </View>
    )
};