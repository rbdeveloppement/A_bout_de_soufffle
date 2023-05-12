import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../redux-store/cartSlice";

function ConfirmCard(article) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleOnKeyDown(e) {
    const value = article.count;
    const length = value.toString().length;
    const key = e.key;
    const regex = /^[0-9]$/;
    const maxLength = value && Number(value.charAt(0)) > 10 ? 1 : 2;

    if (key !== "Backspace") {
      if (
        !regex.test(key) ||
        length === maxLength ||
        (length === 0 && Number(key) === 0)
      ) {
        e.preventDefault();
      }
    }
  }

  return (
    <>
      <div>
        <div className="text-white p-5 capitalize col-span-5 inline">
          <div className="">
            <h6>{article.title}</h6>
          </div>
          <div className="">
            <div className="text-gray-500">Playstation 5</div>
            <div>
              <div>{article.price},00 €</div>
            </div>
          </div>
          <div className="mt-10">
            <svg
              onClick={() => dispatch(deleteFromCart(article.id))}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-red-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077h6.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <div className="">
              <span>Qté :</span>

              <input
                onKeyDown={(e) => handleOnKeyDown(e)}
                onChange={(e) => dispatch(addToCart({ ...article, ...e }))}
                className="text-sm rounded-lg w-20 p-2.5 bg-black/20"
                type="number"
                maxLength="3"
                value={article.count}
                id="GameQuantity"
                name="GameQuantity"
                min="1"
                max="99"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmCard;
