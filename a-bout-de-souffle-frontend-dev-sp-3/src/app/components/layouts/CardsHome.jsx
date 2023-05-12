import React from "react";
import { useNavigate } from "react-router-dom";

function CardsHome({ title, image, prix, id }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <div className="max-w-sm shadow-md bg-black/20 border-black rounded-lg">
          <img
            onClick={() => {
              navigate(`/${id}`);
            }}
            className="mt-5 rounded-lg"
            src={image}
            alt="image"
          />

          <div className="px-5 mt-2">
            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {}
            </h5> */}
            <div className="grid grid-cols-3">
              <div className="mb-3 font-normal col-span-2 text-white">
                {title}
              </div>

              <div className="right-0 mb-3 font-bold text-end text-white">
                {prix},00€
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsHome;
