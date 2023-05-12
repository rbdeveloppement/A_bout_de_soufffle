import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROLE_ADMIN } from "../constants/rolesConstant";
import { URL_ADMIN_HOME } from "../constants/urls/urlFrontEnd";
import { selectHasRole } from "../redux-store/authenticationSlice";

import "../assets/styles/HomeView.css";
import CarouselHome from "../components/layouts/CarouselHome";
import CardsHome from "../components/layouts/CardsHome";
import { popularcards } from "../api/backend/cards";
import { selectArticlesByNameContaining } from "../redux-store/cartSlice";

const HomeView = (props) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    popularcards().then((resp) => {
      setArticles(resp.data);
    });
  }, []);

  const searchedArticles = selectArticlesByNameContaining(articles, props.searchValue);

  const PopularCards = searchedArticles.map((article) => (
    <div className="" key={article.id}>
      <CardsHome
        id={article.id}
        title={article.name}
        prix={article.price}
        image={article.illustration}
      />
    </div>
  ));

  return (
    <div>
      <CarouselHome />
      <div className="flex justify-between my-6 px-2">
        <div>
          <h4 className="font-bold mx-8 text-white">Top des vente !</h4>
        </div>
        <div>
          <button
            type="button"
            className="inline-block rounded bg-black/30 px-5 mr-7  py-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#8B0000] transition duration-150 ease-in-out hover:bg-red-800/70 hover:shadow-[0_8px_9px_-4px_#8B0000,0_4px_18px_0_#8B0000] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_#8B0000,0_4px_18px_0_#8B0000] focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-[0_8px_9px_-4px_#8B0000,0_4px_18px_0_#8B0000]"
          >
            Tout voir
          </button>
        </div>
      </div>
      <div className="flex-row grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
        {PopularCards}
      </div>
    </div>
  );
};

export default HomeView;
