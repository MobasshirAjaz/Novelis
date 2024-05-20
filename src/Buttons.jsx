import "./RightSection.css";

function Buttons({ currpage }) {
  if (currpage === "search") {
    return (
      <div className="buttons">
        <button className="butt2">Add to Wishlist</button>
        <button className="butt2">Add to Shelf</button>
      </div>
    );
  } else if (currpage === "wishlist") {
    return (
      <div className="buttons">
        <button className="butt2">Remove from Wishlist</button>
        <button className="butt2">Add to Shelf</button>
      </div>
    );
  } else {
    return (
      <div className="buttons">
        <button className="butt2">Remove from Shelf</button>
        <button className="butt2">Not Reading</button>
      </div>
    );
  }
}

export default Buttons;
