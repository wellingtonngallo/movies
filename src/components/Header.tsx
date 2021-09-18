import { useGenre } from "../context/genre";

export function Header() {
  const { selectedGenre } = useGenre();
  
  return (
    <header>
      <span className="category">Categoria:<span>{selectedGenre.title}</span></span>
    </header>
  )
}