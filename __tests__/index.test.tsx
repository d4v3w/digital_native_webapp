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
      render(
        <Article heading={'heading'}>
          <div></div>
        </Article>,
      )

      const article = screen.getByRole('article')

      expect(article).toBeInTheDocument()
    })
  })

  describe('Heading', () => {
    it('renders a heading', () => {
      render(
        <Heading type={'title'} className={''}>
          <div>Heading</div>
        </Heading>,
      )

      const heading = screen.getByRole('heading')

      expect(heading).toBeInTheDocument()
    })
  })

  describe('Header', () => {
    it('renders a header', () => {
      render(<Header />)

      const navigation = screen.getByRole('navigation')

      expect(navigation).toBeInTheDocument()
    })
  })
})
