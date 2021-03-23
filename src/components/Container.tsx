import React, { useEffect, useState } from 'react';
import { GenreResponseProps } from '../protocols/genreResponseProps';
import { MovieProps } from '../protocols/movieProps';
import { api } from '../services/api';

import "../styles/container.scss"
import { Content } from './Content';
import { SideBar } from './SideBar';

const Container: React.FC = () => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return <div className="main-container">
    <SideBar genres={genres} handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>
    <Content movies={movies} selectedGenre={selectedGenre}/>
  </div>;
}

export default Container;