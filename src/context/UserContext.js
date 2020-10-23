import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const UserContext = createContext();

export default function UserProvider({ children }){
    const [theme, setTheme] = useState('#000000')
    const [logged, setLogged] = useState(false)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState("maxgps5@hotmail.com")
    const [phone, setPhone] = useState(null)
    const [birth, setBirth] = useState(null)
    const [password, setPassword] = useState("12345678")
    useEffect(()=> {
        getTheme()
    }, [])
    async function getTheme()
    {
        const themeAsync = await AsyncStorage.getItem('theme')
        setTheme(themeAsync)
    }
    return (
        <UserContext.Provider value={{theme, setTheme, 
        logged, setLogged, 
        name, setName, email, setEmail, phone, setPhone, birth, setBirth,
        password, setPassword
        
        }}>
            {children}
        </UserContext.Provider>
    )
}