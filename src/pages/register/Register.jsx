import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>SociaLink.</h1>
          <p>
            Welcome to SociaLink, the ultimate social media platform designed to help you form connections with friends and family,
            and stay up to date with all of the latest trends and topics that matter to you most. 
            Are you ready to join a community that values genuine connections, collaboration, and personal growth? SociaLink awaits you. 
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register