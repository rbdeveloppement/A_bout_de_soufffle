import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { addAddress } from "../api/backend/address";
import { validationSchemaAddress } from "../constants/regex";
import { URL_ADDRESS } from "../constants/urls/urlFrontEnd";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../redux-store/authenticationSlice";

const AddAddressView = () => {
  const token = useSelector(selectToken);
  const loggedUser = useSelector(selectUser);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    address: "",
    postal: "",
    city: "",
    country: "",
  };
  const createAddress = (value) => {
    addAddress(value, loggedUser.username, token).then((response) => {
      if (response.status === 201) {
        navigate(URL_ADDRESS);
      }
    });
  };
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md space-y-8 rounded-md bg-slate-200/70 p-4 py-12 px-4 shadow sm:px-6 lg:px-8">
          <div>
            <div className="flex justify-center"></div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
              Création d'addresse
            </h2>
          </div>

          <hr />

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaAddress}
            onSubmit={createAddress}
          >
            {
              <Form>
                <div className="flex flex-col space-y-3 rounded-md shadow-sm">
                  <div>
                    <label htmlFor="name"></label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Nom de l'addresse"
                      className="input bg-slate-200 rounded-3xl"
                    />
                    <ErrorMessage
                      name="name"
                      className="text-red-800"
                      component="p"
                    />
                  </div>

                  <div>
                    <label htmlFor="address"></label>
                    <Field
                      name="address"
                      type="text"
                      placeholder="Votre addresse"
                      className="input bg-slate-200 rounded-3xl"
                    />
                    <ErrorMessage
                      name="address"
                      className="text-red-800"
                      component="p"
                    />
                  </div>

                  <div>
                    <label htmlFor="postal"></label>
                    <Field
                      name="postal"
                      type="text"
                      placeholder="Votre code postal"
                      className="input bg-slate-200 rounded-3xl"
                    />
                    <ErrorMessage
                      name="postal"
                      className="text-red-800"
                      component="p"
                    />
                  </div>

                  <div>
                    <Field
                      name="city"
                      type="text"
                      placeholder="Votre ville"
                      className="input bg-slate-200 rounded-3xl"
                    />
                    <ErrorMessage
                      name="city"
                      className="text-red-800"
                      component="p"
                    />
                  </div>

                  <div>
                    <Field
                      name="country"
                      type="text"
                      placeholder="Votre pays"
                      className="input bg-slate-200 rounded-3xl"
                    />
                    <ErrorMessage
                      name="country"
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
                    Créer
                  </button>
                </div>
              </Form>
            }
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddAddressView;
