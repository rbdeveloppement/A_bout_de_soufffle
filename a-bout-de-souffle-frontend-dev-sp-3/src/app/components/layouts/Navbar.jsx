import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLogged,
  signOut,
} from "./../../redux-store/authenticationSlice";
import {
  URL_SHOPPINGCART,
  URL_LOGIN,
  URL_PROFILES,
  URL_ADDRESS,
} from "../../constants/urls/urlFrontEnd";

const Navbar = (props) => {
  const isLoggued = useSelector(selectIsLogged);

  const { articles } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <>
      <nav className="px-2 sm:px-4 py-1 bg-black/90 w-full z-20 fixed left-0 lg:block md:block sm:hidden">
        <div className="flex items-center justify-between mx-auto px-12">
          <a href="/" className="flex items-center">
            <img
              src="src\app\assets\img\logo.png"
              className="md:h-12 sm:h-1/6"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white"></span>
          </a>

          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="search"
              id="default-search"
              className="p-2 text-sm rounded-lg bg-red-800/50 placeholder-white/80 text-white"
              placeholder="Rechercher..."
              value={props.searchValue}
              onChange={props.onSearchChange}
            />
          </div>

          <div className="flex">
            {isLoggued ? (
              <div className="dropdown dropdown-hover dropdown-end">
                <label
                  tabIndex={0}
                  className="flex text-white font-extrabold rounded hover:text-red-800"
                >
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-12 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963
                         0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu  shadow w-44 bg-black/70 rounded-box text-sm text-gray-200"
                >
                  <li>
                    <a className="block px-4 py-2 hover:bg-red-800/50 hover:text-white">
                      Mes Commandes
                    </a>
                  </li>
                  <Link to={URL_PROFILES}>
                    <li className="block px-4 py-2 hover:bg-red-800/50 hover:text-white">
                      Mon Compte
                    </li>
                  </Link>
                  <Link to={URL_ADDRESS}>
                    <li className="block px-4 py-2 hover:bg-red-800/50 hover:text-white">
                      Mes Adresses
                    </li>
                  </Link>
                  <li>
                    <a
                      onClick={() => dispatch(signOut())}
                      className="block px-4 pt-2 hover:bg-red-800/50 hover:text-white"
                    >
                      Déconnexion
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link to={URL_LOGIN}>
                  <button className="text-white font-extrabold rounded hover:text-red-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-12 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 
                        9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>{" "}
                </Link>
              </div>
            )}

            <Link to={URL_SHOPPINGCART}>
              <button
                type="button"
                className="relative inline-flex items-center text-sm font-medium text-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-8  hover:text-red-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119
                     1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119
                      1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <div
                  className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold
                 text-white bg-red-500 border-2 border-gray-900 rounded-full -top-2 -right-2"
                >
                  {articles.length}
                </div>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="navbar bg-base-100 lg:hidden md:hidden sm:flex">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
    </>
  );
};

export default Navbar;
