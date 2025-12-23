import { useState } from 'react'
import { Heart, Lock, Unlock } from 'lucide-react'

export default function OpenWhen() {
  const [openedMessage, setOpenedMessage] = useState(null)

  const messages = [
    {
      id: 1,
      title: "Open When You're Stressed 😰",
      content: "Take a deep breath. You've got this! 💪 Remember, stress is temporary, but your strength is permanent. Take a break, do something you love, and come back refreshed. You're capable of handling anything! 🌟"
    },
    {
      id: 2,
      title: "Open When You're Happy 😊",
      content: "I'm so glad you're happy! 🎉 Your happiness is contagious and beautiful! Keep spreading those positive vibes and remember to capture this feeling. You deserve all the joy in the world! ✨💖"
    },
    {
      id: 3,
      title: "Open When You're Sad 😢",
      content: "It's okay to feel sad sometimes. 🫂 Let yourself feel these emotions, but remember - this too shall pass. You're stronger than you know, and brighter days are ahead. Sending you the biggest hug! 💝"
    },
    {
      id: 4,
      title: "Open When You Need Motivation 🚀",
      content: "You are AMAZING! 🌟 Look at how far you've come! Every challenge you've faced, you've conquered. Keep pushing forward because greatness awaits you! Believe in yourself as much as I believe in you! 💪✨"
    },
    {
      id: 5,
      title: "Open When You're Tired 😴",
      content: "Rest is not a luxury, it's a necessity! 🛌 Take time to recharge your batteries. You work so hard, and you deserve a break. Sleep well, relax, and wake up refreshed! Sweet dreams! 🌙💤"
    },
    {
      id: 6,
      title: "Open When You Miss Someone 💭",
      content: "Distance means nothing when someone means everything. 💕 Hold onto the beautiful memories and know that you're thought of and loved! The connection you share is special and real! 🌈"
    },
    {
      id: 7,
      title: "Open When You Need a Laugh 😂",
      content: "Why don't scientists trust atoms? Because they make up everything! 😄 Remember: Your smile is beautiful, your laugh is contagious, and you make the world brighter just by being you! Keep smiling! 🌟"
    },
    {
      id: 8,
      title: "Open When You're Proud 🏆",
      content: "YAYYY! 🎊 You should be proud! You worked hard for this moment! Celebrate yourself because you absolutely deserve it! You're incredible and I'm so proud of you! Keep shining! ⭐💖"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat" />
        Letters for Different Moments
        <Heart className="w-10 h-10 animate-heart-beat" />
      </h2>

      <p className="text-center text-lg text-gray-700 mb-8">
        Pick the one that fits how you're feeling right now 💌
      </p>

      {!openedMessage ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {messages.map((message) => (
            <button
              key={message.id}
              onClick={() => setOpenedMessage(message)}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-pink-300 hover:border-pink-500 flex items-center gap-4"
            >
              <Lock className="w-8 h-8 text-rose-500 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-700 text-left">
                {message.title}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4 border-purple-300 animate-bounce-slow">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Unlock className="w-10 h-10 text-green-500" />
              <h3 className="text-2xl font-bold text-purple-800">
                {openedMessage.title.replace('Open When ', '')}
              </h3>
            </div>
            
            <div className="border-t-2 border-purple-200 my-4" />
            
            <p className="text-xl text-gray-800 leading-relaxed text-center">
              {openedMessage.content}
            </p>
            
            <div className="flex justify-center gap-2 mt-6">
              <Heart className="w-6 h-6 text-red-500 animate-heart-beat fill-current" />
              <Heart className="w-6 h-6 text-pink-500 animate-heart-beat fill-current" style={{animationDelay: '0.2s'}} />
              <Heart className="w-6 h-6 text-rose-500 animate-heart-beat fill-current" style={{animationDelay: '0.4s'}} />
            </div>
          </div>

          <button
            onClick={() => setOpenedMessage(null)}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-lg"
          >
            Back to Messages 💌
          </button>
        </div>
      )}
    </div>
  )
}
