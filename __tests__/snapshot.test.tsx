import { render } from '@testing-library/react'
import Article from '../components/Article'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import ImageBox from '../components/ImageBox'
import Layout from '../components/Layout'
import Pages from '../components/Pages'
import { Content } from '../interfaces'
import IndexPage from '../pages/index'

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
  })

  describe('Components', () => {
    it('renders article unchanged', () => {
      const { container } = render(<Article heading={''} children={undefined} />)
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
      const { container } = render(
        <Heading type={'title'} className={''}>
          <>Test</>
        </Heading>,
      )
      expect(container).toMatchSnapshot()
    })
    it('renders hero unchanged', () => {
      const { container } = render(<Hero />)
      expect(container).toMatchSnapshot()
    })
    it('renders imageBox unchanged', () => {
      const { container } = render(<ImageBox src={''} alt={''} />)
      expect(container).toMatchSnapshot()
    })
    it('renders layout unchanged', () => {
      const { container } = render(<Layout />)
      expect(container).toMatchSnapshot()
    })
    it('renders layout unchanged', () => {
      const { container } = render(<Pages items={mockData} />)
      expect(container).toMatchSnapshot()
    })
  })
})
