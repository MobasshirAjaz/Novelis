import { useState } from "react";
import "./App.css";
import Card from "./Cards.jsx";

function getcards(setCards, value, setsearchstate) {
  const cards = [
    {
      imgurl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
      title: "Project Hail Mary",
      author: "Andy Weir",
      isbn: "1356376151652",
      price: "$3",
    },
    {
      imgurl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
      title: "Project Hail Mary",
      author: "Andy Weir",
      isbn: "1356376151652",
      price: "$3",
    },
  ];

  if (cards.length === 0) {
    setsearchstate("noresult");
  } else {
    setsearchstate("searched");
  }
  setCards(cards);
}

function Search() {
  const [cards, setCards] = useState([]);
  const [searchstate, setSearchstate] = useState("notsearched");

  return (
    <div className="outer">
      <div className="leftsection">
        <div className="searchbox">
          <input type="text" placeholder="Search for title,author,isbn" />
          <button
            className="searchbutton"
            onClick={() => {
              getcards(setCards, "entered", setSearchstate);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="cardsection">
          {searchstate === "notsearched" ? (
            <p>Not searched</p>
          ) : searchstate === "noresult" ? (
            <p>No result</p>
          ) : (
            cards.map((card) => (
              <Card
                key={card.isbn} // Make sure to have a unique 'key' prop
                imgurl={card.imgurl}
                title={card.title}
                author={card.author}
                isbn={card.isbn}
                price={card.price}
              />
            ))
          )}
        </div>
      </div>
      <div className="rightsection">
        <div className="topright"></div>
        <div className="bottomright"></div>
      </div>
    </div>
  );
}

export default Search;