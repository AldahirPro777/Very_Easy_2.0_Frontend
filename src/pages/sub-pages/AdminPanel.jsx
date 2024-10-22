import Navbar from "../../components/layouts/Navbar.jsx";
import Footer from "../../components/layouts/Footer.jsx";

import axios from "axios";

import PanelTasks from "../../components/sub-pages/adminPanel/PanelTasks.jsx";

import Loading from "../../components/others/Loading.jsx";

import { useState, useEffect } from "react";

function AdminPanel() {
  const [tasks, setTasks] = useState("");

  const fetchTasks = async () => {
    try {
      //* API
      const api_url =
        import.meta.env.VITE_APP_API_URL ||
        import.meta.env.VITE_APP_API_URL_DEV;

      const res = await axios.get(`${api_url}/api/admin/getTasks`);
      setTasks(res.data.BackTasks);
    } catch (err) {
      console.error("Error al obtener las tareas", err);
    }
  };

  fetchTasks();

  useEffect(() => {}, [tasks]);

  if (!tasks) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main id="adminPanel">
        <div className="welcome">
          <h1>Panel del admin</h1>
        </div>

        <h1>Pendientes</h1>
        <PanelTasks
          tasks={tasks}
          setTasks={setTasks}
          axios={axios}
          useState={useState}
          useEffect={useEffect}
        />
      </main>
      <Footer />
    </>
  );
}

export default AdminPanel;
