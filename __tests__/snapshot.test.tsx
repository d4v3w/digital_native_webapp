import { render } from '@testing-library/react'
import Article from '../components/Article'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import ImageBox from '../components/ImageBox'
import Layout from '../components/Layout'
import List from '../components/List'
import { Content } from '../interfaces'
import AboutPage from '../pages/about'
import IndexPage from '../pages/index'
import MusicPage from '../pages/music'
import NewsPage from '../pages/news'
import ProductionPage from '../pages/production'

const mockData: Content[] = []

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

describe('All snapshots', () => {
  describe('Pages', () => {
    it('renders homepage unchanged', () => {
      const { container } = render(<IndexPage items={mockData} />)
      expect(container).toMatchSnapshot()
    })
    it('renders about unchanged', () => {
      const { container } = render(<AboutPage />)
      expect(container).toMatchSnapshot()
    })
    it('renders news unchanged', () => {
      const { container } = render(<NewsPage items={mockData} />)
      expect(container).toMatchSnapshot()
    })
    it('renders music unchanged', () => {
      const { container } = render(<MusicPage items={mockData} />)
      expect(container).toMatchSnapshot()
    })
    it('renders production unchanged', () => {
      const { container } = render(<ProductionPage />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('Components', () => {
    it('renders article unchanged', () => {
      const { container } = render(<Article />)
      expect(container).toMatchSnapshot()
    })
    it('renders button unchanged', () => {
      const { container } = render(<Button label="test" />)
      expect(container).toMatchSnapshot()
    })
    it('renders footer unchanged', () => {
      const { container } = render(<Footer />)
      expect(container).toMatchSnapshot()
    })
    it('renders header unchanged', () => {
      const { container } = render(<Header />)
      expect(container).toMatchSnapshot()
    })
    it('renders heading unchanged', () => {
      const { container } = render(<Heading>Test</Heading>)
      expect(container).toMatchSnapshot()
    })
    it('renders hero unchanged', () => {
      const { container } = render(<Hero />)
      expect(container).toMatchSnapshot()
    })
    it('renders imageBox unchanged', () => {
      const { container } = render(<ImageBox />)
      expect(container).toMatchSnapshot()
    })
    it('renders layout unchanged', () => {
      const { container } = render(<Layout />)
      expect(container).toMatchSnapshot()
    })
    it('renders layout unchanged', () => {
      const { container } = render(<List items={mockData} />)
      expect(container).toMatchSnapshot()
    })
  })
})
