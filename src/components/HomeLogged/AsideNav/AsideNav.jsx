import "./AsideNav.scss";
import React, { useContext } from "react";
import { StoreContext } from "../../../store/storeProvider";
import { NavLink } from "react-router-dom";

function AsideNav() {
  const { user } = useContext(StoreContext);
  console.log(user);

  const items =
    user?.role === "PATIENT" ? (
      <>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/reservation"}>
            Rezerwacja wizyty
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/search"}>
            Wyszukiwanie lekarzy
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/cancel"}>
            Anulowanie wizyty
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/history"}>
            Historia wizyt
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/scheduled"}>
            Zaplanowane wizyty
          </NavLink>
        </li>
      </>
    ) : (
      <>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/schedule"}>
            Grafik pracy
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/hours"}>
            Ustalanie dostępności godzinowej
          </NavLink>
        </li>
      </>
    );

  return (
    <aside>
      <nav className="aside__nav">
        <ul className="nav__list">{items}</ul>
      </nav>
    </aside>
  );
}

export default AsideNav;
