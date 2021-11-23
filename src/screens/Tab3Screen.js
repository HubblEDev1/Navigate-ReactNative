import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab3Screen = ({navigation}) => {
    return(
        <View style = {styles.borderMargin}>
            <Text style={styles.title}>Tab3Screnn</Text>
            <Button title="regresar" onPress={() => navigation.pop()}/> 
            <Button title="Ir página 1" onPress={()=>navigation.popToTop('Tab2Screen')}/>
                  
        </View>
    )
};