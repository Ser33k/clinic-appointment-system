import AsideNav from "./AsideNav/AsideNav";
import { Route } from "react-router-dom";
import "./HomeLogged.scss";
import ReserveAppointment from "./ReserveAppointment/ReserveAppointment";
import Search from "./Search/Search";
import History from "./History/History";
import Scheduled from "./Scheduled/Scheduled";
import { useContext } from "react";
import { StoreContext } from "../../store/storeProvider";
import Schedule from "./Schedule/Schedule";

function HomeLogged() {
  const { user } = useContext(StoreContext);
  console.log(user);
  const content =
    user.role === "PATIENT" ? (
      <>
        <Route path="/reservation" exact component={ReserveAppointment}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Route path="/cancel" exact render={() => <h2>Anulowanie</h2>}></Route>
        <Route path="/history" exact component={History}></Route>
        <Route path="/scheduled" exact component={Scheduled}></Route>
      </>
    ) : (
      <>
        <Route
          path="/schedule"
          exact
          render={() => <Schedule user={user} />}
        ></Route>
        <Route
          path="/hours"
          exact
          render={() => <h2>Ustalanie godzin</h2>}
        ></Route>
      </>
    );
  return (
    <div className="home__container">
      <div className="nav">
        <AsideNav />
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

export default HomeLogged;
