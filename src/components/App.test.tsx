import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'
import { getMockStarWarsCharacters } from 'mocks/mockData'

describe('<App />', () => {
  it('should render the App', () => {
    render(<App />)
  })

  it('should display a list of star wars characters', async () => {
    render(<App />)
    const user = userEvent.setup()

    await user.click(screen.getByText('Fetch Characters'))

    getMockStarWarsCharacters().forEach((character) => {
      expect(screen.getByText(character.name)).toBeInTheDocument()
    })
  })
})
