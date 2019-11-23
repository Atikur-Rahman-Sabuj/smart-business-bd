import * as types from './types'
import userDataAccess from '../dataAccess/userDataAccess'
import shortid from 'shortid'

//#region user
export const userAuth=()=>{
    let user = userDataAccess.getUserAuth();
    return{
        type: types.AUTH,
        payload: user
    }
}



//#endregion

//#region Flash message
export const addFlashMessage = (message) => ({ type: types.ADD_FLASH_MESSAGE, message })
export const deleteFlashMessage = (id) => ({ type: types.DELETE_FLASH_MESSAGE, id })
export const showFlashMessageWithTimeout = (message, dispatch) => {
  message.id = shortid.generate()
    
  dispatch(addFlashMessage(message))

  setTimeout(() => {
    dispatch(deleteFlashMessage(message.id))
  }, 5000)
}
//#endregion