import type { Meta, StoryObj } from '@storybook/react'

import { ProgressBar } from './'

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    current: 0,
    total: 100,
  },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    current: 50,
    total: 100,
  },
}