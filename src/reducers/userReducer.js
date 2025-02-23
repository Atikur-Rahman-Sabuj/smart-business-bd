import * as types from '../actions/types'
export default function(state=[], action){
    switch(action.type){
        case types.AUTH:
            return {...state, auth: action.payload}
        default:
            return state;
    }
}