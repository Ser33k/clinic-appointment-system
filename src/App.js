import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/register" render={() => <Register />}></Route>
            <Route path="/login" render={() => <Login />}></Route>
            <Route path="/search" render={() => <h2>Search</h2>}></Route>
            <Route path="/about" render={() => <h2>About</h2>}></Route>
            <Route path="/contact" render={() => <h2>Contact</h2>}></Route>
            <Route path="/" exact render={() => <Home />}></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
