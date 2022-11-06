import "./Login.css"

export default function Login()
{
    return(
        <div className ="Login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type ="text" className="loginInput" placeholder="Enter your email"/>
                <label>Password</label>
                <input type ="password" className="passwordInput" placeholder="Enter your password"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="registerButton">Register</button>
        </div>
    )
}