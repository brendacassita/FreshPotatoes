import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from '@mui/material/Button';
import '../CssFIles/Login-out.css';
import p from '../../Images/Potatoe.png'
import f from '../../Images/fry.png'
import {Link} from '@mui/material';


//revert the state after 2 seconds pass so not contantly in loading state 
let timeout;

const Login = ()=>{
    const [email, setEmail] = useState('test1@test.com')
    const [password, setPassword] = useState('123456')
    const [loading, setLoading] = useState(false);
    
    // const [confirmPassword, setConfirmPassword] = useState('') // not need but nice for UX

    const auth = useContext(AuthContext)
   

    const handleSubmit = (e)=>{
        e.preventDefault()
        auth.handleLogin({email, password})
        //as soon as submit form 
        setLoading(true);
        //inthe cb function set loading to false after 2 secs and reset the loading state of the form 
        timeout = setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    //setting state on a no longer mounted component after above
    useEffect(()=> {
        //return a function with an if statement, check if a timeout exists
        //if we hit handlesubmit and navigated away from login page
        //so login components unmounted so want to clear timeout function
        //so pass timeout  to clearTimeout function and pass in useEffect empty array
        //so will only run when componeent mounts 
        return () => {
            if(timeout){
                clearTimeout(timeout);
            }
        }
    },[])

    // with devise these are required
  return (
      <div className="login-background App" >
        <div className='loginborder'>
        <div className='logincard'>
          <img className='potatoe'src={p}></img>
         
          
          <h1>Login</h1>
        </div>
        <div className='logincard'>
        <form onSubmit={handleSubmit}>
          
            <p className="loginnames">Email</p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                
            <p className="loginnames">Password</p>
                <input value={password} type='password' onChange={(e)=> setPassword(e.target.value)}/>
          
            <div className='buttonlogin'>
         
                
                {!loading &&
                <>
              <div className="login-btns">
               
                <p className="acnt">Dont have an account?</p><Link href='/register'>SIGN UP HERE </Link>
                {/* <Button
                  className='buttonlogin btnsignup'
                   type="button" variant='outlined' href='/register'>Sign-up</Button> */}
                   </div>
                </>
              }
               <Button className='buttonlogin1 btnlogin'
           
            variant="contained"
            type="button"
           onClick={handleSubmit}
            disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </Button>
                   </div>
            </form>
           </div>
      </div>
      </div>
    )
}
export default Login
