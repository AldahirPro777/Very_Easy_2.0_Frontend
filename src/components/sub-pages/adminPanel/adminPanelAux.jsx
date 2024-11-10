//* Layouts
import Navbar from "../../layouts/Navbar.jsx";
import Footer from "../../layouts/Footer.jsx";
import { useState } from "react";

import "../../../scss/sub-pages/adminPanel/adminPanel.css";

import AdminPanel from "../../../pages/sub-pages/AdminPanel.jsx";

function AdminPanelAux() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [response, setResponse] = useState(null);
  const [password, setPassword] = useState("");

  const [showInput, setShowInput] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleYes = () => {
    setSelectedButton("yes");

    setShowInput(true);
  };

  const handleNo = () => {
    setSelectedButton("no");
    setResponse("Entonces que haces aqui???");
  };

  const handlePassword = () => {
    if (password == "A7") {
      setShowPanel(true);
    } else {
      setResponse("Contraseña incorrecta");
    }
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

        {showInput && (
          <>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlePassword}>Verificar</button>
          </>
        )}

        {response && <p>{response}</p>}
      </div>
      <Footer />
    </>
  );
}

export default AdminPanelAux;
