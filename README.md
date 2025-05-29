# Flash Card Component

Flash card component. This component requires React.

## Installation
`npm install @richardsimonb/flash-card`

## Usage
```
import { FlashCard } from '@richardsimonb/flash-card'

function App() {

  const data = [
    {
      question: 'What is the capital of Ethiopia?',
      answer: 'Addis Ababa',
    },
    {
      question: 'What is the ASEAN short of?',
      answer: 'Association of South East Asian Nations',
    },
    {
      question: 'What is the currency of Indonesia?',
      answer: 'Rupiah',
    },
  ]

  return (
    <FlashCard title={'Flash Cards'} data={data}/>
  )
}
```

## License

MIT License