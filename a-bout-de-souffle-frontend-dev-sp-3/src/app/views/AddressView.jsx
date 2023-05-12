import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux-store/authenticationSlice";
import { getAddress } from "../api/backend/address";
import CardsAddress from "../components/layouts/CardsAddress";

const AddressView = () => {
  const loggedUser = useSelector(selectUser);
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddress(loggedUser.username).then((response) => {
      if (response.status === 200) {
        setAddress(response.data);
      }
    });
  }, []);
  const addressCards = address.map((value) => (
    <div className="" key={value.id}>
      <CardsAddress
        id={value.id}
        name={value.name}
        address={value.address}
        postal={value.postal}
        city={value.city}
        country={value.country}
      />
    </div>
  ));

  return <div className="flex space-x-5">{addressCards}</div>;
};

export default AddressView;
