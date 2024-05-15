import { useState } from "react";
import "./App.css";
import Search from "./SearchPage";
import Wishlist from "./WishlistPage";
import Shelf from "./ShelfPage";

function Container({ setactive, active }) {
  return (
    <div className="container">
      <button
        className={active === "search" ? "actbutt" : "butt"}
        onClick={() => setactive("search")}
      >
        Search
      </button>

      <button
        className={active === "wishlist" ? "actbutt" : "butt"}
        onClick={() => setactive("wishlist")}
      >
        Wishlist
      </button>

      <button
        className={active === "shelf" ? "actbutt" : "butt"}
        onClick={() => setactive("shelf")}
      >
        Shelf
      </button>
    </div>
  );
}
function Navbar({ setactive, active }) {
  return (
    <div className="navbar">
      <Container setactive={setactive} active={active}></Container>
    </div>
  );
}

function App() {
  const [active, setActive] = useState("search");

  return (
    <>
      <Navbar setactive={setActive} active={active}></Navbar>
      {active === "search" && <Search></Search>}
      {active === "wishlist" && <Wishlist></Wishlist>}
      {active === "shelf" && <Shelf></Shelf>}
    </>
  );
}

export default App;
