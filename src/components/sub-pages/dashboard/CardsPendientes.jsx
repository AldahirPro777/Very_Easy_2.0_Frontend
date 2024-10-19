import "../../../scss/sub-pages/dashboard/cardsPendientes/CardsPendientes.css";

import Task from "./Extras/cards/Task.jsx";
import Exam from "./Extras/cards/Exam.jsx";
import Project from "./Extras/cards/Project.jsx";

import axios from "axios";
import { useState, useEffect } from "react";

function CardsPendientes() {
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [exams, setExams] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_url =
          import.meta.env.VITE_APP_API_URL ||
          import.meta.env.VITE_APP_API_URL_DEV;

        const res = await axios.get(`${api_url}/api/dashboard/allCards`);

        const { tasks, exams, projects } = res.data;

        console.error(res.data);

        setTasks(tasks);
        setExams(exams);
        setProjects(projects);
        setError(null);
      } catch (err) {
        console.error("Error del Front-end", err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="CardsPendientes">
      <h1>Pendientes</h1>
      <div className="container">
        {error ? (
          <p>Mendaje de error:{error.message}</p>
        ) : (
          <>
            <Exam exams={exams} />
            <Task tasks={tasks} />
            <Project projects={projects} />
          </>
        )}
      </div>
    </section>
  );
}

export default CardsPendientes;
