import { useState } from "react";
import "./App.css";
import Search from "./SearchPage";
import Wishlist from "./WishlistPage";
import Shelf from "./ShelfPage";

function Container({ setActive, active }) {
  return (
    <div className="container">
      <button
        className={active === "search" ? "actbutt" : "butt"}
        onClick={() => setActive("search")}
      >
        Search
      </button>

      <button
        className={active === "wishlist" ? "actbutt" : "butt"}
        onClick={() => setActive("wishlist")}
      >
        Wishlist
      </button>

      <button
        className={active === "shelf" ? "actbutt" : "butt"}
        onClick={() => setActive("shelf")}
      >
        Shelf
      </button>
    </div>
  );
}
function Navbar({ setActive, active }) {
  return (
    <div className="navbar">
      <p className="logo">Novelis</p>
      <Container setActive={setActive} active={active}></Container>
      <p className="avatar">Login</p>
    </div>
  );
}

function App({ setActive, active }) {
  return (
    <>
      <Navbar setActive={setActive} active={active}></Navbar>

      <Search acttab={active}></Search>
      <Wishlist acttab={active}></Wishlist>
      <Shelf acttab={active}></Shelf>
    </>
  );
}

export default App;
