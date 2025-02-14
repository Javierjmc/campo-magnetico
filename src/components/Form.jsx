export default function Form( {onChangeI, onChangeA, onChangeB}) {
  return (
    <form className="sombra p-4 flex gap-2 flex-col rounded-md fila">
      <input onChange={onChangeI}
        type="number"
        placeholder="Corriente Inducida"
        className="bg-[#F5F7DC] text-[#0F0326] py-1 px-2 rounded-md"
      />
      <input onChange={onChangeA}
        type="number"
        placeholder="Radio de la espira"
        className="bg-[#F5F7DC] text-[#0F0326] py-1 px-2 rounded-md"
      />
      <input onChange={onChangeB}
        type="number"
        placeholder="Distancia del punto"
        className="bg-[#F5F7DC] text-[#0F0326] py-1 px-2 rounded-md"
      />      
    </form>
  );
}
