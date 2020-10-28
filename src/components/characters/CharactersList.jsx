import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Character } from './Character';
import { useCharacters } from '../../hooks/character';

export const CharacterList = ({ page }) => {
  const { loading, characaters } = useCharacters(page);
  if(loading) return <h1>Loading...</h1>;

  const charactersElements = characaters.map(character => {
    <Link to={`/character/${character.name}`}>
      <Character {...character} />
    </Link>;
  });

  return (
    <ul>
      {charactersElements}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};
