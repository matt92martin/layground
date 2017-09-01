import { combineReducers } from 'redux'
import {PH_ACTION} from '../actions/actions.js'


export function somethings(state = [], action) {

    switch(action.type){

        case PH_ACTION:
            return [
                ...state,
                {
                    text: action.text
                }
            ]

        default:
            return state
    }

}
