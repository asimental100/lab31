import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Character } from './Character';
import { useCharacters } from '../../hooks/character';

export const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <Link to={`/character/${character.name}`} key={character.name}>
      <Character {...character} />
    </Link>
  ));

  console.log(characterElements);

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};
