import React from "react";
import "./laki.css";
import { people } from "../../data";
import { useGlobalContext } from "../../context";
import Modal from "../Modal/Modal.jsx";

const Laki = () => {
  const { openModal, setInfo } = useGlobalContext();
  return (
    <div className="container">
      <Modal />
      {people.map((person) => {
        const { name, paraghraphe, tel, email, image } = person;

        return (
          <div className="person">
            <img src={image} alt="" class="profile-img" />
            <h1 class="name">{name}</h1>
            <p class="description">{paraghraphe}</p>
            <button
              class="btn"
              onClick={() => {
                setInfo({ name, tel, email });
                openModal();
              }}
            >
              Shta2tilna? ;)
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Laki;
