import fetch from 'isomorphic-fetch'

// PLACE HOLDER ACTION TYPES AND ACTION CREATORS

export const PH_ACTION = 'PH_ACTION'
export function actionSomething(text) {
    return {
        type: PH_ACTION,
        text
    }
}


export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export function increment() {
    return {
        type: INCREMENT_ASYNC
    }
}

export const REQUEST_REGISTER_USER = 'REQUEST_REGISTER_USER'
export function requestRegisterUser(username, password) {
    return {
        type: REQUEST_REGISTER_USER,
        username,
        password
    }
}

export const SET_LOGIN = "SET_LOGIN"
export function setLogin(username, token) {
    return {
        type: SET_LOGIN,
        username,
        token
    }
}