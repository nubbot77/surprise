import { useState } from 'react'
import { Heart } from 'lucide-react'

export default function VirtualHug() {
  const [hugging, setHugging] = useState(false)
  const [hugCount, setHugCount] = useState(0)

  const messages = [
    "Sending you the warmest hug! 🤗💖",
    "You're amazing! Here's a big hug! 🫂✨",
    "Virtual hug coming your way! 💕",
    "Hug received! You're wonderful! 🌟",
    "Wrapped in love and warmth! 🥰",
    "The biggest hug for the best person! 💝",
    "Squeezing you tight (virtually)! 🤗",
    "Hug delivered with extra love! 💗",
    "You deserve all the hugs! 🫂💕",
    "Sending comfort and warmth! 🌸"
  ]

  const giveHug = () => {
    setHugging(true)
    setHugCount(prev => prev + 1)

    setTimeout(() => {
      setHugging(false)
    }, 2000)
  }

  return (
    <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat" />
        Virtual Hug
        <Heart className="w-10 h-10 animate-heart-beat" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Need a hug? I've got unlimited ones for you! 🤗
      </p>

      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <button
            onClick={giveHug}
            disabled={hugging}
            className={`text-9xl transition-all duration-300 ${
              hugging ? 'scale-150' : 'hover:scale-110'
            } ${hugging ? 'animate-pulse' : ''}`}
          >
            🤗
          </button>
          
          {hugging && (
            <>
              <Heart className="absolute top-0 left-0 w-12 h-12 text-red-500 animate-ping fill-current" />
              <Heart className="absolute top-0 right-0 w-12 h-12 text-pink-500 animate-ping fill-current" style={{animationDelay: '0.2s'}} />
              <Heart className="absolute bottom-0 left-0 w-12 h-12 text-rose-500 animate-ping fill-current" style={{animationDelay: '0.4s'}} />
              <Heart className="absolute bottom-0 right-0 w-12 h-12 text-purple-500 animate-ping fill-current" style={{animationDelay: '0.6s'}} />
            </>
          )}
        </div>

        {!hugging && (
          <button
            onClick={giveHug}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-all shadow-lg"
          >
            Click for a Hug! 🤗
          </button>
        )}

        {hugging && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md animate-bounce-slow border-4 border-pink-300">
            <p className="text-2xl text-center text-gray-800 leading-relaxed font-semibold">
              {messages[hugCount % messages.length]}
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="text-4xl animate-bounce">💕</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>💖</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>💗</span>
            </div>
          </div>
        )}

        <div className="bg-white/70 rounded-full px-6 py-3 border-2 border-purple-300">
          <p className="text-lg font-semibold text-purple-700">
            Hugs given: {hugCount} 🫂
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">💝 Unlimited hugs available - take as many as you need!</p>
      </div>
    </div>
  )
}
