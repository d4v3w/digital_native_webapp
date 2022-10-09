import { render } from '@testing-library/react'
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

describe('Homepage', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<IndexPage items={mockData} />)
    expect(container).toMatchSnapshot()
  })
})
