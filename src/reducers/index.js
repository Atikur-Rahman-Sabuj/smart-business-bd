import {combineReducers} from 'redux'
import user from './userReducer'
import {reducer as formReducer} from 'redux-form';
import flashMessage from './flashMessageReducer'
const reducer = combineReducers({
    user,
    flashMessage,
    form: formReducer,
})
export default reducer