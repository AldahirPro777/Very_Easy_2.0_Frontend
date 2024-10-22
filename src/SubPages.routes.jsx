import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//* Sub-pages
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/sub-pages/Dashboard.jsx";
import Calendar from "./pages/sub-pages/Calendar.jsx";
import Blog from "./pages/sub-pages/Blog.jsx";
import StudyResources from "./pages/sub-pages/StudyResources.jsx";
import Classroom from "./pages/sub-pages/Classroom.jsx";
import Frases from "./pages/sub-pages/Frases.jsx";
import AdminPanelAux from "./components/sub-pages/adminPanel/adminPanelAux.jsx";
import Profile from "./pages/sub-pages/Profile.jsx";

import "./scss/sub-pages/main.css";

function AppRoutes() {
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
        const api_url =
          import.meta.env.VITE_APP_API_URL ||
          import.meta.env.VITE_APP_API_URL_DEV;

        const response = await axios.get(`${api_url}/api/users/getDataUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <Routes>
      <Route path="/sub-pages/dashboard" element={<Dashboard user={user} />} />
      <Route path="/sub-pages/calendario" element={<Calendar user={user} />} />
      <Route
        path="/sub-pages/studyResources"
        element={<StudyResources user={user} />}
      />
      <Route path="/sub-pages/classroom" element={<Classroom user={user} />} />
      <Route path="/sub-pages/blog" element={<Blog user={user} />} />
      <Route path="/sub-pages/frases" element={<Frases user={user} />} />
      <Route
        path="/sub-pages/adminPanel"
        element={<AdminPanelAux user={user} />}
      />
      <Route path="/sub-pages/profile" element={<Profile user={user} />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
