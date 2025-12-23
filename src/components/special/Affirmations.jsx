import { useState, useEffect } from 'react'
import { Sparkles, RefreshCw } from 'lucide-react'

export default function Affirmations() {
  const [currentAffirmation, setCurrentAffirmation] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const affirmations = [
    "I am capable of amazing things 🌟",
    "I deserve happiness and success 💖",
    "I am strong and resilient 💪",
    "I believe in myself ✨",
    "I am worthy of love and respect 💝",
    "I choose to be positive today 🌈",
    "I am grateful for who I am 🙏",
    "I attract wonderful opportunities 🌠",
    "I am enough, just as I am 💕",
    "I radiate confidence and grace ⭐",
    "I embrace my unique qualities 🦋",
    "I am proud of my progress 🏆",
    "I choose joy and peace 🕊️",
    "I am loved and appreciated 💗",
    "I trust in my journey 🛤️"
  ]

  const nextAffirmation = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentAffirmation((prev) => (prev + 1) % affirmations.length)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextAffirmation()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Sparkles className="w-10 h-10 animate-pulse" />
        Daily Affirmations
        <Sparkles className="w-10 h-10 animate-pulse" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Positive thoughts for a positive you! 💫
      </p>

      <div className="flex flex-col items-center gap-6">
        <div className={`bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-12 shadow-2xl max-w-2xl border-4 border-yellow-300 min-h-[200px] flex items-center justify-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-3xl md:text-4xl text-center text-gray-800 leading-relaxed font-bold">
            {affirmations[currentAffirmation]}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {affirmations.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentAffirmation
                    ? 'bg-purple-600 scale-150'
                    : 'bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextAffirmation}
          className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-all shadow-lg flex items-center gap-2"
        >
          <RefreshCw className="w-6 h-6" />
          Next Affirmation
        </button>

        <div className="bg-white/70 rounded-2xl p-6 max-w-md text-center">
          <p className="text-sm text-gray-600">
            💡 Take a deep breath, read the affirmation, and really feel it. 
            You can say it out loud or repeat it in your mind. 
            Believe in these words - they're all true! ✨
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Affirmation {currentAffirmation + 1} of {affirmations.length}
        </p>
      </div>
    </div>
  )
}
