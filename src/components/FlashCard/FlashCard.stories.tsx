import type { Meta, StoryObj } from '@storybook/react'

import { FlashCard } from './'

const meta = {
  title: 'Components/FlashCard',
  component: FlashCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
  },
} satisfies Meta<typeof FlashCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  },
}