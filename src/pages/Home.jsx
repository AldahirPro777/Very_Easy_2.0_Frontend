import "../scss/home/home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-div-body">
      <main>
        {/* Bienvenida a todos */}
        <section className="welcome">
          <h1>Bienvenid@</h1>

          <div className="blur">
            <p>
              ¡Hola! 🎉 Bienvenidos a <strong>Very Easy</strong>, un espacio
              diseñado para ayudarte a organizar tus estudios y maximizar tu
              rendimiento académico. Con herramientas como un calendario, lista
              de trabajos pendientes y un blog lleno de recursos útiles. Únete y
              aprovecha al máximo esta página que te salvará de los Rs. <br />
              ¡La excelencia empieza aquí! 🚀
            </p>
          </div>
        </section>

        {/* Información de Very Easy */}
        <section className="info">
          {/* ... Aquí se mantiene todo lo que ya tienes ... */}
        </section>

        {/* Rutas de registro y login */}
        <section className="routes">
          <div className="login">
            <h2>ㅤ ¡Qué gusto verte! 👋😊ㅤ</h2>
            <p>
              Si ya eres parte del proyecto, solo <strong>inicia sesión</strong>{" "}
              para seguir disfrutando de todas las{" "}
              <strong>herramientas y recursos</strong> 📚 que tengo para ti 🚀.
            </p>
            <Link to="/login" className="btn-login">
              👉 Iniciar Sesión 🔓
            </Link>
          </div>
          <div className="register">
            <h2>ㅤ🎉 ¡Únete a la Excelencia!ㅤ</h2>
            <p>
              Si aún no eres parte del proyecto, te invito a{" "}
              <strong>registrarte</strong> ✍️. Así podrás acceder a todas las{" "}
              <strong>funcionalidades</strong> 🚀 que tengo para ti y hacer que
              la escuela sea aún más easy 4 u.
            </p>
            <Link to="/register" className="btn-register">
              ✨ Registrarse 👈
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer-home">
        <a href="#" className="logo">
          EASY
        </a>

        <p className="copy">
          &copy; {new Date().getFullYear()} Very Easy. Todos los derechos
          reservados.
        </p>

        <p className="name">Aldahir M²</p>
      </footer>
    </div>
  );
}

export default Home;
