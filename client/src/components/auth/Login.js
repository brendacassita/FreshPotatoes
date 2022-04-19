import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from '@mui/material/Button';


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
        <div>
           
            <h1>Login:</h1>
        <form onSubmit={handleSubmit}>
          
            <p>Email</p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <br/>
                <br/>
                <p>Password</p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                
                <button  variant="primary" 
                         size="lg" 
                         onClick={handleSubmit}
                         disabled={loading}>
                         {loading ? 'Loading...' : 'Login'}
                </button>
                
                {!loading &&
                <>
                    <div className="alt-text">
                       
                        Don't have an account?

                    </div>
                    
                    <Button secondary type="button" variant='outlined' href='/register'>Sign-up</Button>
                    {/* <button secondary type="button" href='/register'> */}
                    {/* </Button> */}
                    
                </>
                }
            </form>
           
        </div>
    )
}
export default Login
