import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Badge from "react-bootstrap/esm/Badge"
import Button from "react-bootstrap/esm/Button"

const Register = ()=>{
    const [email, setEmail] = useState('test1@test.com')
    const [password, setPassword] = useState('123456')
    
    // const [confirmPassword, setConfirmPassword] = useState('') // not need but nice for UX

    const auth = useContext(AuthContext)
   

    const handleSubmit = (e)=>{
        e.preventDefault()
        auth.handleRegister({email, password})
    }

    // with devise these are required
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <p>Email: </p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p>Password: </p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <Button variant="primary" size="sm" onClick={handleSubmit}>Register</Button>
            </form>
        </div>
    )
}
export default Register