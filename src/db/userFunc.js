import axios from "axios"
const URL = "http://127.0.0.1:3000/user"
const headers = {
    'Content-Type': 'application/json; charset=utf-8'
}

export const register = async (name, email, password, birth, phone) =>
{
    await axios.post(`${URL}/register`,
    {
        name,
        email,
        password,
        birth,
        phone
    }).then((r) =>{
        console.log(r.response)
    }).catch((err) =>{
        console.log(err.message)
    })
}

export const login = async (email, password) =>
{
    return await axios.post(`${URL}/login`,{
        email: email,
        password: password
    }, headers).then((r) =>{
        console.log(r.response)
    }).catch((err) =>{
        console.log(err.message)
    })
}
