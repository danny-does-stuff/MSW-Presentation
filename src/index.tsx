import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { App } from './components/App'

/**
 * Creates a promise that resolves when the MSW worker starts
 */
// async function prepare() {
//   if (process.env.NODE_ENV === 'development') {
//     try {
//       const { worker } = await import('./mocks/browser')
//       await worker.start({
//         onUnhandledRequest: 'bypass',
//         serviceWorker: {
//           url: '/mockServiceWorker.js',
//         },
//       })
//     } catch (error) {
//       console.error('Error starting MSW worker:', error)
//     }
//   }
// }

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
root.render(<App />)
