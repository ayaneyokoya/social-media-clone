import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>SociaLink.</h1>
          <p>
            Welcome to SociaLink, the ultimate social media platform designed to help you form connections with friends and family,
            and stay up to date with all of the latest trends and topics that matter to you most. 
            Are you ready to join a community that values genuine connections, collaboration, and personal growth? SociaLink awaits you. 
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login