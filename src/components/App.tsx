import { useState } from 'react'
import { Joke, fetchRandomJoke } from '../jokes'
import { Character, fetchStarWarsCharacters } from '../starWars'

export function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [joke, setJoke] = useState<Joke | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">MSW Demo</h1>

        <div className="mb-8 rounded bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-700">
              Star Wars Characters
            </h2>
            <button
              onClick={async () => {
                const results = await fetchStarWarsCharacters()
                setCharacters(results)
              }}
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            >
              Fetch Characters
            </button>
          </div>
          {characters.length === 0 ?
            <p className="italic text-gray-500">
              Click the button to get characters
            </p>
          : <ul className="space-y-4">
              {characters.map((character, index) => (
                <li key={index} className="rounded border border-gray-200 p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {character.name}
                  </h3>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>Height: {character.height}cm</div>
                    <div>Mass: {Number(character.mass).toLocaleString()}kg</div>
                    <div>Hair: {character.hair_color}</div>
                    <div>Eyes: {character.eye_color}</div>
                    <div>Born: {character.birth_year}</div>
                    <div>Gender: {character.gender}</div>
                  </div>
                </li>
              ))}
            </ul>
          }
        </div>

        <div className="rounded bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-700">Joke Generator</h2>
            <button
              onClick={async () => {
                const result = await fetchRandomJoke()
                setJoke(result)
              }}
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
            >
              Fetch Joke
            </button>
          </div>
          {!joke ?
            <p className="italic text-gray-500">
              Click the button to get a joke
            </p>
          : <>
              <p className="mb-2 text-gray-600">{joke.setup}</p>
              <p className="font-medium text-gray-800">{joke.punchline}</p>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default App
