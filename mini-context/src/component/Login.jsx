import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <>
            <input placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
            onClick={handleSubmit}
            >Submit</button>
        </>
    )
}
export default Login;