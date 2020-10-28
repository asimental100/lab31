import React from 'react';
import { useParams } from 'react-router-dom';
import { useDetailedCharacter } from '../../hooks/character';


export const DetailedCharacter = () => {
  const { name } = useParams();
  const { loading, character } = useDetailedCharacter(name);
  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <image src={character.image} alt={character.name} />
      <p>Gender: {character.gender}</p>
      <p>Born: {character.born}</p>
      <p>Occupation: {character.occupation}</p>
      <p>Rank: {character.rank}</p>
      <p>Affiliations: {character.affiliations}</p>
      <p>Portrayed By: {character.portrayedby}</p>
      <p>Description: {character.description}</p>
    </>
  );
};
