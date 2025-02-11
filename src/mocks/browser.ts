import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// This is the correct way to initialize MSW
export const worker = setupWorker(...handlers)
