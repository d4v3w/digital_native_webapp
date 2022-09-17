import { Story, Meta } from '@storybook/react'
import Markdown from '../components/Markdown'

export default {
  title: 'Shared/Component/Markdown',
  component: Markdown,
} as Meta

const Template: Story = (args) => <Markdown {...args} />

export const Simple = Template.bind({})
Simple.args = {
  content: `
        # Heading 1

        Some thing to write about.

        1. Numbered List Item 1
        1. Numbered List Item 2

        ## Heading 2

        Some more text

        * List un-ordered 3
        * List un-ordered 5
        * List un-ordered 1
        * List un-ordered 4
        * List un-ordered 2
        

        [My Link](https://www.mylink.com/)
        
    `,
  isInline: true,
}
