import { useState } from 'react'
import { Heart, Calculator } from 'lucide-react'

export default function LoveCalculator() {
  const [calculating, setCalculating] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const calculate = () => {
    setCalculating(true)
    setShowResult(false)

    setTimeout(() => {
      setCalculating(false)
      setShowResult(true)
    }, 2000)
  }

  return (
    <div className="bg-gradient-to-br from-red-200 via-pink-200 to-rose-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-rose-800 flex items-center justify-center gap-3">
        <Calculator className="w-10 h-10" />
        Love Calculator
        <Calculator className="w-10 h-10" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Let's calculate your love match! 💕
      </p>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-6 border-4 border-rose-300">
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Your Name:</label>
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-4 text-center border-2 border-rose-300">
              <p className="text-2xl font-bold text-rose-700">Anushmita 💖</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Heart className="w-12 h-12 text-red-500 animate-heart-beat fill-current" />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Match With:</label>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 text-center border-2 border-purple-300">
              <p className="text-2xl font-bold text-purple-700">Happiness & Success 🌟</p>
            </div>
          </div>
        </div>
      </div>

      {!calculating && !showResult && (
        <div className="text-center">
          <button
            onClick={calculate}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-110 transition-all shadow-lg hover:shadow-2xl"
          >
            Calculate Love! 💝
          </button>
        </div>
      )}

      {calculating && (
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-2">
            <Heart className="w-8 h-8 text-red-500 animate-bounce" />
            <Heart className="w-8 h-8 text-pink-500 animate-bounce" style={{animationDelay: '0.1s'}} />
            <Heart className="w-8 h-8 text-rose-500 animate-bounce" style={{animationDelay: '0.2s'}} />
          </div>
          <p className="text-xl text-rose-700 animate-pulse font-semibold">
            Calculating your perfect match... 💫
          </p>
        </div>
      )}

      {showResult && (
        <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-2xl p-8 text-center border-4 border-yellow-400 shadow-2xl animate-bounce-slow">
          <div className="mb-4">
            <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text animate-pulse">
              100%
            </p>
          </div>
          <h3 className="text-3xl font-bold text-rose-700 mb-4">
            Perfect Match! 💯
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            You and happiness are meant to be together! 💖
            <br />
            Success and joy are your perfect partners! ✨
            <br />
            You deserve all the love and wonderful things in life! 🌟
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <Heart className="w-8 h-8 text-red-500 animate-heart-beat fill-current" />
            <Heart className="w-10 h-10 text-pink-500 animate-heart-beat fill-current" style={{animationDelay: '0.2s'}} />
            <Heart className="w-8 h-8 text-rose-500 animate-heart-beat fill-current" style={{animationDelay: '0.4s'}} />
          </div>
          <button
            onClick={() => setShowResult(false)}
            className="mt-6 bg-rose-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-rose-600 transition-all"
          >
            Calculate Again!
          </button>
        </div>
      )}
    </div>
  )
}
