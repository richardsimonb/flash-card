import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { FlashCard } from './'

const meta = {
  title: 'Components/FlashCard',
  component: FlashCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof FlashCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
  },
}

export const Secondary: Story = {
  args: {
    primary: false,
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}