import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


export const AuthContext = React.createContext()


// creates Provider - is going to wrap app
const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    // a null user is a not auth user (not logged in)
    // if I have a user they will authenticated
    const [user, setUser] = useState(null)

    // register
    // called on submit on register page
    const handleRegister = async (user)=>{
        try{
            let res = await axios.post('/api/auth', user) //
            setUser(res.data.data)
            navigate('/') // home page
            // setUser
        } catch(err){
            alert('error')
            console.log(err)
        }
    }

    // login

    // logout

    // using provider to pass some data
    // going to used to share/update data in app
    return (
        <AuthContext.Provider value={{user, handleRegister}}>
           {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider