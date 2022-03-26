import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


export const AuthContext = React.createContext()


// creates Provider - is going to wrap app
const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    // a null user is a not auth user (not logged in)
    // if i have a user they will be authenticated
    const [user, setUser] = useState(null)

    // register
    // called on submit on register page
    const handleRegister = async (user)=>{
        console.log('going to create user in handleRegister:', user)

        try{
            let res = await axios.post('/api/auth', user) //
            setUser(res.data.data)
            navigate('/') // home page
            // setUser
        } catch(err){
            alert('error: unable to register, do you have a unique/valid email, is password greater than 6')
            console.log(err)
        }
    }

    // login
    const handleLogin = async (user)=>{
        console.log('going to login user in handleLogin:', user)

        try{
            let res = await axios.post('/api/auth/sign_in', user) //
            setUser(res.data.data)
            navigate('/') // home page
            // setUser
        } catch(err){
            alert('error Logining in is email and password valid?')
            console.log(err)
        }
    }


        // logout
        const handleLogout = async ()=>{
            console.log('going to logout user in handleLogin:')
            try{
                // NEED TO SEND TOKEN: done with help from initMiddleware

                let res = await axios.delete('/api/auth/sign_out')
                setUser(null)
                navigate('/login')
                // setUser
            } catch(err){
                alert('error logging out, did you send the token?')
                console.log(err)
            }
        }

    // using provider to pass some data
    // going to used to share/update data in app
    return (
        <AuthContext.Provider value={{user, setUser, handleRegister, handleLogin, handleLogout}}>
           {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider