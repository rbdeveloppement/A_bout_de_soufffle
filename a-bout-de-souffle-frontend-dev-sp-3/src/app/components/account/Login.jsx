import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { URL_HOME } from "../../constants/urls/urlFrontEnd";
import { signIn } from "../../redux-store/authenticationSlice";
import { authenticate } from "./../../api/backend/account";
import { validationSchemaLogin } from "../../constants/regex";

// Création des chemins de validation pour Yup

/**
 * Component Login
 *
 * @author Peter Mollet
 */
const Login = () => {
  const [errorLog, setErrorLog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialisation des champs de saisie
  const initialValues = {
    username: "",
    password: "",
  };

  // Connexion vers l'API
  const handleLogin = (values) => {
    authenticate(values)
      .then((res) => {
        if (res.status === 200 && res.data.token) {
          dispatch(signIn(res.data.token));
          navigate(URL_HOME);
        }
      })
      .catch(() => setErrorLog(true));
  };

  return (
    <div className="w-full max-w-md space-y-8 rounded-md bg-slate-200/70 p-4 py-12 px-4 shadow sm:px-6 lg:px-8">
      <div>
        <div className="flex justify-center"></div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
          Connectez-vous à votre compte
        </h2>
      </div>

      <hr />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaLogin}
        onSubmit={handleLogin}
      >
        {
          <Form>
            <div className="flex flex-col space-y-3 rounded-md shadow-sm">
              <div>
                <label htmlFor="username"></label>
                <Field
                  name="username"
                  type="text"
                  placeholder="Entrez votre e-mail"
                  autoComplete="e-mail"
                  className="input bg-slate-200 rounded-3xl"
                />
                <ErrorMessage
                  name="username"
                  className="text-red-800"
                  component="p"
                />
              </div>

              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Mot de passe"
                  autoComplete="current-password"
                  className="input bg-slate-200 rounded-3xl"
                />
                <ErrorMessage
                  name="password"
                  className="text-red-800"
                  component="p"
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm">
                <Link to="/forgot-password">
                  <span className="cursor-pointer font-medium text-primary-dark hover:text-primary ">
                    Mot de passe oublié?
                  </span>
                </Link>
                <Link to="/register">
                  <span className="cursor-pointer font-medium text-green-800 hover:text-primary ml-40">
                    s'inscrire
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-black group relative w-50 bg-slate-200 rounded-2xl"
              >
                Connexion
              </button>
            </div>
            {errorLog && (
              <div className="flex justify-center">
                <small className="text-sm italic text-red-600">
                  Login/Password incorrect(s)
                </small>
              </div>
            )}
          </Form>
        }
      </Formik>
    </div>
  );
};

export default Login;
