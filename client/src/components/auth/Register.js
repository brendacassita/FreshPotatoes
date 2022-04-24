import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from '@mui/material/Button';
import '../CssFIles/Login-out.css';
import {Link} from '@mui/material';

import p from '../../Images/Potatoe.png'


let timeout;

const Register = ()=>{
    const [email, setEmail] = useState('test1@test.com')
    const [password, setPassword] = useState('123456')
  const [loading,setLoading] = useState(false);
  const [name, setName] = useState()

    // const [confirmPassword, setConfirmPassword] = useState('') // not need but nice for UX

    const auth = useContext(AuthContext)
   

    const handleSubmit = (e)=>{
        e.preventDefault()
        auth.handleRegister({email, password, name})
        setLoading(true);
        timeout = setTimeout (()=> {
            setLoading(false);
        }, 2000)
    }

        useEffect(()=> {
            return () => {
                if(timeout) {
                    clearTimeout(timeout);
                }
            }
        }, [])
    // with devise these are required
  return (
      <div  className="login-background App" >
        <div className="loginborder">
        <h1>Sign-up </h1>
        <div className="logincard">
        <form onSubmit={handleSubmit}>
          <p className='loginnames'>Name:</p>
          <input value={name} onChange={(e)=> setName(e.target.value)}/>
                <p className="loginnames">Email: </p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p className="loginnames">Password: </p>
          <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} />
          
          
           <div className='buttonlogin'>
          
                {!loading &&
                <>
                  <div className="login-btns">
               
                <p className="acnt">Already have an account?</p><Link href='/login'>LOGIN </Link>
                </div>
                
                    {/* <Button className="buttonlogin btnloginhere" type="button"  variant='outlined' href='/login'>Login</Button> */}

                </>
              }
              <Button
            className="buttonlogin1 btnregister"
            variant="contained" 
                        onClick={handleSubmit}
                        disabled={loading}>
                        {loading ? 'Loading...' : 'Register'}
              </Button>
          </div>
          </form>
              </div>
          </div>
        </div>
    )
}
export default Register
