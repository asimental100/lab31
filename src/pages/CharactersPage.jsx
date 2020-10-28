/* eslint-disable max-len */
import React, { useState } from 'react';
import { CharacterList } from '../components/characters/CharactersList';

export const CharactersPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <button onClick={() => setPage(page => page - 1)} disabled={page <= 1}>Prev</button>
      <button onClick={() => setPage(page => page + 1)} disabled={page >= 10}>Next</button>
      <CharacterList page={page}/>
    </>
  );
};
