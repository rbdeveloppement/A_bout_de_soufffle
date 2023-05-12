import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import ArticleView from "../views/ArticleView";
import { PrivateRoute } from "./PrivateRoute";
import RegisterView from "../views/RegisterView";
import ProfilesView from "../views/ProfilesView";
import ShoppingCartView from "../views/ShoppingCartView";
import DisplayUserView from "../views/DisplayUserView";
import AddressView from "../views/AddressView";
import AddAddressView from "../views/AddAddressView";

import Cgv from "../views/Cgv";
import BuyingView from "../views/BuyingView";
import CgvDeux from "./../views/CgvDeux";
import ConfirmOrder from "../views/ConfirmOrder";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = (props) => {
  return (
    <RoutesContainer>
      <Route path={URL.URL_HOME} element={<HomeView searchValue={props.searchValue} />} />
      <Route path={URL.URL_ADMIN_HOME} element={<AdminHomeView />} />

      <Route path={URL.URL_LOGIN} element={<LoginView />} />

      <Route path={URL.URL_REGISTER} element={<RegisterView />} />

      <Route path={URL.URL_DISPLAY_USER} element={<DisplayUserView />} />

      <Route path={URL.URL_ARTICLE} element={<ArticleView />} />

      <Route path={URL.URL_CGV} element={<Cgv />} />
      <Route path={URL.URL_CGV2} element={<CgvDeux />} />
      <Route path={URL.URL_SHOPPINGCART} element={<ShoppingCartView searchValue={props.searchValue} />} />
      {/* <Route path={URL.URL_CONTACTFORM} element={<ContactForm />} /> */}
      <Route path={URL.URL_PROFILES} element={<ProfilesView />} />
      <Route path={URL.URL_BUYING} element={<BuyingView />} />
      <Route path={URL.URL_ADDRESS} element={<AddressView />} />
      <Route path={URL.URL_CONFIRM_ORDER} element={<ConfirmOrder />} />
      <Route path={URL.URL_ADDRESS_ADD} element={<AddAddressView />} />
    </RoutesContainer>
  );
};

export default Routes;
