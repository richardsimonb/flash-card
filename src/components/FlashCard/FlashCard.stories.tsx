import type { Meta, StoryObj } from '@storybook/react'

import { FlashCard } from './'

const dataExample = [
  {
    question: 'What is the capital of France?',
    answer: 'Paris'
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter'
  },
  {
    question: 'What is the chemical symbol for water?',
    answer: 'H2O'
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    answer: 'Harper Lee'
  },
];

const meta = {
  title: 'Components/FlashCard',
  component: FlashCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Flash Card',
    data: dataExample
  },
} satisfies Meta<typeof FlashCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Flash Card',
    data: dataExample,
  },
}