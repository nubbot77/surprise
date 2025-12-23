import { useState, useEffect, useCallback } from 'react'
import { Heart } from 'lucide-react'

export default function HeartCatcher() {
  const [score, setScore] = useState(0)
  const [basketPosition, setBasketPosition] = useState(50)
  const [hearts, setHearts] = useState([])
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [missedHearts, setMissedHearts] = useState(0)

  const startGame = () => {
    setScore(0)
    setMissedHearts(0)
    setBasketPosition(50)
    setHearts([])
    setGameActive(true)
    setGameOver(false)
  }

  const endGame = () => {
    setGameActive(false)
    setGameOver(true)
  }

  useEffect(() => {
    if (!gameActive) return

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setBasketPosition(prev => Math.max(0, prev - 5))
      } else if (e.key === 'ArrowRight') {
        setBasketPosition(prev => Math.min(90, prev + 5))
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameActive])

  useEffect(() => {
    if (!gameActive) return

    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 90,
        top: 0,
        emoji: ['💖', '💝', '💕', '💗', '❤️'][Math.floor(Math.random() * 5)]
      }
      setHearts(prev => [...prev, newHeart])
    }, 1000)

    return () => clearInterval(interval)
  }, [gameActive])

  useEffect(() => {
    if (!gameActive) return

    const interval = setInterval(() => {
      setHearts(prev => {
        const updated = prev.map(heart => ({
          ...heart,
          top: heart.top + 2
        }))

        updated.forEach(heart => {
          if (heart.top >= 85 && heart.top <= 95) {
            if (Math.abs(heart.left - basketPosition) < 8) {
              setScore(s => s + 1)
              heart.caught = true
            }
          }
          if (heart.top >= 100 && !heart.caught) {
            setMissedHearts(m => {
              const newMissed = m + 1
              if (newMissed >= 10) {
                endGame()
              }
              return newMissed
            })
            heart.missed = true
          }
        })

        return updated.filter(heart => heart.top < 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [gameActive, basketPosition])

  return (
    <div className="bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-4 text-rose-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat" />
        Heart Catcher
        <Heart className="w-10 h-10 animate-heart-beat" />
      </h2>

      <div className="text-center mb-4">
        <p className="text-lg text-gray-700 mb-2">Use ← → arrow keys to move the basket!</p>
        <div className="flex justify-center gap-8 text-xl font-semibold">
          <span className="text-green-700">Score: {score} 💖</span>
          <span className="text-red-700">Missed: {missedHearts}/10 💔</span>
        </div>
      </div>

      {!gameActive && !gameOver && (
        <div className="text-center mb-4">
          <button
            onClick={startGame}
            className="bg-rose-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-rose-600 transition-all hover:scale-110 shadow-lg"
          >
            Start Game! 🎮
          </button>
        </div>
      )}

      {gameOver && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-4 text-center border-4 border-rose-400">
          <h3 className="text-2xl font-bold text-rose-700 mb-2">Game Over! 🎮</h3>
          <p className="text-xl mb-4">You caught {score} hearts! 💖</p>
          <button
            onClick={startGame}
            className="bg-rose-500 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-600 transition-all hover:scale-110"
          >
            Play Again!
          </button>
        </div>
      )}

      <div className="relative bg-white/50 rounded-2xl h-96 overflow-hidden border-4 border-rose-300">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute text-4xl transition-all"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
            }}
          >
            {heart.emoji}
          </div>
        ))}

        {gameActive && (
          <div
            className="absolute bottom-4 transition-all duration-100"
            style={{ left: `${basketPosition}%` }}
          >
            <div className="text-5xl">🧺</div>
          </div>
        )}
      </div>
    </div>
  )
}
