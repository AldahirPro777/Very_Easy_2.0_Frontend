import { useState } from "react";
import axios from "axios";
import "../scss/register/register.css";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [genero, setGenero] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setResponse(null);
    setLoading(true);

    const api_url =
      import.meta.env.VITE_APP_API_URL || import.meta.env.VITE_APP_API_URL_DEV;
    try {
      const res = await axios.post(`${api_url}/api/users/register`, {
        name,
        userName,
        password,
        password2,
        genero,
      });

      setResponse(res.data);
      setError(null);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Error en el Registro");
      setResponse(null);
      setLoading(false);
    }
  };

  return (
    <div className="register-div-body">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div className="inps">
          <input
            type="text"
            value={name}
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            value={userName}
            placeholder="Usuario"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            value={password2}
            placeholder="Repite la contraseña"
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>

        <div className="genero">
          <button
            type="button"
            className={`btn-genero hombre ${genero === true ? "active" : ""}`}
            onClick={() => setGenero(true)}
          >
            Hombre
          </button>
          <button
            type="button"
            className={`btn-genero mujer ${genero === false ? "active" : ""}`}
            onClick={() => setGenero(false)}
          >
            Mujer
          </button>
        </div>

        <button className="btn-register" type="submit">
          {loading ? (
            <>
              <div className="spinner"></div>
              <p>Cargando...</p>
            </>
          ) : (
            "Registrarse"
          )}
        </button>

        <Link className="btn-login" to="/login">
          Iniciar sesión
        </Link>

        {response && <p className="success">{response.message}</p>}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Register;
