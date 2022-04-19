import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from '@mui/material/Button';


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
        <div>
            <h1>Sign-up for a new account</h1>
        <form onSubmit={handleSubmit}>
          <p>Name:</p>
          <input value={name} onChange={(e)=> setName(e.target.value)}/>
                <p>Email: </p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p>Password: </p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button variant="primary" 
                        size="lg" 
                        onClick={handleSubmit}
                        disabled={loading}>
                        {loading ? 'Loading...' : 'Register'}
                </button>
                {!loading &&
                <>
                    <div className="alt-text">
                        Already have an account? 
                    </div>
                    <Button secondary type="button" size="sm" variant='outlined' href='/login'>Login Here</Button>

                </>
                }
            </form>
        </div>
    )
}
export default Register
