import React, { useState } from 'react';
import DeliveryCard from './DeliveryCard';
import CardsAddress from './CardsAddress';
import AddressView from '../../views/AddressView';

const AdressCard = () => {
    const [adress, setAdress] = useState(false);
    const [deleveryAdress, setDeleveryAdress] = useState(false);

    return (
        <div>
            <div className="bg-black/50 rounded-2xl p-10 mt-3 ">
                <div className="flex items-center mb-4">
                    <input
                        onChange={(e) => {
                            setAdress(false);
                           
                        }}
                        checked={adress === false}
                        id="adressAccount"
                        type="radio"
                        value="3"
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-3 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Utiliser l'adresse du compte
                    </label>
                   <div className='p-10'>
                        {<AddressView /> }
                   </div>
                </div>
                <div className="flex items-center">
                    <input
                        onChange={(e) => {
                            setAdress(true);
                        }}
                        checked={adress === true}
                        id="newAdress"
                        type="radio"
                        value="4"
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        adresse différente du compte
                    </label>
                </div>
                <div className="p-10">
                    {adress ? <DeliveryCard /> : ""}
                </div>
                
            </div>
        </div>
    );
};

export default AdressCard;

// Dev:Bernier Rémi