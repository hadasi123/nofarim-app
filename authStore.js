import { createStore } from 'redux';

const defaultState = {
    loggedIn: false,
    email: undefined
}

function authStore(state = defaultState, action) {

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            {
                return { ...state, email: action.email, loggedIn: true }

            }
        case 'LOGOUT_SUCCESS':
            {
                return { ...state, email: undefined, loggedIn: false }

            }
        default:
            return state
    }
}

export default createStore(authStore)