import { StoryFn } from '@storybook/react'
import { Header, HeaderProps } from '../components/Header'

export default {
  title: 'Shared/Component/Header',
  component: Header,
}

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
