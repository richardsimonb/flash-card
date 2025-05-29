import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { FlashCard } from '.'

describe('FlashCard test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<FlashCard
      title={"flashcard"}
      data={[
        {
          question: 'What is the capital of France?',
          answer: 'Paris'
        },
        {
          question: 'What is the largest planet in our solar system?',
          answer: 'Jupiter'
        },
      ]} />)
  })

})