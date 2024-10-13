/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//* Sub-pages
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/sub-pages/Dashboard.jsx";
import Calendar from "./pages/sub-pages/Calendar.jsx";
import Blog from "./pages/sub-pages/Blog.jsx";
import StudyResources from "./pages/sub-pages/StudyResources.jsx";
import Classroom from "./pages/sub-pages/Classroom.jsx";
import Frases from "./pages/sub-pages/Frases.jsx";
import AdminPanel from "./pages/sub-pages/AdminPanel.jsx";
import Profile from "./pages/sub-pages/Profile.jsx";

import "./scss/sub-pages/main.css";

function AppRoutes() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      /* if (!token) {
        navigate("/login");
        return;
      } */

      try {
        const api_url = import.meta.env.VITE_APP_API_URL;

        const response = await axios.get(`${api_url}/api/users/getDataUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setError("");
        setUser(response.data);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchUserData();
  }, [navigate]);

  const {
    name,
    userName,
    password,
    genero,
    isAdmin,
    birthDate,
    studentId,
    favoriteColor,
    createdAt,
    updatedAt,
    status,
    tags,
    logros,
    theme,
  } = user
    ? user
    : {
        name: "",
        userName: "",
        password: "",
        genero: false,
        isAdmin: false,
        birthDate: null,
        studentId: "",
        favoriteColor: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "",
        tags: [],
        logros: [],
        theme: true,
      };

  return (
    <Routes>
      <Route
        path="/sub-pages/dashboard"
        userName={userName}
        genero={genero}
        element={<Dashboard />}
      />
      <Route path="/sub-pages/calendario" element={<Calendar />} />
      <Route path="/sub-pages/studyResources" element={<StudyResources />} />
      <Route path="/sub-pages/classroom" element={<Classroom />} />
      <Route path="/sub-pages/blog" element={<Blog />} />
      <Route path="/sub-pages/frases" element={<Frases />} />
      <Route path="/sub-pages/adminPanel" element={<AdminPanel />} />
      <Route path="/sub-pages/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
