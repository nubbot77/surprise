import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState('ready') // ready, inhale, hold, exhale
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const phases = [
      { name: 'inhale', duration: 4, text: 'Breathe In...' },
      { name: 'hold', duration: 4, text: 'Hold...' },
      { name: 'exhale', duration: 4, text: 'Breathe Out...' },
      { name: 'hold', duration: 4, text: 'Hold...' }
    ]

    let currentPhaseIndex = 0
    let currentCount = 0

    const interval = setInterval(() => {
      currentCount++
      setCount(currentCount)

      if (currentCount >= phases[currentPhaseIndex].duration) {
        currentCount = 0
        currentPhaseIndex = (currentPhaseIndex + 1) % phases.length
        setPhase(phases[currentPhaseIndex].name)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  const start = () => {
    setIsActive(true)
    setPhase('inhale')
    setCount(0)
  }

  const stop = () => {
    setIsActive(false)
    setPhase('ready')
    setCount(0)
  }

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In... 🌬️'
      case 'hold': return 'Hold... ⏸️'
      case 'exhale': return 'Breathe Out... 💨'
      default: return 'Ready to start? 💙'
    }
  }

  const getScale = () => {
    if (phase === 'inhale') return 'scale-150'
    if (phase === 'exhale') return 'scale-75'
    return 'scale-100'
  }

  return (
    <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat" />
        Breathing Exercise
        <Heart className="w-10 h-10 animate-heart-beat" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Take a moment to relax and breathe 🧘‍♀️
      </p>

      <div className="flex flex-col items-center gap-8">
        <div className="relative w-80 h-80 flex items-center justify-center">
          <div
            className={`absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 transition-transform duration-[3000ms] ease-in-out ${getScale()} opacity-50`}
          />
          <div
            className={`absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 transition-transform duration-[3000ms] ease-in-out ${getScale()} opacity-70`}
          />
          <div
            className={`absolute w-32 h-32 rounded-full bg-white transition-transform duration-[3000ms] ease-in-out ${getScale()} flex items-center justify-center shadow-2xl`}
          >
            <Heart className="w-16 h-16 text-rose-500 animate-heart-beat fill-current" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold text-purple-800 mb-2">
            {getPhaseText()}
          </p>
          {isActive && (
            <p className="text-5xl font-bold text-purple-600">
              {4 - count}
            </p>
          )}
        </div>

        {!isActive ? (
          <button
            onClick={start}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-110 transition-all shadow-lg"
          >
            Start Breathing Exercise 🌬️
          </button>
        ) : (
          <button
            onClick={stop}
            className="bg-white/80 backdrop-blur-sm text-purple-700 px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:scale-110 transition-all shadow-lg border-2 border-purple-300"
          >
            Stop ⏹️
          </button>
        )}

        <div className="bg-white/70 rounded-2xl p-6 max-w-md text-center">
          <p className="text-gray-700 leading-relaxed">
            Follow the circle as it expands and contracts. 
            Breathe in for 4 seconds, hold for 4 seconds, 
            breathe out for 4 seconds, hold for 4 seconds. 
            Repeat and feel the calm wash over you. 🌊
          </p>
        </div>
      </div>
    </div>
  )
}
