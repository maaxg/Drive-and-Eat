import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [theme, setTheme] = useState('#000000')
    const [logged, setLogged] = useState(false)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState("maxgps@hotmail.com")
    const [phone, setPhone] = useState(null)
    const [birth, setBirth] = useState(null)
    const [password, setPassword] = useState("12345678")
    useEffect(() => {
        getTheme()
        login()

    }, [])
    async function login() {
        await AsyncStorage.getItem("user_info").then((r) => {
            const res = JSON.parse(r)
            setName(res.name)
            setEmail(res.name)
            setPhone(res.phone)
            setBirth(res.birth)
            setLogged(true)
        }).catch((e) =>{
            console.log(e.message)
            setLogged(false)
        })
    }
    async function setUser(user) {
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setBirth(user.birth)
    }
    async function getTheme() {
        const themeAsync = await AsyncStorage.getItem('theme')
        setTheme(themeAsync)
    }
    return (
        <UserContext.Provider value={{
            theme, setTheme,
            logged, setLogged,
            name, setName, email, setEmail, phone, setPhone, birth, setBirth,
            password, setPassword, setUser

        }}>
            {children}
        </UserContext.Provider>
    )
}