/* eslint-disable react/prop-types */
import { useState } from "react";

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
            {task.descripcion && (
              <p className="descripcion">
                <span>Descripción:</span> {task.descripcion}
              </p>
            )}

            {task.materia && (
              <p>
                <span>Materia:</span> {task.materia}
              </p>
            )}

            {task.date && (
              <p>
                <span>Fecha de entrega:</span> {task.date}
              </p>
            )}

            {visible[i] && (
              <div className="datos-extra">
                {task.teacher && (
                  <p>
                    <span>Maestro:</span> {task.teacher}
                  </p>
                )}
                {task.resourceUrls.length > 0 && (
                  <p>
                    <span>Link de recursos:</span> <br />
                    {task.resourceUrls.join(", ")}
                  </p>
                )}
              </div>
            )}

            {/* <div className="button">
              <button onClick={() => toggleVisibility(i)}>
                {visible[i] ? "Ocultar datos extras" : "Mostrar datos extras"}
              </button>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;
