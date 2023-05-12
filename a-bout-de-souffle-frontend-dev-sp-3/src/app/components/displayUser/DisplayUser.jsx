import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { URL_HOME } from "../../constants/urls/urlFrontEnd";

import { displayUser } from "../../api/backend/displayUser.js";
import { selectUser } from "../../redux-store/authenticationSlice";
import { validationSchemaUser } from "../../constants/regex";

// Création des chemins de validation pour Yup

/**
 * Component DisplayUser
 */
const DisplayUser = () => {
  const loggedUser = useSelector(selectUser);
  const [errorLog, setErrorLog] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

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
  // Initialisation des champs de saisie
  const initialValues = {
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.phone,
  };

  const handleConfirmDisplayUser = (values) => {
    navigate(URL_HOME);
  };

  return (
    <>
      <div className="w-full max-w-md space-y-8 rounded-md bg-slate-200/70 p-4 py-12 px-4 shadow sm:px-6 lg:px-8">
        <div>
          <div className="flex justify-center"></div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Affichage des informations de l'utilisateur
          </h2>
        </div>

        <hr />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaUser}
          onSubmit={handleConfirmDisplayUser}
        >
          {
            <Form>
              <div className="flex flex-col space-y-3 rounded-md shadow-sm">
                <div>
                  <label htmlFor="first_name"></label>
                  <Field
                    name="first_name"
                    type="text"
                    value={user.firstName}
                    placeholder="Votre prénom"
                    autoComplete="given-name"
                    className="input bg-slate-200 rounded-3xl"
                  />
                  <ErrorMessage
                    name="first_name"
                    className="text-red-800"
                    component="p"
                  />
                </div>

                <div>
                  <label htmlFor="last_name"></label>
                  <Field
                    name="last_name"
                    type="text"
                    value={user.lastName}
                    placeholder="Votre nom"
                    autoComplete="family-name"
                    className="input bg-slate-200 rounded-3xl"
                  />
                  <ErrorMessage
                    name="last_name"
                    className="text-red-800"
                    component="p"
                  />
                </div>

                <div>
                  <label htmlFor="email"></label>
                  <Field
                    name="email"
                    type="text"
                    value={user.email}
                    placeholder="e-mail"
                    autoComplete="email"
                    className="input bg-slate-200 rounded-3xl"
                  />
                  <ErrorMessage
                    name="email"
                    className="text-red-800"
                    component="p"
                  />
                </div>

                <div>
                  <label htmlFor="phone"></label>
                  <Field
                    name="phone"
                    type="tel"
                    value={user.phone}
                    placeholder="numéro de téléphone"
                    autoComplete="tel"
                    className="input bg-slate-200 rounded-3xl"
                  />
                  <ErrorMessage
                    name="phone"
                    className="text-red-800"
                    component="p"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn btn-black group relative w-50 bg-slate-200 rounded-2xl m-4"
                >
                  Ok
                </button>
              </div>
            </Form>
          }
        </Formik>
      </div>
    </>
  );
};

export default DisplayUser;
