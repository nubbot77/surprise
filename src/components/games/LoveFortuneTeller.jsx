import { useState } from 'react'
import { Star, Sparkles } from 'lucide-react'

export default function LoveFortuneTeller() {
  const [fortune, setFortune] = useState(null)
  const [isRevealing, setIsRevealing] = useState(false)

  const fortunes = [
    "Today is going to be absolutely magical! ✨ Something wonderful is coming your way!",
    "Your smile will brighten someone's day today - probably everyone's! 😊",
    "A moment of pure joy awaits you today. Keep your heart open! 💖",
    "You're going to accomplish something amazing today. I believe in you! 🌟",
    "Today brings a beautiful surprise. Stay excited! 🎁",
    "Your creativity will shine brilliantly today! Let your imagination soar! 🦋",
    "Someone is thinking of you right now with so much love! 💕",
    "Today is perfect for making beautiful memories! 📸",
    "Your kindness will create a ripple of happiness today! 🌊",
    "A peaceful moment of relaxation is heading your way! 🌸",
    "Today you'll discover something that makes you smile! 😄",
    "Your positive energy will be contagious today! ⚡",
    "Someone appreciates you more than you know! 💝",
    "Today is a day for laughter and joy! Let it flow! 🎉",
    "You're about to feel extra special today - because you are! ⭐"
  ]

  const revealFortune = () => {
    setIsRevealing(true)
    setFortune(null)
    
    setTimeout(() => {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
      setFortune(randomFortune)
      setIsRevealing(false)
    }, 1500)
  }

  return (
    <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Star className="w-10 h-10 animate-wiggle" />
        What Does Today Hold?
        <Star className="w-10 h-10 animate-wiggle" />
      </h2>
      
      <p className="text-center text-lg text-gray-700 mb-8">
        Let's see what magic the universe has for you today! 🔮
      </p>

      <div className="flex flex-col items-center gap-6">
        <button
          onClick={revealFortune}
          disabled={isRevealing}
          className={`relative w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 shadow-2xl 
            ${isRevealing ? 'animate-pulse' : 'hover:scale-110'} transition-all duration-300 
            border-8 border-white/50 ${!isRevealing && 'hover:border-yellow-300'}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-20 h-20 text-white animate-pulse" />
          </div>
          {!isRevealing && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl animate-bounce-slow">🔮</span>
            </div>
          )}
        </button>

        {fortune && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-md animate-bounce-slow border-4 border-purple-300">
            <p className="text-xl text-center text-gray-800 leading-relaxed">
              {fortune}
            </p>
          </div>
        )}

        {isRevealing && (
          <div className="text-center">
            <p className="text-xl text-purple-700 animate-pulse">
              ✨ The universe is aligning... ✨
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
