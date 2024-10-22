import "../../../scss/sub-pages/dashboard/cardsPendientes/CardsPendientes.css";

import Task from "./Extras/cards/Task.jsx";
import Exam from "./Extras/cards/Exam.jsx";

import axios from "axios";
import { useState, useEffect } from "react";

function CardsPendientes() {
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //* API
        const api_url =
          import.meta.env.VITE_APP_API_URL ||
          import.meta.env.VITE_APP_API_URL_DEV;

        const res = await axios.get(`${api_url}/api/dashboard/allCards`);

        const { tasks, exams } = res.data;

        setTasks(tasks);
        setExams(exams);
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
            <Task tasks={tasks} />
            <Exam exams={exams} />
          </>
        )}
      </div>
    </section>
  );
}

export default CardsPendientes;
