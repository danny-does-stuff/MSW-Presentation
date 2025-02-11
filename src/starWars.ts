export interface Character {
  id?: number
  name: string
  height: string
  mass: string
  hair_color: string
  eye_color: string
  birth_year: string
  gender: string
}

export async function fetchStarWarsCharacters(): Promise<Character[]> {
  const response = await fetch('https://swapi.dev/api/people')
  const data = await response.json()
  return data.results
}
