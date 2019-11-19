import * as types from './types'
import userDataAccess from '../dataAccess/userDataAccess'

//#region user
export const userAuth=()=>{
    let user = userDataAccess.getUserAuth();
    return{
        type: types.AUTH,
        payload: user
    }
}


//#endregion