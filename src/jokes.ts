export interface Joke {
  setup: string
  punchline: string
}

export async function fetchRandomJoke(): Promise<Joke> {
  const response = await fetch(
    'https://official-joke-api.appspot.com/jokes/random',
  )
  const data = await response.json()
  return data
}
