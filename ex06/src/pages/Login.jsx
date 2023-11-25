import "./LoginStyle.css";
import { useState } from "react";
import { login } from "../../hooks/useAuth";

const Login = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const isLogin = await login(account);
    if (isLogin) {
      window.location.reload();
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div class="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            onChange={handleInput}
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            onChange={handleInput}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
