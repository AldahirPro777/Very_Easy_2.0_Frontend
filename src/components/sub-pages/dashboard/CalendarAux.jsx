import { useEffect, useState } from "react";
import "../../../scss/sub-pages/dashboard/calendarAux/calendarAux.css";

function CalendarAux() {
  const [currentDay, setCurrentDay] = useState(new Date().getDate());

  useEffect(() => {
    // Función para calcular el tiempo hasta la medianoche
    const timeUntilMidnight = () => {
      const now = new Date();
      const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // El siguiente día
        0,
        0,
        0,
        0 // A las 12:00 am
      );
      return midnight - now; // Diferencia en milisegundos
    };

    // Actualiza el día y configura el setTimeout para la medianoche
    const updateAtMidnight = () => {
      setCurrentDay(new Date().getDate());

      // Espera hasta la medianoche
      const timeout = setTimeout(() => {
        setCurrentDay(new Date().getDate());
        // Después de actualizar, configura un intervalo que se ejecuta cada 24 horas
        setInterval(() => {
          setCurrentDay(new Date().getDate());
        }, 24 * 60 * 60 * 1000); // Cada 24 horas
      }, timeUntilMidnight());

      return () => clearTimeout(timeout);
    };

    updateAtMidnight(); // Inicializar la primera actualización
  }, []);

  // Función para renderizar los días con sus emojis especiales
  const specialDays = {
    1: "🎂",
    4: "🎂",
    11: "📝",
    12: "🎂",
    20: "🎂",
    21: "🎂",
    22: "🎂",
  };

  const renderDay = (day) => {
    // Si es el día actual, añadir 🌟 y cualquier otro emoji especial
    if (day === currentDay) {
      return (
        <li className={day === 1 ? "first-day today" : "today"}>
          {day} <br />
          🌟{specialDays[day] ? specialDays[day] : ""}
        </li>
      );
    } else if (specialDays[day]) {
      // Si es un día especial, mostrar su emoji correspondiente
      return (
        <li className={day === 1 ? "first-day" : ""}>
          {day} <br />
          {specialDays[day]}
        </li>
      );
    } else {
      // Día normal sin emoji especial
      return <li>{day}</li>;
    }
  };

  return (
    <section id="calendarAux">
      <h1>Calendario</h1>
      <div className="container">
        <div className="tabla">
          <h3>Noviembre</h3>

          <ol>
            <li className="day-name">D</li>
            <li className="day-name">L</li>
            <li className="day-name">M</li>
            <li className="day-name">M</li>
            <li className="day-name">J</li>
            <li className="day-name">V</li>
            <li className="day-name">S</li>

            {renderDay(1)}
            {renderDay(2)}
            {renderDay(3)}
            {renderDay(4)}
            {renderDay(5)}
            {renderDay(6)}
            {renderDay(7)}
            {renderDay(8)}
            {renderDay(9)}
            {renderDay(10)}
            {renderDay(11)}
            {renderDay(12)}
            {renderDay(13)}
            {renderDay(14)}
            {renderDay(15)}
            {renderDay(16)}
            {renderDay(17)}
            {renderDay(18)}
            {renderDay(19)}
            {renderDay(20)}
            {renderDay(21)}
            {renderDay(22)}
            {renderDay(23)}
            {renderDay(24)}
            {renderDay(25)}
            {renderDay(26)}
            {renderDay(27)}
            {renderDay(28)}
            {renderDay(29)}
            {renderDay(30)}
          </ol>
        </div>

        <div className="simbologia">
          <h3>Simbologia</h3>
          <p>
            <span>HOY: </span>🌟
          </p>
          <p>
            <span>Tarea: </span>📚
          </p>
          <p>
            <span>Proyecto: </span>🛠️
          </p>
          <p>
            <span>Examen: </span>📝
          </p>
          <p>
            <span>Evento: </span>📅
          </p>
          <p>
            <span>Cumpleaños: </span>🎂
          </p>
          <p>
            <span>NO hay clases: </span>🚫
          </p>
        </div>
      </div>
    </section>
  );
}

export default CalendarAux;
