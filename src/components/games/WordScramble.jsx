import { useState } from 'react'
import { Sparkles, RotateCcw } from 'lucide-react'

export default function WordScramble() {
  const words = [
    { word: 'HAPPINESS', scrambled: 'PPAHSNEIS', hint: 'A wonderful feeling' },
    { word: 'AMAZING', scrambled: 'GINAZAM', hint: 'What you are!' },
    { word: 'BEAUTIFUL', scrambled: 'LFUTIBAEU', hint: 'Describes you' },
    { word: 'WONDERFUL', scrambled: 'DREWONFLU', hint: 'Another word for you' },
    { word: 'SPARKLE', scrambled: 'KLERPAS', hint: 'What your eyes do' },
    { word: 'DREAM', scrambled: 'MERDA', hint: 'Follow yours' },
    { word: 'SMILE', scrambled: 'MLISE', hint: 'Your superpower' },
    { word: 'LOVELY', scrambled: 'VLEOLY', hint: 'You are this' },
    { word: 'BRILLIANT', scrambled: 'TILNIRLAB', hint: 'Your mind' },
    { word: 'SPECIAL', scrambled: 'PAESLCI', hint: 'You are so...' }
  ]

  const [currentWord, setCurrentWord] = useState(words[0])
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)

  const nextWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setCurrentWord(randomWord)
    setGuess('')
    setMessage('')
    setShowHint(false)
  }

  const checkGuess = () => {
    if (guess.toUpperCase() === currentWord.word) {
      setMessage('🎉 Correct! You\'re brilliant!')
      setScore(score + 1)
      setTimeout(() => {
        nextWord()
      }, 2000)
    } else {
      setMessage('Not quite! Try again! 💪')
      setTimeout(() => setMessage(''), 2000)
    }
  }

  return (
    <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Sparkles className="w-10 h-10 animate-pulse" />
        Word Scramble
        <Sparkles className="w-10 h-10 animate-pulse" />
      </h2>

      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-gray-700">Score: {score} ⭐</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-6 border-4 border-purple-300">
        <p className="text-center text-lg text-gray-600 mb-4">Unscramble this word:</p>
        <p className="text-center text-5xl font-bold text-purple-700 tracking-wider mb-4">
          {currentWord.scrambled}
        </p>
        
        {!showHint ? (
          <button
            onClick={() => setShowHint(true)}
            className="mx-auto block text-sm text-purple-600 hover:text-purple-800 underline"
          >
            Need a hint? 💡
          </button>
        ) : (
          <p className="text-center text-lg text-gray-600 italic">
            Hint: {currentWord.hint}
          </p>
        )}
      </div>

      {message && (
        <div className={`text-center mb-4 text-2xl font-bold animate-bounce ${
          message.includes('Correct') ? 'text-green-600' : 'text-orange-600'
        }`}>
          {message}
        </div>
      )}

      <div className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && checkGuess()}
          placeholder="Type your answer..."
          className="w-full px-6 py-4 rounded-full text-center text-xl font-semibold border-4 border-pink-300 focus:border-purple-400 focus:outline-none"
        />

        <div className="flex gap-4">
          <button
            onClick={checkGuess}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
          >
            Check Answer ✓
          </button>
          
          <button
            onClick={nextWord}
            className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-purple-700 hover:bg-white hover:scale-105 transition-all shadow-lg border-2 border-purple-300 flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Skip
          </button>
        </div>
      </div>
    </div>
  )
}
