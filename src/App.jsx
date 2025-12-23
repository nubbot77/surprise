import { useState, useEffect } from 'react'
import { Heart, Sparkles, Star, Music, Home } from 'lucide-react'
import Hero from './components/Hero'
import LoveFortuneTeller from './components/games/LoveFortuneTeller'
import HeartCatcher from './components/games/HeartCatcher'
import ComplimentGenerator from './components/games/ComplimentGenerator'
import VirtualHug from './components/games/VirtualHug'
import ReasonsWhy from './components/games/ReasonsWhy'
import MemoryGame from './components/games/MemoryGame'
import TicTacToe from './components/games/TicTacToe'
import ColorGuessing from './components/games/ColorGuessing'
import WordScramble from './components/games/WordScramble'
import TruthOrDare from './components/games/TruthOrDare'
import Wordle from './components/games/Wordle'
import OpenWhen from './components/special/OpenWhen'
import LoveNotes from './components/special/LoveNotes'
import BreathingExercise from './components/special/BreathingExercise'
import Affirmations from './components/special/Affirmations'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [currentView, setCurrentView] = useState('home')
  
  const romanticGames = [
    { id: 'fortune', name: 'Love Fortune Teller', icon: Star, component: LoveFortuneTeller },
    { id: 'catcher', name: 'Heart Catcher', icon: Heart, component: HeartCatcher },
    { id: 'compliment', name: 'Compliment Generator', icon: Sparkles, component: ComplimentGenerator },
    { id: 'hug', name: 'Virtual Hug', icon: Heart, component: VirtualHug },
    { id: 'reasons', name: 'Reasons Why', icon: Star, component: ReasonsWhy },
  ]

  const funGames = [
    { id: 'memory', name: 'Memory Card Game', icon: Star, component: MemoryGame },
    { id: 'tictactoe', name: 'Tic-Tac-Toe', icon: Heart, component: TicTacToe },
    { id: 'color', name: 'Color Guessing', icon: Sparkles, component: ColorGuessing },
    { id: 'scramble', name: 'Word Scramble', icon: Star, component: WordScramble },
    { id: 'wordle', name: 'Wordle', icon: Heart, component: Wordle },
    { id: 'truth', name: 'Truth or Dare', icon: Heart, component: TruthOrDare },
  ]

  const specialFeatures = [
    { id: 'openwhen', name: 'Open When...', icon: Heart, component: OpenWhen },
    { id: 'notes', name: 'Love Notes', icon: Sparkles, component: LoveNotes },
    { id: 'breathing', name: 'Breathing Exercise', icon: Heart, component: BreathingExercise },
    { id: 'affirmations', name: 'Affirmations', icon: Star, component: Affirmations },
  ]

  const getCurrentComponent = () => {
    if (currentView === 'home') return null
    
    const allItems = [...romanticGames, ...funGames, ...specialFeatures]
    const item = allItems.find(i => i.id === currentView)
    return item ? <item.component /> : null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10">
        {/* Navigation */}
        {currentView !== 'home' && (
          <div className="fixed top-4 left-4 z-50 animate-in fade-in slide-in-from-left duration-500">
            <button
              onClick={() => setCurrentView('home')}
              className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group focus:outline-none focus:ring-4 focus:ring-rose-300"
              aria-label="Back to home"
            >
              <Home className="w-5 h-5 text-rose-500" />
              <span className="text-sm font-medium text-rose-500 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">
                Home
              </span>
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {currentView === 'home' ? (
            <div className="animate-in fade-in duration-700">
              <Hero />
              
              {/* Romantic Games Section */}
              <section className="mt-16 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
                <h2 className="text-4xl font-bold text-center mb-8 text-rose-600 flex items-center justify-center gap-3">
                  <Heart className="w-8 h-8 animate-heart-beat" />
                  Just for You 💕
                  <Heart className="w-8 h-8 animate-heart-beat" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {romanticGames.map((game) => (
                    <button
                      key={game.id}
                      onClick={() => setCurrentView(game.id)}
                      className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-rose-200 hover:border-rose-400 group focus:outline-none focus:ring-4 focus:ring-rose-300"
                      aria-label={`Open ${game.title}`}
                    >
                      <game.icon className="w-12 h-12 text-rose-500 mx-auto mb-3 animate-bounce-slow" />
                      <h3 className="text-xl font-semibold text-rose-700">{game.name}</h3>
                    </button>
                  ))}
                </div>
              </section>

              {/* Fun Games Section */}
              <section className="mt-16 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                <h2 className="text-4xl font-bold text-center mb-8 text-purple-600 flex items-center justify-center gap-3">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                  Let's Play! 🎮
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {funGames.map((game) => (
                    <button
                      key={game.id}
                      onClick={() => setCurrentView(game.id)}
                      className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-purple-200 hover:border-purple-400 group focus:outline-none focus:ring-4 focus:ring-purple-300"
                      aria-label={`Open ${game.title}`}
                    >
                      <game.icon className="w-12 h-12 text-purple-500 mx-auto mb-3 animate-bounce-slow" />
                      <h3 className="text-xl font-semibold text-purple-700">{game.name}</h3>
                    </button>
                  ))}
                </div>
              </section>

              {/* Special Features Section */}
              <section className="mt-16 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                <h2 className="text-4xl font-bold text-center mb-8 text-pink-600 flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 animate-wiggle" />
                  When You Need It Most ✨
                  <Star className="w-8 h-8 animate-wiggle" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {specialFeatures.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setCurrentView(feature.id)}
                      className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-pink-200 hover:border-pink-400 group focus:outline-none focus:ring-4 focus:ring-pink-300"
                      aria-label={`Open ${feature.title}`}
                    >
                      <feature.icon className="w-12 h-12 text-pink-500 mx-auto mb-3 animate-float" />
                      <h3 className="text-xl font-semibold text-pink-700">{feature.name}</h3>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto mt-20 animate-in fade-in zoom-in-95 duration-500">
              {getCurrentComponent()}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
