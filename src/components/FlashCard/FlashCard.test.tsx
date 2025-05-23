import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { FlashCard } from '.'

describe('FlashCard test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<FlashCard />)
  })

})