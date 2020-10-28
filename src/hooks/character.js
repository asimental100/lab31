import { useEffect, useState } from 'react';
import { fetchCharacterByName, fetchCharacters } from '../services/fetch';

export const useDetailedCharacter = name => {
  const [loading, setLoading] = useState(true);
  const [detailedCharacter, setDetailedCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterByName(name)
      .then(character => setDetailedCharacter(character))
      .finally(() => setLoading(false));
  }, [name]);

  return {
    loading,
    detailedCharacter
  };

};

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters
  };
};
