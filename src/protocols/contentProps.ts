import { GenreResponseProps } from "./genreResponseProps";
import { MovieProps } from "./movieProps"

export interface ContentProps{
  movies: Array<MovieProps>
  selectedGenre: GenreResponseProps
}