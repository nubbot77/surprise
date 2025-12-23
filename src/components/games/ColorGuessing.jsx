import { useState } from 'react'
import { Palette, Sparkles } from 'lucide-react'

export default function ColorGuessing() {
  const allColors = [
    { name: 'Rose Pink', hex: '#ff69b4' },
    { name: 'Lavender', hex: '#e6e6fa' },
    { name: 'Peach', hex: '#ffdab9' },
    { name: 'Coral', hex: '#ff7f50' },
    { name: 'Pink', hex: '#ffc0cb' },
    { name: 'Hot Pink', hex: '#ff1493' },
    { name: 'Light Pink', hex: '#ffb6c1' },
    { name: 'Salmon', hex: '#fa8072' },
    { name: 'Misty Rose', hex: '#ffe4e1' },
    { name: 'Pink Lace', hex: '#ffddf4' }
  ]

  const generateNewRound = () => {
    const correct = allColors[Math.floor(Math.random() * allColors.length)]
    const options = [correct]
    
    while (options.length < 4) {
      const randomColor = allColors[Math.floor(Math.random() * allColors.length)]
      if (!options.find(c => c.name === randomColor.name)) {
        options.push(randomColor)
      }
    }
    
    return {
      targetColor: correct,
      options: options.sort(() => Math.random() - 0.5)
    }
  }

  const initialRound = generateNewRound()
  const [targetColor, setTargetColor] = useState(initialRound.targetColor)
  const [options, setOptions] = useState(initialRound.options)
  const [message, setMessage] = useState('')
  const [score, setScore] = useState(0)

  const handleGuess = (color) => {
    if (color.name === targetColor.name) {
      setMessage('🎉 Correct! You got it!')
      setScore(score + 1)
      setTimeout(() => {
        setMessage('')
        const newRound = generateNewRound()
        setTargetColor(newRound.targetColor)
        setOptions(newRound.options)
      }, 1500)
    } else {
      setMessage('❌ Try again! Keep guessing!')
      setTimeout(() => setMessage(''), 1500)
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Palette className="w-10 h-10 animate-wiggle" />
        Color Guessing Game
        <Palette className="w-10 h-10 animate-wiggle" />
      </h2>

      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-gray-700 mb-2">Score: {score} 🌟</p>
        <p className="text-lg text-gray-600">Which color is this?</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-6 flex justify-center border-4 border-pink-300">
        <div
          className="w-48 h-48 rounded-2xl shadow-2xl border-4 border-white"
          style={{ backgroundColor: targetColor.hex }}
        />
      </div>

      {message && (
        <div className={`text-center mb-4 text-2xl font-bold animate-bounce ${
          message.includes('Correct') ? 'text-green-600' : 'text-orange-600'
        }`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {options.map((color, index) => (
          <button
            key={index}
            onClick={() => handleGuess(color)}
            className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-purple-300 hover:border-purple-500"
          >
            <div
              className="w-full h-20 rounded-lg mb-2 border-2 border-gray-200"
              style={{ backgroundColor: color.hex }}
            />
            <p className="font-semibold text-gray-700">{color.name}</p>
          </button>
        ))}
      </div>

      <div className="mt-6 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-5 h-5 text-yellow-400" />
        <p className="text-sm text-gray-600">Guess the romantic color!</p>
        <Sparkles className="w-5 h-5 text-yellow-400" />
      </div>
    </div>
  )
}
