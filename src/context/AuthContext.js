import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";


//estado inicial
export const authInitialState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
};

//Allow us to say how is the context and what is [Typescript]
export const AuthContextProps = {
    authState: {},
    signIn: () => {},
    changeFavIcon: (iconName) => {},
    logOut: () => {},
    changeUser: (userName) => {},
}

//To create the context
export const AuthContext = createContext({} = AuthContextProps);

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    console.log('hola');
    console.log(authState);
    const signIn = () => {
        dispatch({type: 'signIn'})
    };

    const changeFavIcon = (iconName) => {
        dispatch({type: 'changeIcon', payload: iconName})
    };

    const logOut = () => {
        dispatch({type: 'logOut'})
    };

    const changeUser = (userName) => {
        dispatch({type: 'changeUser', payload: userName})
    };
    
    console.log(AuthContext);

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            changeUser,
            logOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
};

