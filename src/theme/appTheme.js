import {StyleSheet} from 'react-native';

export const colores = {
    principal: 'red',
    drawer: 'black'
}

export const styles = StyleSheet.create({
    borderMargin:{
        marginHorizontal: 20
    } ,
    title: {
        fontSize: 30, 
        marginBottom: 10,
    },
    box:{
        height: 60,
        width: 60,
        borderRadius: 0,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar:{
        width: 150,
        height: 95,
        borderRadius: 40,
        borderColor: 'white',
        backgroundColor: 'red',
        borderWidth: 2
    },
    photo:{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    menuContainer:{
        marginTop: 150,
        alignItems:'center',
        backgroundColor:'red'
    }, 
    menuText:{
        fontSize: 25,
        color: 'white',
        justifyContent: 'space-evenly',
    }
})