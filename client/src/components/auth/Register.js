import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from '@mui/material/Button';
import '../CssFIles/Login-out.css';
import {Link} from '@mui/material';
import logo from '../../Images/Thelogo.png'
import p from '../../Images/Potatoe.png'
import fpf from '../../Images/FreshPotatoesFrylogo-01.png'

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
      <div  className="logout-background " >
      <div className="logoutborder">
        <h1 className="signup-title">Sign-up for Fresh Potatoes </h1>
        <img className="p" src={fpf} width='300' />
        {/* <img className='signup-logo' src={logo} width='300'/> */}
        <div className="logincard">
          
        <form className="signup-form" onSubmit={handleSubmit}>
          <p className='loginnames'>Name</p>
          <input className="login-btn" value={name} onChange={(e)=> setName(e.target.value)}/>
                <p className="loginnames">Email </p>
                <input className="login-btn" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p className="loginnames">Password </p>
          <input className="login-btn" value={password} type='password' onChange={(e) => setPassword(e.target.value)} />
          
          
           <div className='buttonlogin'>
{/*           
                {!loading &&  */}
                <>
                  <div className="login-btns">
               
                <p className="acnt">Already have an account?</p><Link href='/login'>Login here</Link>
                </div>
                
                    {/* <Button className="buttonlogin btnloginhere" type="button"  variant='outlined' href='/login'>Login</Button> */}

                </>
              {/* } */}
              <Button
            className="buttonregister btnregister"
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
