import Description from "./components/Description";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  // creamos los estados para la intensidad, el radio de la espira, la distancia del punto p a la espira y el campo magnetico  
  const [intensidad, setIntensidad] = useState(0);
  const [radio, setRadio] = useState(1);
  const [distancia, setDistancia] = useState(1);
  const [campoMagnetico, setCampoMagnetico] = useState(0);

  // Creamos una función para calcular el campo magnetico
  function calcularCampoMagnetico() {
    setCampoMagnetico((6.283*intensidad)/Math.pow(radio*radio+distancia*distancia,1.5));
    console.log(campoMagnetico);
  }

  // renderizamos lo que se muestra en pantalla
  return (
    <div className="min-h-screen bg-[#0F0326] text-[#F5F7DC] px-6 py-8 font-mono">
      <section className="mx-auto max-w-3xl flex flex-col gap-8">
        <Header />
        <Description />
        <Form
          onChangeI={(event) => {
            setIntensidad(event.target.value);
            calcularCampoMagnetico();
          }}
          onChangeA={(event) => {
            setRadio(event.target.value);
            calcularCampoMagnetico();
          }}
          onChangeB={(event) => {
            setDistancia(event.target.value);
            calcularCampoMagnetico();
          }}
        />
        <Result campoMagnetico={campoMagnetico} />
      </section>
    </div>
  );
}

export default App;
