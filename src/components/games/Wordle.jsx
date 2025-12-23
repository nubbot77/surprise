import { useState, useEffect } from 'react'
import { Heart, RotateCcw } from 'lucide-react'

export default function Wordle() {
  const wordList = [
    'HAPPY', 'SMILE', 'HEART', 'DREAM', 'PEACE',
    'GRACE', 'SHINE', 'SWEET', 'BRAVE', 'TRUST',
    'BLOOM', 'MAGIC', 'BLISS', 'CHARM', 'LUCKY',
    'DANCE', 'LIGHT', 'ANGEL', 'PRIDE', 'FAITH'
  ]

  const [targetWord, setTargetWord] = useState('')
  const [guesses, setGuesses] = useState([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [gameStatus, setGameStatus] = useState('playing') // playing, won, lost
  const [message, setMessage] = useState('')

  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)]
    setTargetWord(randomWord)
    setGuesses([])
    setCurrentGuess('')
    setGameStatus('playing')
    setMessage('')
  }

  const handleKeyPress = (key) => {
    if (gameStatus !== 'playing') return

    if (key === 'ENTER') {
      submitGuess()
    } else if (key === 'BACK') {
      setCurrentGuess(currentGuess.slice(0, -1))
    } else if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + key)
    }
  }

  const submitGuess = () => {
    if (currentGuess.length !== 5) {
      setMessage('Word must be 5 letters!')
      setTimeout(() => setMessage(''), 1500)
      return
    }

    const newGuesses = [...guesses, currentGuess]
    setGuesses(newGuesses)
    setCurrentGuess('')

    if (currentGuess === targetWord) {
      setGameStatus('won')
      setMessage('🎉 Amazing! You got it!')
    } else if (newGuesses.length >= 6) {
      setGameStatus('lost')
      setMessage(`The word was ${targetWord}!`)
    }
  }

  const getLetterColor = (letter, index, guess) => {
    if (guess[index] === targetWord[index]) {
      return 'bg-green-500 text-white border-green-600'
    } else if (targetWord.includes(letter)) {
      return 'bg-yellow-500 text-white border-yellow-600'
    } else {
      return 'bg-gray-400 text-white border-gray-500'
    }
  }

  const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
  ]

  const getKeyboardLetterColor = (letter) => {
    for (const guess of guesses) {
      const index = guess.indexOf(letter)
      if (index !== -1) {
        if (guess[index] === targetWord[index]) {
          return 'bg-green-500 text-white'
        } else if (targetWord.includes(letter)) {
          return 'bg-yellow-500 text-white'
        } else {
          return 'bg-gray-400 text-white'
        }
      }
    }
    return 'bg-rose-300 text-white hover:bg-rose-400'
  }

  return (
    <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat" />
        Wordle Game
        <Heart className="w-10 h-10 animate-heart-beat" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-6">
        Guess the 5-letter word! 🎯
      </p>

      {message && (
        <div className={`text-center mb-4 text-xl font-bold animate-bounce ${
          gameStatus === 'won' ? 'text-green-600' : gameStatus === 'lost' ? 'text-red-600' : 'text-orange-600'
        }`}>
          {message}
        </div>
      )}

      {/* Game Board */}
      <div className="max-w-sm mx-auto mb-6 space-y-2">
        {[...Array(6)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 justify-center">
            {[...Array(5)].map((_, colIndex) => {
              const guess = guesses[rowIndex]
              const isCurrentRow = rowIndex === guesses.length && gameStatus === 'playing'
              const letter = guess ? guess[colIndex] : (isCurrentRow ? currentGuess[colIndex] : '')
              
              return (
                <div
                  key={colIndex}
                  className={`w-14 h-14 border-4 rounded-lg flex items-center justify-center text-2xl font-bold transition-all ${
                    guess
                      ? getLetterColor(letter, colIndex, guess)
                      : isCurrentRow && letter
                      ? 'border-purple-400 bg-white text-gray-800'
                      : 'border-gray-300 bg-white/50'
                  }`}
                >
                  {letter}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Keyboard */}
      <div className="max-w-lg mx-auto space-y-2">
        {keyboard.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 justify-center">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                disabled={gameStatus !== 'playing'}
                className={`${
                  key === 'ENTER' || key === 'BACK' ? 'px-4' : 'w-10'
                } h-12 rounded font-bold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  key === 'ENTER' || key === 'BACK'
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : getKeyboardLetterColor(key)
                }`}
              >
                {key === 'BACK' ? '←' : key}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* New Game Button */}
      {gameStatus !== 'playing' && (
        <div className="text-center mt-6">
          <button
            onClick={startNewGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:scale-110 transition-all shadow-lg flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-5 h-5" />
            New Game
          </button>
        </div>
      )}

      <div className="mt-6 text-center text-gray-600 text-sm">
        <p>💚 Green = Correct position</p>
        <p>💛 Yellow = In word, wrong position</p>
        <p>⚫ Gray = Not in word</p>
      </div>
    </div>
  )
}
