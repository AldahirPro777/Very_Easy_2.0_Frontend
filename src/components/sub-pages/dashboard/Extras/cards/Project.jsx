/* eslint-disable react/prop-types */
import { useState } from "react";

function Project({ projects }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = (index) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [index]: !prevVisible[index],
    }));
  };

  return (
    <>
      {projects.map((project, i) => (
        <div key={i} className="card card-project">
          <div className="card-head">
            <h2>{project.title}</h2>
          </div>
          <div className="card-body">
            {project.descripcion && (
              <p className="descripcion">
                <span>Descripción:</span> {project.descripcion}
              </p>
            )}

            {project.materia && (
              <p>
                <span>Materia:</span> {project.materia}
              </p>
            )}

            {project.date && (
              <p>
                <span>Fecha de entrega: </span>
                {project.date}
              </p>
            )}
            {visible[i] && (
              <div className="datos-extra">
                {project.teacher && (
                  <p>
                    <span>Maestro:</span> {project.teacher}
                  </p>
                )}

                {project.resourceUrls.length > 0 && (
                  <p>
                    <span>Link de recursos:</span>{" "}
                    {project.resourceUrls.join(", ")}
                  </p>
                )}
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

export default Project;
