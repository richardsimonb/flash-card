import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { ProgressBar } from '.'

describe('ProgressBar test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<ProgressBar current={5} total={20} />)
  })

  it('should display correct progress percentage', () => {
    const { getByText } = render(<ProgressBar current={5} total={20} />)
    expect(getByText('25%')).toBeInTheDocument()
  }) 

})