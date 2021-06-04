import { Story, Meta } from '@storybook/react';
import { Markdown, MarkdownProps } from '../components/Markdown';

export default {
  title: 'Markdown Component',
  component: Markdown,
} as Meta;

const Template: Story<MarkdownProps> = (args) => <Markdown {...args} />;

export const Simple = Template.bind({});
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
  label: 'Button',
};
