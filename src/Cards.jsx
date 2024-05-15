import "./card.css";

function Card({ imgurl, title, author, isbn, price }) {
  return (
    <div className="card">
      <img src={imgurl} alt="" />
      <div className="carddetails">
        <div className="topcarddetails">
          <p className="cardtitle">{title}</p>
          <p className="cardauthor">
            <span>By </span>
            {author}
          </p>
          <p className="cardisbn">
            <span>ISBN- </span>
            {isbn}
          </p>
        </div>
        <p className="cardprice">{price}</p>
      </div>
    </div>
  );
}

export default Card;
