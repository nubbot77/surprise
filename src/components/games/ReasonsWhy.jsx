import { useState } from 'react'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ReasonsWhy() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const reasons = [
    {
      front: "Reason #1",
      back: "Your smile brightens up everyone's day! 😊✨"
    },
    {
      front: "Reason #2",
      back: "You're incredibly kind and thoughtful! 💖"
    },
    {
      front: "Reason #3",
      back: "Your determination inspires everyone around you! 🌟"
    },
    {
      front: "Reason #4",
      back: "You make the world a better place just by being in it! 🌍💕"
    },
    {
      front: "Reason #5",
      back: "Your creativity knows no bounds! 🎨✨"
    },
    {
      front: "Reason #6",
      back: "You handle challenges with grace and strength! 💪"
    },
    {
      front: "Reason #7",
      back: "Your laugh is absolutely contagious! 😄"
    },
    {
      front: "Reason #8",
      back: "You're an amazing friend and person! 🤗"
    },
    {
      front: "Reason #9",
      back: "Your positive energy lights up any room! ⚡✨"
    },
    {
      front: "Reason #10",
      back: "You're unique and irreplaceable! 💝"
    },
    {
      front: "Reason #11",
      back: "Your intelligence and wit are impressive! 🧠💫"
    },
    {
      front: "Reason #12",
      back: "You bring out the best in people! 🌈"
    },
    {
      front: "Reason #13",
      back: "Your passion for life is beautiful! 🔥"
    },
    {
      front: "Reason #14",
      back: "You deserve all the happiness in the world! 🌟"
    },
    {
      front: "Reason #15",
      back: "You're simply amazing in every way! 💖✨"
    }
  ]

  const flipCard = () => {
    setFlipped(!flipped)
  }

  const nextCard = () => {
    setFlipped(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reasons.length)
    }, 300)
  }

  const prevCard = () => {
    setFlipped(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length)
    }, 300)
  }

  return (
    <div className="bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-rose-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat fill-current" />
        Reasons Why You're Amazing
        <Heart className="w-10 h-10 animate-heart-beat fill-current" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Click the card to reveal why you're incredible! 💝
      </p>

      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={prevCard}
          className="bg-white/80 p-3 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-rose-600" />
        </button>

        <div 
          onClick={flipCard}
          className="relative w-80 h-80 cursor-pointer perspective-1000"
        >
          <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white">
              <div className="text-center">
                <Heart className="w-16 h-16 text-white mx-auto mb-4 animate-heart-beat" />
                <p className="text-3xl font-bold text-white">{reasons[currentIndex].front}</p>
                <p className="text-sm text-white/80 mt-4">Click to reveal! ✨</p>
              </div>
            </div>
            
            {/* Back */}
            <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-400 to-rose-400 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white rotate-y-180">
              <div className="text-center px-8">
                <p className="text-2xl font-semibold text-white leading-relaxed">
                  {reasons[currentIndex].back}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={nextCard}
          className="bg-white/80 p-3 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-rose-600" />
        </button>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          Card {currentIndex + 1} of {reasons.length}
        </p>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
