import '@testing-library/jest-dom/vitest'

import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from '../src/mocks/node'

beforeAll(() =>
  server.listen({
    onUnhandledRequest: (req) => {
      // throw an error.. No accessing the real network!!!
      const error = `msw captured a ${req.method.toUpperCase()} request to ${
        req.url
      } without a corresponding request handler. Try adding a handler in handlers.ts.`
      console.error(error)
      throw new Error(error)
    },
  }),
)

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
