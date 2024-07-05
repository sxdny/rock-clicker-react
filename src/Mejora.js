import "./Mejora.css";

function Mejora({ nombre, descripcion, rocksRequired, rocas }) {
  let disabled = rocas <= rocksRequired;

  if (disabled) {
    return (
      <div className="mejora disabled">
        <header>
          <h1> {nombre} </h1>
          <p> {descripcion} </p>
          <p> Coste: {rocksRequired} </p>
        </header>
        <button disabled> Mejorar </button>
      </div>
    );
  } else {
    return (
      <div className="mejora">
        <header>
          <h1> {nombre} </h1>
          <p> {descripcion} </p>
          <p> Coste: {rocksRequired} </p>
        </header>
        <button> Mejorar </button>
      </div>
    );
  }
}

export default Mejora;
