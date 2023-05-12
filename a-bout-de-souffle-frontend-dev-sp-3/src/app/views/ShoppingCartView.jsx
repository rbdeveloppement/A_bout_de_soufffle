import React from "react";
import CardsShop from "../components/layouts/CardsShop";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { URL_CONFIRM_ORDER } from "../constants/urls/urlFrontEnd";
import { selectArticlesByNameContaining } from "../redux-store/cartSlice";

function ShoppingCartView(props) {

  const  articles  = useSelector((state) => selectArticlesByNameContaining(state.cart.articles, props.searchValue));
  const cards = articles.map((article) => (
    <div key={article.id}>
      <CardsShop
        id={article.id}
        title={article.name}
        price={article.price}
        illustation={article.illustration}
        count={article.count}
      />
    </div>
  ));

  const totalPrice = articles.reduce(
    (totalPrice, article) => totalPrice + article.price * article.count,
    0
  );
  return (
    <>
      <div>
        <div className="sm:grid sm:grid-cols-12 sm:flex-wrap pb-28">
        <div className="text-white col-span-7">
          <h5 className="text-center">Votre Panier</h5>
          {cards}
        </div>
        <div className="bg-black/50 col-span-3 col-start-9 max-h-60 rounded-2xl p-10 mt-3  text-white">
          <div className="flex justify-between">
            <h6>Total:</h6>
            <h6>{totalPrice}.00 €</h6>
          </div>
          <Link to={URL_CONFIRM_ORDER}>
          <div className="text-center mt-20">
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Passer la commande
            </button>
          </div>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default ShoppingCartView;
