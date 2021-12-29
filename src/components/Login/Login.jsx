import { useContext, useState } from "react";
import "./Login.scss";
import UserService from "../../service/UserService";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../../store/storeProvider";

function Login() {
  const { setUser } = useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onLoginChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    UserService.loginUser({ email, password }).then((r) => {
      if (r.status === 200) {
        setUser(r.data);
        history.push("/reservation");
      } else {
        alert("Zły login lub hasło!");
      }
    });
  };

  return (
    <section className="section section__login">
      {/* <h2>Login</h2> */}
      <div className="login__icon"></div>
      <form onSubmit={handleLoginSubmit} className="form login">
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
