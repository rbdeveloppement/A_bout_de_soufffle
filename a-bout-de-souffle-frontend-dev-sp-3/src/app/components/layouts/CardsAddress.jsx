import React from "react";
import { useNavigate } from "react-router-dom";

function CardsAddress({ id, name, address, postal, city, country }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="max-w-sm shadow-md bg-black/20 border-black rounded-lg">
          <span>{name}</span>
          <p>
            {country}, {city}, {postal}
          </p>
          <span>{address}</span>
        </div>
      </div>
    </>
  );
}
export default CardsAddress;
