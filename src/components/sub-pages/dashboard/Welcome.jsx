/* eslint-disable react/prop-types */
import "../../../scss/sub-pages/dashboard/welcome/welcome.css";

function Welcome({ userName, genero }) {
  return (
    <div id="welcome">
      <p>
        {genero ? "Bienvenido " : "Bienvenida "} {userName || "Invitado"}
      </p>
    </div>
  );
}

export default Welcome;
