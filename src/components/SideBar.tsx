import { Button } from '../components/Button';

import '../styles/sidebar.scss';

import { SidebarProps } from '../protocols/SidebarProps'

export function SideBar(props: SidebarProps) {

  return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}