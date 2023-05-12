import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import { selectIsLogged, signIn } from "./redux-store/authenticationSlice";
import Routes from "./routes/Routes";
import { getToken } from "./services/tokenServices";

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */
const App = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    const token = getToken();
    if (token) dispatch(signIn(token));
    setIsLogin(false);
  }, []);

  if (isLogin) return null;

  return (
    <BrowserRouter>
      {isLogged}
      <Navbar searchValue={searchValue} onSearchChange={handleSearchChange} />
      <main className="lg:pt-24 lg:px-5 md:px-0 bg-black/60 h-max">
        <Routes searchValue={searchValue} />
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
