import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const api_url = import.meta.env.VITE_APP_API_URL;

        const response = await axios.get(`${api_url}/api/users/getDataUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, [navigate]);

  const { userName, genero } = user ? user.user : { userName: "", genero: "" };

  return (
    <div className="dashboard-div-body">
      <main id="dashboard">
        <Navbar />
        <Welcome userName={userName} genero={genero} />
        <CardsPendientes />
        <InfoEscolar />
        <CalendarAux />
        <Cumpleañero />
        <Footer />
      </main>
    </div>
  );
}

export default Dashboard;
