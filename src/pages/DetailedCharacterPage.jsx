/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { DetailedCharacter } from '../components/characters/DetailedCharacter';

export const DetailedCharacterPage = () => {

  return (
    <>
      <Link to={'/'}>
        <DetailedCharacter />
      </Link>
    </>
  );
};
