export default function Result({ campoMagnetico }) {
 
  return (
    <section>
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl">B</span>
        <span className="text-xl">=</span>
        <span className="font-bold text-2xl">{campoMagnetico != 0 && campoMagnetico  }</span>
        <span className="font-bold text-2xl">{campoMagnetico != 0 && '*10^-7'  }</span>
      </div>
      <div>Sentido de las i positivas</div>
    </section>
  );
}
