import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Login = ()=>{
    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('123456')
    const auth = useContext(AuthContext)
    // not need but nice for UX
    // const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        auth.handleLogin({email, password})
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p>Password</p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login