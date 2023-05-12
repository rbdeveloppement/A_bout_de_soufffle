import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { URL_HOME } from "../../constants/urls/urlFrontEnd";

import { registration } from "../../api/backend/register";
import { validationSchema } from "./../../constants/regex";

/**
 * Component Register
 *
 */
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialisation des champs de saisie
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    control_password: "",
  };

  // Connexion vers l'API (à réaliser)
  const handleRegister = (values) => {
    console.log(values);
    registration(values)
    .then((res) => {
      if (res.status === 200) {
        alert(`erreur : ${res.data.emailError}`);
        dispatch(res.data);
        navigate(URL_HOME);
      }
    });
  };

  return (
    <>
      <div className="w-full max-w-md space-y-8 rounded-md bg-slate-200/70 p-4 py-12 px-4 shadow sm:px-6 lg:px-8">
        <div>
          <div className="flex justify-center"></div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Création de compte
          </h2>
        </div>

        <hr />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {
            <Form>
              <div className="flex flex-col space-y-3 rounded-md shadow-sm">
                <div>
                  <label htmlFor="first_name"></label>
                  <Field
                    name="first_name"
                    type="text"
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
                    placeholder="Votre e-mail"
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
                  <Field
                    name="password"
                    type="password"
                    placeholder="Votre mot de passe"
                    autoComplete="new-password"
                    className="input bg-slate-200 rounded-3xl"
                  />
                  <ErrorMessage
                    name="password"
                    className="text-red-800"
                    component="p"
                  />
                </div>

                <div>
                  <Field
                    name="control_password"
                    type="password"
                    placeholder="Confirmer votre mot de passe"
                    autoComplete="new-password"
                    className="input bg-slate-200 rounded-3xl"
                  />
                  <ErrorMessage
                    name="control_password"
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
                  S'inscrire
                </button>
              </div>
            </Form>
          }
        </Formik>
      </div>
    </>
  );
};

export default Register;
