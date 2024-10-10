/* eslint-disable react/prop-types */
import { useState } from "react";
import formatDate from "../../../../../utils/formatDate.js";

function Task({ tasks }) {
  const [visible, setVisible] = useState({});

  const toggleVisibility = (index) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [index]: !prevVisible[index],
    }));
  };

  return (
    <>
      {tasks.map((task, i) => (
        <div key={i} className="card card-task">
          <div className="card-head">
            <h2>{task.title || "Sin datos"}</h2>
          </div>
          <div className="card-body">
            <p className="descripcion">
              <span>Descripción:</span> {task.descripcion || "Sin datos"}
            </p>
            <p>
              <span>Materia:</span> {task.materia || "Sin datos"}
            </p>
            <p>
              <span>Fecha de entrega:</span>{" "}
              {formatDate(task.date) || "Sin datos"}
            </p>

            {visible[i] && (
              <div className="datos-extra">
                <p>
                  <span>Maestro:</span> {task.teacher || "Sin datos"}
                </p>
                <p>
                  <span>Link de recursos:</span> <br />
                  {task.resourceUrls.length > 0
                    ? task.resourceUrls.join(", ")
                    : "Sin urls"}
                </p>
                <p>
                  <span>Nivel de importancia:</span>{" "}
                  {task.importanceLevel || "Sin datos"}
                </p>
                <p>
                  <span>Etiquetas:</span>{" "}
                  {task.tags.length > 0
                    ? task.tags.join(", ")
                    : "Sin etiquetas"}
                </p>
              </div>
            )}

            <div className="button">
              <button onClick={() => toggleVisibility(i)}>
                {visible[i] ? "Ocultar datos extras" : "Mostrar datos extras"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;
