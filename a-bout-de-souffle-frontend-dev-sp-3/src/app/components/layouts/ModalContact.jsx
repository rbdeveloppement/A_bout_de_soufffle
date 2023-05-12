import React, { useState } from "react";
import { Contact } from "../../api/backend/contact";

function Modal() {
  const [textLength, setTextLength] = useState(0);
  const min = 50;
  const max = 500;
  const handleChange = (e) => {
    setTextLength(e.target.value.length); //à l'évènement "onChange", on récupère la longueur de la valeur entrée(value, ici sera un "string)"
  };

  const handleSubmit = (values) => {
    values.preventDefault();
    const formData = new FormData(values.target);
    const jsonData = Object.fromEntries(formData.entries());
    Contact(jsonData).then((res) => {
      if (res.status === 200) {
        alert("mail bien envoyé");
        // Navigate(URL_HOME)   //si on veut faire une redirection dans le code (changement de page), utiliser un "useNavigate" https://reactrouter.com/en/main/components/navigate
        window.location.reload();
      }
    });
  };

  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="">
        Contactez nous !
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div onSubmit={handleSubmit} className="modal bg-opacity-90">
        <div className="modal-box rounded-xl bg-black/70 border-red-800/60 border relative">
          <label
            htmlFor="my-modal-3"
            className="btn rounded-3xl hover:bg-red-800 bg-black/60 btn-md absolute right-2 top-2"
          >
            ✕
          </label>

          <h4 className="text-lg font-bold mb-3 text-center text-white">
            Contactez nous !
          </h4>

          <div className="wrap-contact100  flex justify-center">
            <form className="contact100-form validate-form">
              <div
                className="wrap-input100 validate-input mb-3"
                data-validate="Name is required"
              >
                <input
                  className="rounded-md w-96 text-black bg-white px-2"
                  type="text"
                  name="name"
                  placeholder="Nom"
                />
              </div>
              <div
                className="wrap-input100 validate-input mb-3 "
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="rounded-md w-96 text-black bg-white px-2"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="" data-validate="Message is required">
                <textarea
                  className="rounded-md w-96 text-black bg-white px-2 h-24 mt-3"
                  name="message"
                  minLength={min}
                  maxLength={max}
                  onChange={handleChange}
                  placeholder="Votre Message (minimumm 50  caractères)"
                  isinvalid={textLength < max ? "true" : "false"} //"isinvalid" ne veut pas avoir de booléeen mais "true" ou "false" en string
                />
              </div>
              <span className={"" + (textLength > 49 ? "text-white" : "")}>
                Nombre de caractere: {textLength}/{max}
              </span>
              <div className="mt-3">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="copy-mail"
                />
                <label className="mx-2 text-white" htmlFor="ckb1">
                  Recevoir une copie du mail
                </label>
              </div>
              <div className="text-end">
                <button
                  className="rounded-md text-white mx-4 hover:bg-red-800 p-2"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;


// Dev:Bernier Rémi, Desse Alexandre