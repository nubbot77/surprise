import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

export default function MemoryGame() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const emojis = ['💖', '⭐', '🌸', '💕', '✨', '🦋', '🌈', '💝']

  const initializeGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, matched: false }))
    setCards(shuffled)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameWon(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (matched.length === emojis.length && matched.length > 0) {
      setGameWon(true)
    }
  }, [matched])

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index].emoji)) {
      return
    }

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, cards[first].emoji])
        setFlipped([])
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Star className="w-10 h-10 animate-wiggle" />
        Memory Card Game
        <Star className="w-10 h-10 animate-wiggle" />
      </h2>

      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-gray-700">Moves: {moves}</p>
        <button
          onClick={initializeGame}
          className="mt-2 bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-all"
        >
          New Game
        </button>
      </div>

      {gameWon && (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 text-center border-4 border-yellow-400 animate-bounce-slow">
          <h3 className="text-3xl font-bold text-purple-700 mb-2">🎉 You Won! 🎉</h3>
          <p className="text-xl text-gray-700">Completed in {moves} moves!</p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="text-3xl animate-bounce">⭐</span>
            <span className="text-3xl animate-bounce" style={{animationDelay: '0.1s'}}>✨</span>
            <span className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>🌟</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(card.emoji)
          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={`aspect-square rounded-xl text-4xl transition-all duration-300 ${
                isFlipped
                  ? 'bg-white shadow-lg'
                  : 'bg-gradient-to-br from-purple-400 to-pink-400 hover:scale-105'
              }`}
            >
              {isFlipped ? card.emoji : '❓'}
            </button>
          )
        })}
      </div>
    </div>
  )
}
