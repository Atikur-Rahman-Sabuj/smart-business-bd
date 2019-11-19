import Axios from 'axios'
class userDataAccess{
    getUserAuth(){
        return Axios.get("/api/ api url here").then(response=>response.data)
    }
}
export default new userDataAccess()