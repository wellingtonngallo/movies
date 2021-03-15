import { useGenre } from "../context/genre";

export function Header() {
  debugger;
  const { selectedGenre } = useGenre();
  
  return (
    <header>
      <span className="category">Categoria:<span> </span></span>
    </header>
  )
}