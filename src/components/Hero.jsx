import { Heart, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <div className="text-center py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-rose-200">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse-slow">
          Hey Anushmita! 💝
        </h1>
        
        <div className="space-y-6 text-lg text-gray-700">
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-wiggle" />
            <span className="font-semibold text-rose-600">
              You're doing absolutely amazing! ✨
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-wiggle" />
          </p>
          
          <p className="text-xl leading-relaxed">
            I know some days feel overwhelming, and work can pile up in ways that seem impossible to handle. 
            But here's what I want you to remember – 
            <span className="font-bold text-pink-600"> you've gotten through every tough day before this one, and you'll get through this too. </span>
            You're not just good at what you do, you're genuinely incredible at it! 🌟
          </p>
          
          <p className="text-xl leading-relaxed">
            When the stress feels like too much, please give yourself permission to pause. 
            <span className="font-bold text-purple-600"> Take that coffee break, go for a short walk, listen to your favorite song. </span>
            These aren't luxuries – they're necessities. Your well-being matters more than any deadline. 
            Breathe deeply, reset, and come back stronger. You've got this! 💪
          </p>
          
          <p className="text-xl leading-relaxed">
            Life is happening right now, in this very moment. It's not just about the goals we achieve 
            or the tasks we complete. It's in the little things – 
            <span className="font-bold text-pink-600"> a genuine laugh with friends, the warmth of sunshine, 
            dancing like nobody's watching, the joy of trying something new. </span>
            Don't let work steal these precious moments from you. 🌸
          </p>
          
          <p className="text-xl leading-relaxed">
            You bring so much light into the lives of people around you. Your smile, your energy, 
            your kindness – they all matter more than you know. 
            <span className="font-bold text-purple-600"> You deserve to feel as happy and cherished as you make others feel. </span>
            Never forget that! 💖
          </p>
          
          <p className="text-xl leading-relaxed">
            I made this little corner of the internet just for you, hoping it could be your escape 
            whenever you need a moment of joy, a reminder of how special you are, or just something 
            to make you smile. Come back here anytime you need a pick-me-up! 😊
          </p>
          
          <div className="mt-8 pt-6 border-t-2 border-rose-200">
            <p className="text-2xl font-semibold text-rose-600 flex items-center justify-center gap-2">
              Made with love by San 
              <Heart className="w-6 h-6 text-red-500 animate-heart-beat fill-current" />
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Because you deserve all the happiness in the world ✨
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-4">
          <Heart className="w-8 h-8 text-red-400 animate-heart-beat" />
          <Heart className="w-10 h-10 text-red-500 animate-heart-beat" style={{animationDelay: '0.2s'}} />
          <Heart className="w-8 h-8 text-red-400 animate-heart-beat" style={{animationDelay: '0.4s'}} />
        </div>
      </div>
    </div>
  )
}
