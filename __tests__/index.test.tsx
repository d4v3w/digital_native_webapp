import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Article from '../components/Article'
import { Header } from '../components/Header'
import Heading from '../components/Heading'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('All tests', () => {
  describe('Article', () => {
    it('renders a article', () => {
      render(<Article />)

      const article = screen.getByRole('article')

      expect(article).toBeInTheDocument()
    })
  })

  describe('Heading', () => {
    it('does not render a heading', () => {
      render(<Heading />)
      const t = () => {
        screen.getByRole('heading')
      }
      expect(t).toThrow(Error)
    })
    it('renders a heading', () => {
      render(<Heading>Heading</Heading>)

      const heading = screen.getByRole('heading')

      expect(heading).toBeInTheDocument()
    })
  })

  describe('Header', () => {
    it('renders a header', () => {
      render(<Header />)

      const header = screen.getByRole('menubar')
      const navigation = screen.getByRole('navigation')

      expect(header).toBeInTheDocument()
      expect(navigation).toBeInTheDocument()
    })
  })
})
