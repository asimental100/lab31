/* eslint-disable max-len */
export const fetchCharacters = async(page = 1) => {
  const response = await fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`);
  const json = await response.json();

  if(!response.ok) throw 'Bad Request';

  const mappedCharacters = json.results.map(character => ({
    name: character.name ? character.name : 'Unavailable',
    status: character.status ? character.status : 'Unavailable',
    image: character.image ? character.image : 'Unavailable'
  }));
  return await mappedCharacters;
};

export const fetchCharacterByName = async(name) => {
  const res = await fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`);
  const json = await res.json();

  console.log(json);

  if(!res.ok) throw 'Unable to fetch';

  return {
    name: json[0].name ? json[0].name : 'Unavailable',
    born: json[0].born ? json[0].born : 'Unavailable',
    occupation: json[0].occupation ? json[0].occupation : 'Unavailable',
    rank: json[0].rank ? json[0].rank : 'Unavailable',
    affiliations: json[0].affiliations ? json[0].affiliations : 'Unavailable',
    status: json[0].status ? json[0].status : 'Unavailable',
    image: json[0].image ? json[0].image : 'Unavailable',
    gender: json[0].gender ? json[0].gender : 'Unavailable',
    portrayedby: json[0].portrayedby ? json[0].portrayedby : 'Unavailable',
    description: json[0].description ? json[0].description : 'Unavailable'
  };
};
