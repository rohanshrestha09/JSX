import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEvent = () => {
    const data = {
      username: username,
      password: password,
    };

    async function Post() {
      axios.post("/login", data);
    }
    Post();
  };
  return (
    <Container fluid className="login-root">
      <form className="login-signin">
        <h1>Sign In</h1>
        <div className="login-icons">
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
          <FontAwesomeIcon icon={faGooglePlus} size="2xl" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Forgot your password?</p>
        <Link to="/home" className="decor">
          <Button
            variant="outline-danger"
            type="submit"
            className="login-btn"
            onClick={handleEvent}
          >
            Sign In
          </Button>
        </Link>
      </form>
      <Outlet />
    </Container>
  );
};

export default Login;
