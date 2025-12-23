import { useState } from 'react'
import { Sparkles, RefreshCw } from 'lucide-react'

export default function ComplimentGenerator() {
  const [compliment, setCompliment] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const compliments = [
    "Your smile could light up the darkest room! 😊✨",
    "You're absolutely brilliant at everything you do! 🌟",
    "Your kindness makes the world a better place! 💖",
    "You have the most beautiful soul! 🌸",
    "Your laugh is contagious and wonderful! 😄",
    "You're incredibly talented and amazing! 🎨",
    "Your presence brings joy to everyone around you! 🌈",
    "You're stronger than you know! 💪✨",
    "Your creativity knows no bounds! 🦋",
    "You make everything more fun and exciting! 🎉",
    "You're a true inspiration! ⭐",
    "Your intelligence is absolutely impressive! 🧠💫",
    "You have the biggest heart! ❤️",
    "You're incredibly thoughtful and caring! 🤗",
    "Your energy is absolutely magnetic! ⚡",
    "You're one of a kind and irreplaceable! 💝",
    "Your determination is truly admirable! 🏆",
    "You bring out the best in everyone! 🌟",
    "You're absolutely stunning inside and out! 👑",
    "Your passion for life is beautiful! 🔥",
    "You make the impossible look easy! 🚀",
    "You're an absolute gem! 💎",
    "Your positive vibes are unmatched! ☀️",
    "You're incredibly special and loved! 💕"
  ]

  const generateCompliment = () => {
    setIsGenerating(true)
    setCompliment(null)

    setTimeout(() => {
      const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
      setCompliment(randomCompliment)
      setIsGenerating(false)
    }, 800)
  }

  return (
    <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Sparkles className="w-10 h-10 animate-pulse" />
        Need a Boost?
        <Sparkles className="w-10 h-10 animate-pulse" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Here's something nice just for you! 💝
      </p>

      <div className="flex flex-col items-center gap-6">
        <button
          onClick={generateCompliment}
          disabled={isGenerating}
          className={`bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-bold 
            shadow-lg transition-all ${isGenerating ? 'animate-pulse' : 'hover:scale-110 hover:shadow-2xl'} 
            flex items-center gap-3`}
        >
          <RefreshCw className={`w-6 h-6 ${isGenerating ? 'animate-spin' : ''}`} />
          {isGenerating ? 'Generating...' : 'Generate Compliment!'}
        </button>

        {compliment && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-lg animate-bounce-slow border-4 border-pink-300">
            <p className="text-2xl text-center text-gray-800 leading-relaxed font-semibold">
              {compliment}
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" style={{animationDelay: '0.2s'}} />
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" style={{animationDelay: '0.4s'}} />
            </div>
          </div>
        )}

        {isGenerating && (
          <div className="text-center">
            <p className="text-xl text-purple-700 animate-pulse">
              ✨ Finding the perfect words... ✨
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">💡 Click as many times as you want - they're all true!</p>
      </div>
    </div>
  )
}
