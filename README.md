Demo Steps

1. Review Code
   a. App.tsx - Shows a list of Star Wars characters and a joke
   b. server calls - starWars.ts and jokes.ts
   b. src/mocks folder... we'll get there later
2. Consider alternative approach to mocking - hard coded data
   a. Hard code the Star Wars characters in useState
3. Setup MSW (npx msw init ./public --save)
   a. Add Star Wars handler in handlers.ts - see mock data in starWarsMocks.ts
   b. Start the service worker in index.tsx
   c. Test the app
4. Add Joke handler in handlers.ts - see mock data in jokesMocks.ts
   a. Test the app
5. Add error handling to the app
   a. Test the app
6. Find bug with Joke button
