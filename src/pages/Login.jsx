import { useState } from "react";
import axios from "axios";
import "../scss/login/login.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
      const res = await axios.post(`${api_url}/api/users/login`, {
        userName,
        password,
      });

      localStorage.setItem("token", res.data.token);

      setResponse(res.data);
      navigate("/sub-pages/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesión");
      setResponse(null);
      setLoading(false);
    }
  };

  return (
    <div className="login-div-body">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="inputs">
            <input
              type="text"
              value={userName}
              placeholder="Nombre de Usuario"
              onChange={(e) => setUserName(e.target.value)}
              className="inp1"
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner"></div>
                <p>Cargando...</p>
              </>
            ) : (
              "Login"
            )}
          </button>

          <Link className="btn-register" to="/register">
            Regístrate
          </Link>

          {response && <p className="success">{response.message}</p>}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
