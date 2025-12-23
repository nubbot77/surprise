import { useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'

export default function TruthOrDare() {
  const [selected, setSelected] = useState(null)
  const [current, setCurrent] = useState(null)

  const truths = [
    "What's your favorite memory from this year? 🌟",
    "What makes you smile the most? 😊",
    "What's something you're proud of? 🏆",
    "What's your happy place? 🏝️",
    "What's the nicest thing someone did for you? 💝",
    "What's your favorite way to relax? 🧘‍♀️",
    "What's something that always cheers you up? 🌈",
    "What's your biggest dream? ✨",
    "What's your favorite thing about yourself? 💖",
    "What makes you feel loved? 💕"
  ]

  const dares = [
    "Do a happy dance right now! 💃",
    "Give yourself a compliment out loud! 🌟",
    "Sing your favorite song for 10 seconds! 🎵",
    "Do 5 jumping jacks! 🤸‍♀️",
    "Take a selfie with your biggest smile! 📸",
    "Tell yourself 'I am amazing!' three times! 💫",
    "Do a silly pose for 10 seconds! 🤪",
    "Laugh out loud for 5 seconds! 😂",
    "Do a twirl! 🌪️",
    "Strike your best superhero pose! 🦸‍♀️"
  ]

  const pick = (type) => {
    setSelected(type)
    const list = type === 'truth' ? truths : dares
    const random = list[Math.floor(Math.random() * list.length)]
    setCurrent(random)
  }

  const reset = () => {
    setSelected(null)
    setCurrent(null)
  }

  return (
    <div className="bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-rose-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat" />
        Truth or Dare
        <Sparkles className="w-10 h-10 animate-pulse" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Pick your challenge! (Light & fun version 😊)
      </p>

      {!selected ? (
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => pick('truth')}
            className="bg-gradient-to-br from-blue-400 to-purple-400 text-white px-12 py-16 rounded-2xl text-3xl font-bold hover:scale-105 transition-all shadow-2xl border-4 border-white"
          >
            <div className="mb-4 text-6xl">🤔</div>
            Truth
          </button>

          <button
            onClick={() => pick('dare')}
            className="bg-gradient-to-br from-pink-400 to-rose-400 text-white px-12 py-16 rounded-2xl text-3xl font-bold hover:scale-105 transition-all shadow-2xl border-4 border-white"
          >
            <div className="mb-4 text-6xl">🎯</div>
            Dare
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-4 border-purple-300 animate-bounce-slow">
            <div className="text-center mb-4">
              <span className="text-5xl">
                {selected === 'truth' ? '🤔' : '🎯'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-center text-purple-800 mb-4">
              {selected === 'truth' ? 'Truth Time!' : 'Dare Challenge!'}
            </h3>
            <p className="text-xl text-center text-gray-800 leading-relaxed">
              {current}
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <button
              onClick={reset}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-lg"
            >
              Pick Again! 🎲
            </button>
            
            <button
              onClick={() => pick(selected)}
              className="bg-white/80 backdrop-blur-sm text-purple-700 px-8 py-4 rounded-full text-xl font-bold hover:bg-white hover:scale-105 transition-all shadow-lg border-2 border-purple-300"
            >
              New {selected === 'truth' ? 'Truth' : 'Dare'}! 🔄
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">✨ All challenges are fun and positive! ✨</p>
      </div>
    </div>
  )
}
