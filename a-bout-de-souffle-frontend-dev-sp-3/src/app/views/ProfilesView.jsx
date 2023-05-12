import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { displayUser } from "../api/backend/displayUser";
import { selectUser } from "../redux-store/authenticationSlice";

const ProfilesView = () => {
  const loggedUser = useSelector(selectUser);
  const [user, setUser] = useState([]);

  // Connexion vers l'API
  useEffect(() => {
    displayUser(loggedUser.username)
      .then((response) => {
        console.log("response.data : ", response.data);
        if (response.status === 200) {
          setUser(response.data);
        }
      })
      .catch(() => setErrorLog(true));
  }, []);

  return (
    <div className="flex justify-center p-12">
      <div className="bg-black/20 w-2/4 rounded-2xl p-6 border border-red-700">
        <div className="flex justify-between mb-5 p-5">
          <h4 className="text-white">Profil</h4>
          <button className="bg-red-800/90 hover:bg-black/50 text-black font-bold py-2 px-4 rounded-md">
            Modifier
          </button>
        </div>
        <div className="text-center text-white p-10">
          <div className="flex justify-between mb-5 border rounded-xl px-10 py-3">
            <h6 className="">Nom :</h6>
            <h6 className="">{user.firstName}</h6>
          </div>

          <div className="flex justify-between mb-5 border rounded-xl px-10 py-3">
            <h6>Prenom :</h6>
            <h6 className="">{user.lastName}</h6>
          </div>
          <div className="flex justify-between mb-5 border rounded-xl px-10 py-3">
            <h6>Email :</h6>
            <h6 className="">{user.email}</h6>
          </div>
          <div className="flex justify-between mb-5 border rounded-xl px-10 py-3">
            <h6>Password :</h6>
            <h6 className="">***a*p</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesView;
