export default function Header() {
  return (
    <header className="flex gap-4 flex-col">
      <h1 className="text-2xl">
        Ley de <span className="underline text-[#E65F5C]">Biot - Savart</span>
      </h1>
      <p className="text-[#F5F7DC]">
        La siguiente aplicación tiene como finalidad encontrar el campo
        magnetico en a lo largo del eje de simetria de una espira circular.
      </p>
    </header>
  );
}
