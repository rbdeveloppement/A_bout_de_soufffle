import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { productDetail } from "../api/backend/article";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux-store/cartSlice";

function ArticleView() {
  const supportRef = useRef(null);

  const [article, setArticle] = useState(null);

  const { articles } = useSelector((state) => state.cart);

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    productDetail(params.id).then((resp) => {
      setArticle(resp.data[0]);
    });
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(article));
  };

  return (
    <div className="font-semibold capitalize mb-14 p-10 text-white/70">
      <div className="flex-row grid lg:grid-cols-2 my-12 font-semibold">
        <div>
          <img className="rounded-2xl" src={article?.illustration} alt="" />
        </div>
        <div className=" rounded-2xl px-12">
          <div className="mt-5">
            <h3 className="text-center">{article?.name}</h3>
            <h6 className="text-sm ml-4 my-5 text-gray-400">
              Sortie le :{" "}
              <span className="text-white/60">Date de sortie ici</span>
            </h6>
            <h6 className="text-sm ml-4 mt-5 text-gray-400 flex">
              En stock :{" "}
              {article?.quantity > 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
              {article?.quantity == 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              )}
            </h6>
          </div>
          <div className="my-6 mx-14">
            <label
              htmlFor="support"
              className="block mb-2 text-sm font-medium"
            >
              sélectionner votre support :
            </label>
            <select defaultValue="PS5"
              ref={supportRef}
              id="support"
              className=" border text-sm rounded-lg  block w-full p-2.5 bg-black/80 border-gray-600 placeholder-gray-400 text-white focus:ring-red-800 focus:border-red-800"
            >
              <option className="" value="PS4">
                Playstation 4
              </option>
              <option value="PS5">Playstation 5</option>
              <option value="XBOX ONE">XBOX ONE</option>
              <option value="XBOX X|S">XBOX X|S</option>
              <option value="PC">
                PC
              </option>
              <option value="SWITCH">Nintendo Switch</option>
            </select>
          </div>
          <div className="justify-center flex">
            <h3>{article?.price},00€</h3>
          </div>
          <div className="justify-center flex">
            {!articles.some((cartItem) => cartItem.id === article?.id) ? (
              <button
                type="button"
                onClick={handleAddToCart}
                className="mt-5 py-2.5 px-5 mr-2 mb-4 text-sm font-medium  focus:outline-none rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
              >
                AJOUTER AU PANIER
              </button>
            ) : (
              <span className="mt-4">
                Vous avez deja le produit dans le panier
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="text-center ">
        {/* <h5 className="font-bold">Détails produit :</h5> */}
        <hr />
        <div className="">
          <h6 className="underline mb-3">À propos du jeu :</h6>
          <p className="">{article?.description}</p>
        </div>
        <div className="text-gray-500 text-xs mt-4">
          <h6>
            Classification: <span>PEGI 18</span>
          </h6>
          <h6>
            Editeur: <span>ACTIVISION</span>
          </h6>
          <h6>
            Genre:{" "}
            <span>
              Coopération, Co-op en ligne, Multijoueur, Multijoueur
              multiplateforme, Jeux solo, Action
            </span>
          </h6>
        </div>
      </div>
      <div className="flex justify-center">
        <video className="rounded-2xl mt-3 w-4/5 h-auto max-w-full" controls>
          <source src="video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default ArticleView;
