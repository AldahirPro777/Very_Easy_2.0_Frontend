/* eslint-disable react/prop-types */
//* Layouts
import Navbar from "../../layouts/Navbar.jsx";
import Footer from "../../layouts/Footer.jsx";
import { useState } from "react";

import "../../../scss/sub-pages/adminPanel/adminPanel.css";

import AdminPanel from "../../../pages/sub-pages/AdminPanel.jsx";

function AdminPanelAux({ user }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [response, setResponse] = useState(null);

  const [showPanel, setShowPanel] = useState(false);

  const handleYes = () => {
    setSelectedButton("yes");

    if (user.isAdmin) {
      setShowPanel(true);
    } else {
      setResponse("Mentira ");
    }
  };

  const handleNo = () => {
    setSelectedButton("no");
    setResponse("Entonces que haces aqui???");
  };

  if (showPanel) {
    return <AdminPanel />;
  }

  return (
    <>
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
    </>
  );
}

export default AdminPanelAux;
