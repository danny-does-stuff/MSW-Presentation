export interface Character {
  id?: number
  name: string
  height: string
  mass: string
  hair_color: string
  eye_color: string
  birth_year: string
  gender: string
  skin_color: string
  url: string
}

export async function fetchStarWarsCharacters(): Promise<Character[]> {
  const response = await fetch('https://swapi.dev/api/people')
  if (!response.ok) {
    throw new Error('Bad Response')
  }
  const data = await response.json()
  return data.results
}
