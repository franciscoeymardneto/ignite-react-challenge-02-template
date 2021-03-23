import { GenreResponseProps } from "./genreResponseProps";

export interface SidebarProps {
  genres: Array<GenreResponseProps>
  selectedGenreId: number
  handleClickButton: (id: number) => void
}