import { useState } from "react";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("asd");
  const [password, setPassword] = useState("asd");

  const onLoginChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <section className="section section__login">
      {/* <h2>Login</h2> */}
      <div className="login__icon"></div>
      <form onSubmit className="form login">
        <label htmlFor="email">
          <input
            type="email"
            className="input login__input"
            placeholder="E-mail..."
            name="email"
            value={email}
            onChange={onLoginChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            className="input login__input"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onPasswordChange}
          />
        </label>
        <button type="submit" className="login__btn">
          Zaloguj się
        </button>
      </form>
    </section>
  );
}

export default Login;
