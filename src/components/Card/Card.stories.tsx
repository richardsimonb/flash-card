import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    question: 'What is the capital of France?',
    answer: 'Paris',
    handleNext: () => console.log('Next card'),
    handlePrevious: () => console.log('Previous card'),
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    question: 'What is the capital of France?',
    answer: 'Paris',
    handleNext: () => console.log('Next card'),
    handlePrevious: () => console.log('Previous card'),
  },
  
}