import { URL_DISPLAY_USER } from "../constants/urls/urlFrontEnd";
import DisplayUser from "../components/displayUser/DisplayUser";
import React, { useEffect } from "react";

/**
 * View/Page DisplayUser
 *
 */
const DisplayUserView = () => {

  return (
    <div className="flex h-full items-center justify-center">
      <DisplayUser className="" />
    </div>
  );
};

export default DisplayUserView;
