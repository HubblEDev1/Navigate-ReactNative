import React, { useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';


//interface Props extend StackSCreenProps<RootStackParams, 'PersonaScreen'>();

export const PersonaScreen = ({route, navigation}) =>{
    
    const {changeUser} = useContext(AuthContext);

    useEffect(() => {
        changeUser(route.params.name)
        navigation.setOptions({
            title: route.params.name
        })
    }, [])
    
    return(
        <View style = {styles.borderMargin}>
            <Text style = {styles.title}>
                {JSON.stringify(route.params)}
            </Text>    
        </View>
    )
};