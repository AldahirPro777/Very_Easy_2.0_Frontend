import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* MAIN
/*
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
*/

import Dashboard from "./pages/sub-pages/Dashboard.jsx";
import Calendar from "./pages/sub-pages/Calendar.jsx";
import Blog from "./pages/sub-pages/Blog.jsx";
import StudyResources from "./pages/sub-pages/StudyResources.jsx";
import Classroom from "./pages/sub-pages/Classroom.jsx";
import Frases from "./pages/sub-pages/Frases.jsx";
import AdminPanelAux from "./components/sub-pages/adminPanel/adminPanelAux.jsx";
import Profile from "./pages/sub-pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./scss/sub-pages/main.css";

// ? import ProtectedRoute from "./components/others/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/*
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        */}

        <Route path="/" element={<Dashboard />} />
        <Route path="/sub-pages/calendario" element={<Calendar />} />
        <Route path="/sub-pages/studyResources" element={<StudyResources />} />
        <Route path="/sub-pages/classroom" element={<Classroom />} />
        <Route path="/sub-pages/blog" element={<Blog />} />
        <Route path="/sub-pages/frases" element={<Frases />} />
        <Route path="/sub-pages/adminPanel" element={<AdminPanelAux />} />
        <Route path="/sub-pages/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
