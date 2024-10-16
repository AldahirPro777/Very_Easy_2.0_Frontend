//* Layouts
import Navbar from "../../components/layouts/Navbar.jsx";
import Footer from "../../components/layouts/Footer.jsx";
import { useState } from "react";

import "../../scss/sub-pages/adminPanel/adminPanel.css";

function AdminPanel() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [response, setResponse] = useState(null);

  const handleYes = () => {
    setSelectedButton("yes");
    setResponse("Mentira ");
  };

  const handleNo = () => {
    setSelectedButton("no");
    setResponse("Entonces que haces aqui???");
  };

  return (
    <div>
      <Navbar />
      <div className="sub-pages-body">
        <h1>¿Eres admin?</h1>
        <div className="btns">
          <button
            onClick={handleYes}
            className={selectedButton === "yes" ? "selected" : ""}
          >
            Sí
          </button>
          <button
            onClick={handleNo}
            className={selectedButton === "no" ? "selected" : ""}
          >
            No
          </button>
        </div>
        {response && <p>{response}</p>}
      </div>
      <Footer />
    </div>
  );
}

export default AdminPanel;
