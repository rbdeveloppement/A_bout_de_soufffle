import React from "react";
import { useNavigate } from "react-router-dom";

function CardsBuying(article) {
  const navigate = useNavigate();

  return (
    <div className="bg-black/50 rounded-2x rounded-2xl flex justify-between p-5 mb-5">
      <div className="flex">
        <div className="max-w w-56 shadow-m rounded-lg">
          <img
            onClick={() => {
              navigate(`/${article.id}`);
            }}
            className="rounded-lg"
            src="src\app\assets\img\spiderman2.jpg"
            alt="image"
          />
        </div>
        <div className="text-white capitalize ps-5">
          <div className="">
            <h5>Spiderman Mils Morales</h5>
            <h6 className="text-base text-white/80 my-2 ">
              Système : <span className="text-white">Playstation 5</span>
            </h6>
            <h6 className="text-base text-white/80 my-2 ">
              acheter le : <span className="text-white">16/04/2023</span>
            </h6>
          </div>
        </div>
      </div>
      <div className="mt-20">
       <h6>Total : <span> 69.99 €</span></h6>
      </div>
    </div>
    
  );
}

export default CardsBuying;
