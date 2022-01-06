import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import Register from "./Register/Register";
import Header from "./Header/Header";
import React, { useContext } from "react";
import { StoreContext } from "../store/storeProvider";
import HomeLogged from "./HomeLogged/HomeLogged";
import AsideNav from "./HomeLogged/AsideNav/AsideNav";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function Main() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 10000,
    offset: "100px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  const { user } = useContext(StoreContext);
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/register" render={() => <Register />}></Route>
            <Route path="/login" render={() => <Login />}></Route>
            {/* <Route path="/search" render={() => <h2>Search</h2>}></Route> */}
            <Route path="/about" render={() => <h2>About</h2>}></Route>
            <Route path="/contact" render={() => <h2>Contact</h2>}></Route>
            <Route
              path="/"
              render={() => (user ? <HomeLogged /> : <Home />)}
            ></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </AlertProvider>
  );
}

export default Main;
