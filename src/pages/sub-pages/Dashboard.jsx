/* eslint-disable no-unused-vars */

//* Components
import Welcome from "../../components/sub-pages/dashboard/Welcome.jsx";
import CardsPendientes from "../../components/sub-pages/dashboard/CardsPendientes.jsx";
import InfoEscolar from "../../components/sub-pages/dashboard/InfoEscolar.jsx";
import CalendarAux from "../../components/sub-pages/dashboard/CalendarAux.jsx";
import Cumpleañero from "../../components/sub-pages/dashboard/Cumpleaños.jsx";
import Loading from "../../components/others/Loading.jsx";

//* Layouts
import Navbar from "../../components/layouts/Navbar.jsx";
import Footer from "../../components/layouts/Footer.jsx";

//* Css
import "../../scss/sub-pages/dashboard/dashboard.css";

function Dashboard({ userName, genero }) {
  return (
    <div className="dashboard-div-body">
      <main id="dashboard">
        {/* {error ? (
          <p className="error">{error}</p>
        ) : user ? (
          <>  */}
        <Navbar />
        <Welcome userName={userName} genero={genero} />
        <CardsPendientes />
        <InfoEscolar />
        <CalendarAux />
        <Cumpleañero />
        <Footer />
        {/*  </>
        ) : (
          <Loading />
        )} */}
      </main>
    </div>
  );
}

export default Dashboard;
