import { useState } from "react";
import "./App.css";

function Shelf({ acttab }) {
  return (
    <div className={acttab === "shelf" ? "outer" : "notvisible"}>
      <div className="leftsection"></div>
      <div className="rightsection"></div>
    </div>
  );
}

export default Shelf;
