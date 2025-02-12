import { http, HttpResponse } from 'msw'
import { getMockStarWarsCharacters, getMockJoke } from './mockData'

export const handlers = [
  http.get('https://swapi.dev/api/people', ({ request, cookies, params }) => {
    return HttpResponse.json({
      count: 3,
      previous: undefined,
      next: undefined,
      results: getMockStarWarsCharacters(),
    })
  }),
  http.get('https://official-joke-api.appspot.com/jokes/random', () => {
    //   const joke = getMockJoke()
    return HttpResponse.json({
      type: 'general',
      setup: 'If you boil a clown...',
      punchline: 'Do you get a laughing stock?',
      id: 44,
    })
  }),
]
