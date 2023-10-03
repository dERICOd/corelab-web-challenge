import "./style.css";
import { BiSearch } from "react-icons/bi";
import { RiCloseLine } from "react-icons/Ri";
import logoImage from "./img/bloco_de_notas.svg";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/store";

export function Header() {
  const [query, setQuery] = useState("");
  const { setSearch } = useContext(StoreContext);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(), setSearch(query);
  };
  return (
    <header className="header">
      <div className="header_div_left">
        <img id="logo" src={logoImage} alt="Logo" />
        <h1 className="header_title">CoreNotes</h1>
        <form className="input_wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pesquisar notas"
            onInput={(event) => {
              const target = event.target as HTMLInputElement;
              setQuery(target.value);
            }}
          />
          <button id="searchIcon">
            <BiSearch />
          </button>
        </form>
      </div>
      <button id="button">
        <RiCloseLine />
      </button>
    </header>
  );
}
