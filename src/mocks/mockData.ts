/**
 * @returns a list of mock Star Wars character
 */
export function getMockStarWarsCharacters() {
  return [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '7777',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      url: 'https://swapi.dev/api/people/1/',
    },
    {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '19BBY',
      gender: 'female',
      url: 'https://swapi.dev/api/people/5/',
    },
    {
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      eye_color: 'blue-gray',
      birth_year: '57BBY',
      gender: 'male',
      url: 'https://swapi.dev/api/people/10/',
    },
  ]
}

/**
 * @returns a mock joke
 */
export function getMockJoke() {
  return {
    type: 'programming',
    setup: 'Why did the programmer quit their job?',
    punchline: "They didn't get arrays.",
    id: 437,
  }
}
