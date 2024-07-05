import "./Mejoras.css";
import Mejora from "./Mejora";

function Mejoras({ rocas }) {
  return (
    <div className="mejoras">
      <header>
        <h1> Mejoras </h1>
      </header>
      <main>
        <div>
          <Mejora
            rocksRequired={20}
            rocas={rocas}
            nombre="Hola"
            descripcion="Descripcion"
          />
          <Mejora
            rocas={rocas}
            rocksRequired={200}
            nombre="Disabled"
            descripcion="Esta mejora está deshabilitada"
          />
        </div>
      </main>
    </div>
  );
}

export default Mejoras;
