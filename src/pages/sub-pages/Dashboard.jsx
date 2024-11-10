//* Components
import Welcome from "../../components/sub-pages/dashboard/Welcome.jsx";
import CardsPendientes from "../../components/sub-pages/dashboard/CardsPendientes.jsx";
import InfoEscolar from "../../components/sub-pages/dashboard/InfoEscolar.jsx";
import CalendarAux from "../../components/sub-pages/dashboard/CalendarAux.jsx";
import Cumpleañero from "../../components/sub-pages/dashboard/Cumpleaños.jsx";

//* Layouts
import Navbar from "../../components/layouts/Navbar.jsx";
import Footer from "../../components/layouts/Footer.jsx";

//* Css
import "../../scss/sub-pages/dashboard/dashboard.css";

function Dashboard() {
  return (
    <>
      <main id="dashboard">
        <Navbar />
        <Welcome/>
        <CardsPendientes />
        {/* <InfoEscolar /> */}
        <CalendarAux />
        <Cumpleañero />
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
