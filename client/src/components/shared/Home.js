import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Home = ()=>{
    let auth = useContext(AuthContext)
    if(!auth.user){
        return<p>to do: should not be able to come here. not logged in, redirect</p>
    }
    return(
        <div>
            <h1>Home</h1>
            <p> Welcome to Starter Project!</p>
            <p>This is meant to as a starting point for other projects</p>
        </div>
    )
}
export default Home