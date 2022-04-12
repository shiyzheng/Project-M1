import Card from './Card'

const Board = () => {
  const cards = []
  const timer = 0
  for (let i = 0; i < 12; i++) {
    const card = <Card id={i}/>
    cards.push(card)
  }

  return (
    cards.map(c => c)
  )
}

export default Board