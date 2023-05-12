import React, { useState } from "react";
import { useSelector } from "react-redux";
import ConfirmCard from "../components/layouts/ConfirmCard";
import DeliveryCard from "../components/layouts/DeliveryCard";
import AdressCard from "../components/layouts/AdressCard";
import CardsAddress from "../components/layouts/CardsAddress";
import AddressView from "./AddressView";

function ConfirmOrder() {
  const { articles } = useSelector((state) => state.cart);

  const resume = articles.map((article) => (
    <div key={article.id}>
      <ConfirmCard
        id={article.id}
        title={article.name}
        price={article.price}
        count={article.count}
      />
    </div>
  ));
  const totalPriceArticle = articles.reduce(
    (totalPriceArticle, article) =>
      totalPriceArticle + article.price * article.count,
    0
  );

  const [livraison, setLivraison] = useState(false);

  const [delivery, setDelivery] = useState(totalPriceArticle);

  const addDelivery = () => {
    //fonction qui defini le prix de livraison en cochant le radio de la livraison on la rappel dans l'input
    setDelivery(delivery + 7.99);
  };
  const deleteDelivery = () => {
    //fonction qui retire le prix de livraison en cochant le radio de la livraison on la rappel dans l'input
    setDelivery(totalPriceArticle);
  };

  return (
    <div>
      <div>
        <div className="text-white">
       
        </div>
        <div className="bg-black/50 rounded-2xl p-10 mt-3 text-white">
        <h5>votre commande:</h5>
          <div className="sm:flex justify-between flex-wrap">
            {resume}
            <div className="text-center">
            
            <h6>Total jeux : {totalPriceArticle}.00 €</h6>
          </div>
          </div>
        </div>
      </div>

      <div className="bg-black/50 rounded-2xl p-10 mt-3 ">
        <div className="flex items-center mb-4">
          <input
            onChange={(e) => {
              setLivraison(false);
              deleteDelivery();
            }}
            checked={livraison === false}
            id="retrait"
            type="radio"
            value="1"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            retrait en magasin gratuit
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={(e) => {
              setLivraison(true);
              addDelivery();
            }}
            checked={livraison === true}
            id="livraison"
            type="radio"
            value="2"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            livraison à domicile à 7.99
          </label>
        </div>
        <div className="p-10">
            {livraison ? <AdressCard /> : ""}
            {/* {livraison ? <AddressView /> : ""} */}
            </div>
      </div>

      <div className="bg-black/50  max-h-60 rounded-2xl p-10 mt-3 ">
        <div className="text-center mb-2">
          <h6>prix total a payer: {delivery} €</h6>
        </div>
        <button
          className="bg-red-800 w-full hover:bg-red-900 text-white 
                                        font-bold py-2 px-4 border border-red-700 rounded"
        >
          payer
        </button>
      </div>
    </div>
  );
}

export default ConfirmOrder;

// Dev:Bernier Rémi
