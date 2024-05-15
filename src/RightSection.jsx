import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import "./RightSection.css";

function fetchdetails(isbn) {
  return {
    imgurl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
    title: "Project Hail Mary",
    author: "Andy Weir",
    isbn: isbn,
  };
}
function RightSection({ activeisbn, currentpage }) {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    setDetails(fetchdetails(activeisbn));
  }, [activeisbn]);

  if (activeisbn === "") {
    return (
      <div className="rightsection">
        <p>Nothing selected</p>
      </div>
    );
  } else {
    return (
      <div className="rightsection">
        <div className="topright">
          <div className="toprightcarddetails">
            <img src={details.imgurl} alt="" />
            <div className="sideofimagecarddetails">
              <div className="topcarddetails">
                <p className="toprightcardtitle">{details.title}</p>
                <p className="toprightcardauthor">
                  <span>By </span>
                  {details.author}
                </p>
                <p className="toprightcardisbn">
                  <span>ISBN- </span>
                  {details.isbn}
                </p>
              </div>
              <p className="toprightcardgenre">{"Genre"}</p>
            </div>
          </div>
          <Buttons currpage={currentpage}></Buttons>
        </div>
        <div className="bottomright"></div>
      </div>
    );
  }
}

export default RightSection;
