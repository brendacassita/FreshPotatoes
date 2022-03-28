// REVIEW OF PROVIDERS
// CREATE CONTEXT FROM REACT
// createContext => {Consumer,Provider} 
// a way to 'consume' the data and way to 'provide' data
// hooks: useContext(Context) a new and better way to 'consume' data
import axios from 'axios'

import React,{useState} from 'react'

// can do this because AuthProvider is wrapped in my BrowserRouter 
// in index.js
import { useNavigate } from 'react-router-dom'

// useContext(AuthContext) a new and better way to 'consume' data
// Has to be done from a functional component
export const AuthContext = React.createContext()

// another way to get the data (if it is class component)
export const AuthConsumer = AuthContext.Consumer

// create Provider
const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    // a null user is a not authed user (ie not logged)
    // if I have a user they will authenticated
    // user : {id email,...more}
    const [user, setUser] = useState(null)

    // register
    // called on submit on a register page
    const handleRegister = async (user)=>{
        console.log('going to create user in handleRegister:', user)
        try{
            // no token needed
            let res = await axios.post('/api/auth',user)
            //res.data.data is the user
            // behind the scenes
            // there is also a token being sent back here, that
            // devise-axios is keeping track of
            setUser(res.data.data)
            navigate('/')
            // setUser
        } catch(err){
            // potentially a lot of work here
            //TODO: show why it didn't work (good UX)
            alert('error: unable to register, do you have a unique/valid email, is password greater than 6')
            console.log(err)
        }
    }
    // login
    const handleLogin = async (user)=>{
        console.log('going to login user in handleLogin:', user)
        try{
            // this call will give us back the user from DB
            // assuming email and password are correct
            // no token needed
            let res = await axios.post('/api/auth/sign_in',user)
            setUser(res.data.data)
            navigate('/')
            // setUser
        } catch(err){
            // potentailly a lot of work here
            alert('error Logining in is email and password valid?')
            console.log(err)
        }
    }
    // logout
    const handleLogout = async ()=>{
        console.log('going to logout user in handleLogin:')
        try{
            // NEED TO SEND TOKEN: DONE WITH HELP INITMIDDLEWARE
            // token needed: token is what is going to be used to find
            // the user
            let res = await axios.delete('/api/auth/sign_out')
            // no token given back
            setUser(null)
            navigate('/login')
            // setUser
        } catch(err){
            alert('error Logining out did you send the token?')
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, handleRegister, handleLogin, handleLogout}}>
           {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider