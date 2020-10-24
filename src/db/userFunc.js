import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage'
//IOS LOCAL HOST
//192.168.0.102
const URL = "http://10.0.2.2:3000/user"
const headers = {
        'Accept':'application/json',
        'Content-Type':'application/json',
    
}

export const register = async (name, email, password, birth, phone) =>
{
    var user = {
        name,
        email,
        password,
        birth,
        phone
    }
    return await axios.post(`${URL}/register`,
    {
        name: user.name,
        email: user.email,
        password: user.password,
        birth: user.birth,
        phone: user.phone
    }, headers).then(async (r) =>{
        user = r.data.response
        await AsyncStorage.setItem("user_info", JSON.stringify(user))
        return user
    }).catch((err) =>{
        console.log(err.message)
    })
}

export const login = async (email, password) =>
{
    var user = {
        email,
        password
    }
    return await axios.post(`${URL}/login`,{
        email: user.email,
        password: user.password
    }, headers).then(async (r) =>{
       
        if(r.status === 200)
        {
            var token = r.data.response
            user = r.data.user
            console.log(token)
            await AsyncStorage.setItem("user_token", JSON.stringify(token))
            await AsyncStorage.setItem("user_info", JSON.stringify(user))
            return user
        }
        
        
    }).catch((err) =>{
        alert(err.message)

    })
}
