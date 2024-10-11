/* eslint-disable react/prop-types */

function News({ news }) {
  return (
    <div>
      {news.map((newss, i) => (
        <div key={i} className="card-newss">
          <div className="card-head">
            <h2>{newss.title}</h2>
          </div>
          <div className="card-body">
            {newss.autor && <p>Autor: {newss.autor}</p>}
            {newss.description && <p>Descripción: {newss.description}</p>}
            {newss.date && <p>Fecha: {newss.date}</p>}
            {newss.fuente && <p>Fuente: {newss.fuente}</p>}
            {newss.archivosAdjuntos.length > 0 && (
              <p>Etiquetas: {newss.archivosAdjuntos.join(", ")}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
