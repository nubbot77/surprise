import { useEffect, useState } from 'react'

export default function FloatingHearts() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = []
    
    // Beautiful flowers
    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷', '💐', '🏵️', '🌹']
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: `flower-${i}`,
        type: 'flower',
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
        size: 25 + Math.random() * 20,
        emoji: flowers[Math.floor(Math.random() * flowers.length)]
      })
    }
    
    // Petals
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: `petal-${i}`,
        type: 'petal',
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 8,
        size: 18 + Math.random() * 12,
        emoji: '🌸'
      })
    }
    
    // Sparkles
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: `sparkle-${i}`,
        type: 'sparkle',
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 3,
        size: 10 + Math.random() * 10
      })
    }
    
    // Glowing orbs with purple-pink gradient
    for (let i = 0; i < 10; i++) {
      newParticles.push({
        id: `orb-${i}`,
        type: 'orb',
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        size: 50 + Math.random() * 80
      })
    }
    
    setParticles(newParticles)
  }, [])

  return (
    <div className="romantic-background" style={{ willChange: 'transform' }}>
      {particles.map((particle) => {
        if (particle.type === 'flower') {
          return (
            <div
              key={particle.id}
              className="floating-flower"
              style={{
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                willChange: 'transform, opacity',
                fontSize: `${particle.size}px`,
              }}
            >
              {particle.emoji}
            </div>
          )
        }
        
        if (particle.type === 'petal') {
          return (
            <div
              key={particle.id}
              className="floating-petal"
              style={{
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                fontSize: `${particle.size}px`,
              }}
            >
              {particle.emoji}
            </div>
          )
        }
        
        if (particle.type === 'sparkle') {
          return (
            <div
              key={particle.id}
              className="floating-sparkle"
              style={{
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                fontSize: `${particle.size}px`,
              }}
            >
              ✨
            </div>
          )
        }
        
        if (particle.type === 'orb') {
          return (
            <div
              key={particle.id}
              className="glowing-orb"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            />
          )
        }
        
        return null
      })}
    </div>
  )
}
