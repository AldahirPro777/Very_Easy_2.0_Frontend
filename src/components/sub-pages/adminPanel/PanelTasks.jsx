/* eslint-disable react/prop-types */

function PanelTasks({ tasks, setTasks, axios, useState, useEffect }) {
  //* variables de estado de solicitudes

  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [materia, setMateria] = useState("");
  const [date, setDate] = useState("");
  const [teacher, setTeacher] = useState("");
  const [importanceLevel, setImportanceLevel] = useState("");
  const [isFixed, setIsFixed] = useState(false);

  //* variables de estado para pruebas
  //!.///////////////////////////////////////////////////////////////
  /*

  const [title, setTitle] = useState("Aldahir");
  const [descripcion, setDescripcion] = useState("Aldahir");
  const [materia, setMateria] = useState("Valores");
  const [date, setDate] = useState("Aldahir");
  const [teacher, setTeacher] = useState("Funes");
  const [importanceLevel, setImportanceLevel] = useState("Aldahir");
  const [isFixed, setIsFixed] = useState(true);

  */
  //!.//////////////////////////////////////////////////////////////

  //* Manejo de eventos
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  //* API
  const api_url =
    import.meta.env.VITE_APP_API_URL || import.meta.env.VITE_APP_API_URL_DEV;

  //* Función para limpiar campos
  const clean = () => {
    setTitle("");
    setDescripcion("");
    setMateria("");
    setDate("");
    setTeacher("");
    setImportanceLevel("");
    setIsFixed(false);
  };

  //* Funciones para borrar mensajes
  const deleteResponse = () => {
    setResponse("");
  };
  const deleteError = () => {
    setError("");
  };

  //* Funciones para borrar automaticamente los mensajes
  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => {
        setResponse("");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 7500);

      return () => clearTimeout(timer);
    }
  }, [error]);

  //* Funciones de procesos mains
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setResponse(null);
    setLoading(true);

    try {
      const res = await axios.post(`${api_url}/api/admin/postTask`, {
        title,
        descripcion,
        materia,
        date,
        teacher,
        importanceLevel,
        isFixed,
      });

      setResponse(res.data.message);
      clean();
      setLoading(false);
    } catch (err) {
      console.error("Error al enviar datos " + err);
      setError(err.message);
      setResponse(null);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${api_url}/api/admin/deleteTask/${id}`);

      setResponse(res.data.message);

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      setLoading(false);
    } catch (err) {
      setError("Error al eliminar la tarea:" + err);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="main-container" id="tasks">
        {/* Formulario principal */}
        <form onSubmit={handleSubmit} className="form">
          <div className="son-container">
            {/* Titulo */}
            <div className="son">
              <label htmlFor="title">Título</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título"
              />
            </div>

            {/* Descripción */}
            <div className="son">
              <label htmlFor="descripcion">Descripción</label>
              <input
                id="descripcion"
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción"
              />
            </div>

            {/* Materia */}
            <div className="son">
              <label htmlFor="materia">Materia</label>
              <select
                id="materia"
                value={materia || ""}
                onChange={(e) => setMateria(e.target.value)}
              >
                <option value="">Seleccione una materia</option>
                <option value="Valores">Valores</option>
                <option value="Modulo">Modulo</option>
                <option value="Calculo Integral">Calculo Integral</option>
                <option value="Ingles">Ingles</option>
                <option value="Fisica II">Fisica II</option>
              </select>
            </div>

            {/* Fecha */}
            <div className="son">
              <label htmlFor="date">Fecha</label>
              <input
                id="date"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Fecha"
              />
            </div>

            {/* Maestro */}
            <div className="son">
              <label htmlFor="Maestro">Maestro</label>
              <select
                id="Maestro"
                value={teacher || ""}
                onChange={(e) => setTeacher(e.target.value)}
              >
                <option value="">Seleccione una materia</option>
                <option value="Funes">Funes</option>
                <option value="Efraín">Efraín</option>
                <option value="Elizabeth">Elizabeth</option>
                <option value="Yesenia">Yesenia</option>
                <option value="Sánchez">Sánchez</option>
              </select>
            </div>

            {/* Nivel de importancia */}
            <div className="son">
              <label htmlFor="importanceLevel">Nivel de importancia</label>
              <input
                id="importanceLevel"
                type="text"
                value={importanceLevel}
                onChange={(e) => setImportanceLevel(e.target.value)}
                placeholder="Nivel de importancia"
              />
            </div>

            {/* Tarea destacadas */}
            <div className="son">
              <label htmlFor="isFixed">Tarea destacada</label>
              <select
                id="isFixed"
                value={isFixed ? "true" : "false"}
                onChange={(e) => setIsFixed(e.target.value === "true")}
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
            </div>
          </div>

          {/* Botones */}
          <div className="btns">
            <button type="submit" className="submit" disabled={loading}>
              {loading ? (
                <>
                  <div className="spinner"></div>
                  <p>Cargando...</p>
                </>
              ) : (
                "Agregar tarea"
              )}
            </button>

            <button className="clean" type="button" onClick={clean}>
              Clean
            </button>
          </div>
        </form>

        {/* Mensajes */}
        {(error || response || loading) && (
          <div className="messages">
            {error && (
              <div className="container">
                <p className="message error">Error: {error}</p>
                <button onClick={() => deleteError()}>X</button>
              </div>
            )}

            {loading && <div className="loader"></div>}

            {response && (
              <div className="container">
                <p className="message response">{response}</p>
                <button onClick={() => deleteResponse()}>X</button>
              </div>
            )}
          </div>
        )}

        {/* Tasks rendering */}
        <div className="rendertasks">
          <h2>Lista de Tareas</h2>

          <div className="tasksContainer">
            {tasks.length === 0 ? (
              <p>No hay tareas disponibles.</p>
            ) : (
              <ul>
                {tasks.map((task) => (
                  <li key={task._id}>
                    <strong>{task.title}</strong> - {task.importanceLevel}
                    <br />
                    <span>Materia:</span> {task.materia}
                    <br />
                    <span>Descripción:</span> {task.descripcion}
                    <br />
                    <span>Maestro:</span> {task.teacher}
                    <br />
                    <span>Fecha:</span> {task.date}
                    <br />
                    <span>Tarea destacada:</span> {task.isFixed ? "Sí" : "No"}
                    <br />
                    <small>
                      <span>Creado en:</span> <br />
                      {new Date(task.createdAt).toLocaleString("es-ES", {
                        day: "numeric",
                        month: "long",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </small>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="delete"
                    >
                      Borrar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PanelTasks;
