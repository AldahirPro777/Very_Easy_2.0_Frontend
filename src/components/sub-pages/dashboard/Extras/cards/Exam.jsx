/* eslint-disable react/prop-types */
import { useState } from "react";

function Exam({ exams }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = (index) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [index]: !prevVisible[index],
    }));
  };

  return (
    <>
      {exams.map((exam, i) => (
        <div key={i} className="card card-exam">
          <div className="card-head">
            <h2>{exam.title}</h2>
          </div>
          <div className="card-body">
            {exam.materia && (
              <p>
                <span>Materia:</span> {exam.materia}
              </p>
            )}

            {exam.date && (
              <p>
                <span>Fecha de aplicación:</span> {exam.date}
              </p>
            )}

            {exam.resourceUrls.length > 0 && (
              <p>
                <span>Link de recursos:</span> {exam.resourceUrls.join(", ")}
              </p>
            )}

            {exam.studyGuideUrls.length > 0 && (
              <p>
                <span>Guía de estudio:</span> {exam.studyGuideUrls.join(", ")}
              </p>
            )}

            {visible[i] && (
              <div className="datos-extra">
                {exam.teacher && (
                  <p>
                    <span>Maestro:</span> {exam.teacher}
                  </p>
                )}
              </div>
            )}

           {/*  <div className="button">
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

export default Exam;
