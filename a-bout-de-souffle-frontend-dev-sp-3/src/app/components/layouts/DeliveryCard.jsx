import React from 'react';

function DeliveryCard() {
    return (
        <div>
            <div className="bg-black/50 col-span-3 col-start-9  max-h-60 rounded-2xl p-10 mt-3 wrap-contact100  flex justify-center">
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
                        className="wrap-input100 validate-input mb-3"
                        data-validate="Firstname is required"
                    >
                        <input
                            className="rounded-md w-96 text-black bg-white px-2"
                            type="text"
                            name="name"
                            placeholder="Prénom"
                        />
                    </div>
                    <div
                        className="wrap-input100 validate-input mb-3 "
                        data-validate="Postal adress must be valid"
                    >
                        <input
                            className="rounded-md w-96 text-black bg-white px-2"
                            type="PostalAddressType"
                            name="adress"
                            placeholder="Adresse"
                        />
                    </div>
                    <div
                        className="wrap-input100 validate-input mb-3 "
                        data-validate="Zipcode must be valid"
                    >
                        <input
                            className="rounded-md w-96 text-black bg-white px-2"
                            type="PostalAddressType"
                            name="ZipCode"
                            placeholder="Code Postal"
                        />
                    </div>
                    <div
                        className="wrap-input100 validate-input mb-3 "
                    >
                        <input
                            className="rounded-md w-96 text-black bg-white px-2"
                            type="PostalAddressType"
                            name="City"
                            placeholder="Ville"
                        />
                    </div>
                    <div className="text-end">
                        <button
                            className="rounded-md text-white mx-4 hover:bg-red-800 p-2"
                            type="submit"
                        >
                            sauvegarder
                        </button>
                    </div>
                </form>
            </div>
            <div>

            </div>

        </div>
    );
};

export default DeliveryCard;

// Dev:Bernier Rémi