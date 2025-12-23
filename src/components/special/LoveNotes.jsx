import { useState, useEffect } from 'react'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LoveNotes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const notes = [
    "You light up every room you walk into! ✨",
    "Your smile is the most beautiful thing! 😊💖",
    "You're doing amazing, keep going! 💪🌟",
    "The world is better with you in it! 🌍💕",
    "You deserve all the happiness! 🎉",
    "Your kindness touches hearts! 💝",
    "You're stronger than you think! 💪✨",
    "Believe in yourself - you're incredible! 🌟",
    "Your dreams are worth chasing! 🚀",
    "You make a difference every day! 🌈",
    "Your creativity is inspiring! 🎨",
    "You're one of a kind! 💎",
    "Keep shining bright! ⭐",
    "You're loved more than you know! 💕",
    "Your potential is limitless! 🌠"
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notes.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, notes.length])

  const nextNote = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % notes.length)
  }

  const prevNote = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + notes.length) % notes.length)
  }

  return (
    <div className="bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-rose-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat fill-current" />
        Love Notes Carousel
        <Heart className="w-10 h-10 animate-heart-beat fill-current" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Sweet messages just for you! 💌
      </p>

      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={prevNote}
          className="bg-white/80 p-4 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-rose-600" />
        </button>

        <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-12 shadow-2xl max-w-lg border-4 border-rose-300 min-h-[250px] flex items-center justify-center">
          <p className="text-3xl text-center text-gray-800 leading-relaxed font-semibold animate-pulse-slow">
            {notes[currentIndex]}
          </p>
        </div>

        <button
          onClick={nextNote}
          className="bg-white/80 p-4 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-rose-600" />
        </button>
      </div>

      <div className="text-center space-y-4">
        <div className="flex justify-center gap-2">
          {notes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlay(false)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-rose-500 scale-125'
                  : 'bg-rose-300 hover:bg-rose-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            isAutoPlay
              ? 'bg-rose-500 text-white hover:bg-rose-600'
              : 'bg-white/80 text-rose-700 hover:bg-white border-2 border-rose-300'
          }`}
        >
          {isAutoPlay ? '⏸ Pause' : '▶ Auto Play'}
        </button>

        <p className="text-sm text-gray-600">
          Note {currentIndex + 1} of {notes.length}
        </p>
      </div>
    </div>
  )
}
