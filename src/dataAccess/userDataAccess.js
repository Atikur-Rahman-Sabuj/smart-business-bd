import Axios from 'axios'
class userDataAccess{
    
    getUserAuth(){
        //this call expects a object like
        // {
        //     type:"user" or "admin" or "none"
        //     name:""
        //     address:""
        //     ..... other informaations about user
        //      the type is necessary here for authorization
        // }
        return Axios.get("/api/ api url here").then(response=>response.data)
        .catch(error=>{throw {type:'none'}})
    }


    userLogin(userData){
        return Axios.post("/api/ api url here", userData).then(response=>response.data)
    }

    userLogout(userData){
        return Axios.post("/api/ api url here", userData).then(response=>response.data)
    }

    userRegister(userData){
        return Axios.post("/api/ api url here", userData).then(response=>response.data)
    }


}
export default new userDataAccess()