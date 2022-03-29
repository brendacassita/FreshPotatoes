import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Card from "./Card"


const Home = ()=>{
  
    return(
        <Card>
        <div>
            <h1>Home</h1>
            <p> Welcome to Starter Project!</p>
            <p>This is meant to be as a starting point for other projects</p>
        </div>
        </Card>
    )
}
export default Home


