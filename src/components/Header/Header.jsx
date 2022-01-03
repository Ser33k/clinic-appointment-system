import React, { useContext } from "react";

import "./Header.scss";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/storeProvider";

const Header = () => {
  const { user } = useContext(StoreContext);
  const { setUser } = useContext(StoreContext);

  const handleLogoutClick = () => {
    setUser(null);
  };

  const buttons = user ? (
    <>
      {/* <li className="menu__item ">
              <button>
                Zarejestruj się
              </button>
            </li> */}
      <li className="menu__item ">
        <button className="menu__link--login" onClick={handleLogoutClick}>
          Wyloguj się
        </button>
      </li>
    </>
  ) : (
    <>
      <li className="menu__item ">
        <Link className="menu__link--register" to="/register">
          Zarejestruj się
        </Link>
      </li>
      <li className="menu__item ">
        <Link className="menu__link--login" to="/login">
          Zaloguj się
        </Link>
      </li>
    </>
  );

  return (
    <div className="header__container">
      <header className="header">
        <div className="header__logo">
          <Link to="/" className="logo__link">
            {/* <img src={logo} alt="logo" className="logo__img" /> */}
            <svg
              height="62px"
              viewBox="0 -16 462 462"
              width="70px"
              xmlns="http://www.w3.org/2000/svg"
              // fill="#F6FBF9"
              className="logo__svg"
            >
              <path d="m50.359375 429.851562h361.28125c27.789063-.09375 50.289063-22.613281 50.359375-50.402343v-291.484375c-.09375-27.734375-22.625-50.15625-50.359375-50.113282h-39.640625v-29.851562c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v29.851562h-246v-29.851562c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v29.851562h-43.640625c-27.734375-.042968-50.265625 22.378907-50.359375 50.113282v291.484375c.0703125 27.789062 22.570312 50.308593 50.359375 50.402343zm-34.359375-341.886718c.085938-18.902344 15.457031-34.164063 34.359375-34.113282h43.640625v29.578126c0 4.417968 3.582031 8 8 8s8-3.582032 8-8v-29.578126h246v29.578126c0 4.417968 3.582031 8 8 8s8-3.582032 8-8v-29.578126h39.640625c18.902344-.050781 34.273437 15.210938 34.359375 34.113282v38.886718h-430zm430 54.886718v236.597657c-.0625 18.957031-15.402344 34.316406-34.359375 34.402343h-361.28125c-18.957031-.085937-34.296875-15.445312-34.359375-34.402343v-236.597657zm0 0" />
              <path d="m227.628906 278.132812c.671875 3.835938 3.976563 6.65625 7.871094 6.71875h39.5v45.898438c0 33.414062 27.085938 60.5 60.5 60.5s60.5-27.085938 60.5-60.5v-67.464844c13.566406-4.230468 22.015625-17.726562 19.898438-31.78125-2.117188-14.050781-14.167969-24.457031-28.378907-24.507812-14.535156-.078125-26.859375 10.664062-28.769531 25.074218-1.90625 14.410157 7.195312 27.992188 21.25 31.703126v66.976562c0 24.578125-19.921875 44.5-44.5 44.5s-44.5-19.921875-44.5-44.5v-45.898438h38.699219c3.898437-.0625 7.199219-2.882812 7.875-6.71875l16.671875-92.621093c.421875-2.371094-.214844-4.804688-1.734375-6.671875-1.507813-1.847656-3.753907-2.941406-6.136719-2.988282h-16.375v-4c0-4.417968-3.582031-8-8-8s-8 3.582032-8 8v21c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-1h6.800781l-13.789062 77h-80.820313l-13.792968-77h7.601562v1c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-21c0-4.417968-3.582031-8-8-8s-8 3.582032-8 8v4h-17.171875c-2.378906.03125-4.625 1.113282-6.136719 2.957032-1.519531 1.859375-2.15625 4.292968-1.734375 6.660156zm147.167969-42.300781c0-7.09375 5.75-12.839843 12.84375-12.839843 7.089844 0 12.839844 5.746093 12.839844 12.839843s-5.75 12.839844-12.839844 12.839844c-7.089844-.007813-12.832031-5.75-12.839844-12.835937zm0 0" />
              <path d="m130.835938 366.851562h.066406c22.65625.050782 44.402344-8.929687 60.425781-24.953124 16.023437-16.023438 25-37.769532 24.949219-60.425782.035156-47.078125-38.238282-84.621094-85.3125-85.621094h-.066406c-47.128907.109376-85.296876 38.304688-85.375 85.433594-.039063 47.078125 38.234374 85.566406 85.3125 85.566406zm.0625-155h.054687c38.253906 1 69.355469 31.410157 69.324219 69.664063-.027344 38.296875-31.082032 69.328125-69.378906 69.335937h-.050782c-38.382812-.015624-69.488281-31.144531-69.476562-69.527343.015625-38.382813 31.144531-69.488281 69.527344-69.472657zm0 0" />
              <path d="m91.886719 300.980469 19.691406.027343-.011719 19.710938c-.007812 4.425781 3.570313 8.023438 8 8.042969l22.605469.089843h.007813c2.128906-.035156 4.160156-.910156 5.652343-2.4375 1.503907-1.535156 2.347657-3.597656 2.347657-5.75l.011718-19.738281 19.703125-.074219c2.109375.019532 4.140625-.804687 5.640625-2.285156 1.503906-1.484375 2.351563-3.503906 2.359375-5.617187l.015625-22.515625c0-4.417969-3.578125-7.996094-7.996094-8l-19.699218-.011719.015625-19.683594c.003906-2.117187-.839844-4.148437-2.339844-5.640625-1.5-1.492187-3.539063-2.324218-5.65625-2.304687l-22.605469.058593h-.003906c-4.425781.019532-8 3.609376-8 8.035157l-.015625 19.734375-19.699219.230468h-.007812c-2.089844-.089843-4.125.667969-5.652344 2.097657-1.492188 1.40625-2.34375 3.363281-2.347656 5.414062l-.015625 22.613281c-.003907 4.417969 3.578125 8.003907 8 8.003907zm8.015625-22.378907 19.699218.25h.007813c4.460937-.109374 8.015625-3.765624 8-8.230468l.011719-19.925782h6.609375l-.015625 19.6875c0 2.121094.839844 4.15625 2.339844 5.660157 1.5 1.5 3.535156 2.339843 5.65625 2.339843h19.699218l-.011718 6.566407-19.699219-.097657h-.003907c-2.128906.027344-4.160156.898438-5.652343 2.417969-1.503907 1.53125-2.347657 3.589844-2.347657 5.734375l-.015624 19.699219h-6.609376l.015626-19.664063c0-2.121093-.84375-4.152343-2.34375-5.648437s-3.53125-2.332031-5.648438-2.328125l-19.703125.042969zm0 0" />
            </svg>
            <h2 className="logo__text">
              {user !== null
                ? user?.role === "PATIENT"
                  ? "Funkcje pacjenta"
                  : "Funkcje lekarza"
                : null}
            </h2>
          </Link>
        </div>
        <h3 style={{ lineHeight: "68px", color: "white" }}></h3>
        <nav className="navigation">
          <ul className="navigation__menu">
            <li className="menu__item">
              <Link className="menu__link" to="/about">
                O nas
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/contact">
                Kontakt
              </Link>
            </li>
            {buttons}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
