//* Layouts
import Navbar from "../../components/layouts/Navbar.jsx";
import Footer from "../../components/layouts/Footer.jsx";

//* Css
import "../../scss/sub-pages/studyResources/studyResources.css";

//* Packs
import { useState, useEffect } from "react";
import axios from "axios";

//* Render
import RenderCards from "../../components/sub-pages/studyResources/RenderCards.jsx";

function StudyResources() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_url =
          import.meta.env.VITE_APP_API_URL ||
          import.meta.env.VITE_APP_API_URL_DEV;

        const res = await axios.get(
          `${api_url}/api/studyResources/getResources`
        );

        setData(res.data.studyResources);

        setError(null);
      } catch (err) {
        console.error("Error del Front-end", err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main id="studyResources">
        <Navbar />
        <h1>Recursos De Estudio</h1>
        {error ? (
          <p>Mensaje de error: {error.message}</p>
        ) : data.length > 0 ? (
          <div className="container">
            <RenderCards data={data} />
          </div>
        ) : (
          <p>Sin Recursos</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default StudyResources;
