import espira from "../assets/espira.png";

// #B5D99C

export default function Description() {
  return (
    <section className="sombra flex gap-4 flex-col fila rounded-md overflow-hidden p-4">
      <img
        src={espira}
        alt="Imagen de espira circular"
        className="imagen-espira"
      />
      <ul>
        <li>a: Radio de la espira</li>
        <li>b: Distancia del centro al punto</li>
        <li>I: Corriente inducida</li>
        <li>ds: Diferencial de superficie</li>        
      </ul>
    </section>
  );
}
