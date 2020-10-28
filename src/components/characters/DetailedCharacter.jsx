import React from 'react';
import { useParams } from 'react-router-dom';
import { useDetailedCharacter } from '../../hooks/character';


export const DetailedCharacter = () => {
  const { name } = useParams();
  const { loading, detailedCharacter } = useDetailedCharacter(name);
  if(loading) return <h1>Loading...</h1>;

  return (
    <li>
      <h1>{detailedCharacter.name}</h1>
      <p>Status: {detailedCharacter.status}</p>
      <img src={detailedCharacter.image} alt={detailedCharacter.name} />
      <p>Gender: {detailedCharacter.gender}</p>
      <p>Born: {detailedCharacter.born}</p>
      <p>Occupation: {detailedCharacter.occupation}</p>
      <p>Rank: {detailedCharacter.rank}</p>
      <p>Affiliations: {detailedCharacter.affiliations}</p>
      <p>Portrayed By: {detailedCharacter.portrayedby}</p>
      <p>Description: {detailedCharacter.description}</p>
    </li>
  );
};
