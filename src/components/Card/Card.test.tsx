import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Card } from '.'

describe('ProgressBar test:', () => {
    afterEach(cleanup)

    it('should render component', () => {
        render(<Card
            question={"question"}
            answer={"answer"}
            handleNext={() => console.log("next")}
            handlePrevious={() => console.log("previous")} />)
    })

    it('should render question and answer', () => {
        const { getByText } = render(<Card
            question={"What is the capital of France?"}
            answer={"Paris"}
            handleNext={() => console.log("next")}
            handlePrevious={() => console.log("previous")} />)

        expect(getByText("What is the capital of France?")).toBeInTheDocument()
        expect(getByText("Paris")).toBeInTheDocument()
    })

})