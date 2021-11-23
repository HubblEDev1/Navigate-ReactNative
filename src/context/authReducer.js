import {authInitialState} from './AuthContext';

const AuthAction = {type: 'signIn'} | {type: 'changeIcon', payload: ''} | {type: 'logOut'} | {type: 'changeUser', payload: ''};

//genera un estado
export const authReducer = (state = authInitialState, action = AuthAction) => {
    
    switch (action.type) {
        case 'signIn':
            console.log('holaaaa!');
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'changeIcon':{
            return {
                ...state,
                favoriteIcon: action.payload
            }
        }

        case 'logOut':{
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        }

        case 'changeUser':{
            return {
                ...state,
                username: action.payload
            }
        }

        default:
            return state;
    }
};

