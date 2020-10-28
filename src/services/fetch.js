/* eslint-disable max-len */
export const fetchCharacters = async(page = 1) => {
  const response = await fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?page=${page}`);
  const json = await response.json();

  if(!response.ok) throw 'Bad Request';

  return json.results.map(character => ({
    name: character.name,
    status: character.status,
    image: character.image
  }));
};

export const fetchCharacterByName = async(name) => {
  const response = await fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`);
  const json = await response.json();

  if(!response.ok) throw 'Bad Request';

  return {
    name: json.name ? json.name : 'Unavailable',
    born: json.born ? json.born : 'Unavailable',
    occupation: json.occupation ? json.occupation : 'Unavailable',
    rank: json.rank ? json.rank : 'Unavailable',
    affiliations: json.affiliations ? json.affiliations : 'Unavailable',
    status: json.status ? json.status : 'Unavailable',
    image: json.image ? json.image : 'Unavailable',
    gender: json.gender ? json.gender : 'Unavailable',
    portrayedby: json.portrayedby ? json.portrayedby : 'Unavailable',
    description: json.description ? json.description : 'Unavailable'
  };
};
