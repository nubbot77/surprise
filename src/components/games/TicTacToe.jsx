import { useState } from 'react'
import { Heart, Star, RotateCcw } from 'lucide-react'

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isHeartTurn, setIsHeartTurn] = useState(true)
  const [winner, setWinner] = useState(null)

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ]

  const checkWinner = (squares) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return squares.every(square => square !== null) ? 'draw' : null
  }

  const handleClick = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isHeartTurn ? '💖' : '⭐'
    setBoard(newBoard)

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    } else {
      setIsHeartTurn(!isHeartTurn)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsHeartTurn(true)
    setWinner(null)
  }

  return (
    <div className="bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-rose-800 flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 animate-heart-beat" />
        Tic-Tac-Toe
        <Star className="w-10 h-10 animate-wiggle" />
      </h2>

      <div className="text-center mb-6">
        {!winner && (
          <p className="text-2xl font-semibold text-gray-700">
            Current turn: {isHeartTurn ? '💖 Hearts' : '⭐ Stars'}
          </p>
        )}
        
        {winner && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-4 border-4 border-yellow-400 animate-bounce-slow">
            {winner === 'draw' ? (
              <p className="text-2xl font-bold text-purple-700">It's a Draw! 🤝</p>
            ) : (
              <p className="text-2xl font-bold text-rose-700">
                {winner} Wins! 🎉
              </p>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-6">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="aspect-square bg-white/80 backdrop-blur-sm rounded-xl text-5xl hover:bg-white hover:scale-105 transition-all shadow-lg border-2 border-pink-300 hover:border-pink-400"
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={resetGame}
          className="bg-gradient-to-r from-rose-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:scale-110 transition-all shadow-lg flex items-center gap-2 mx-auto"
        >
          <RotateCcw className="w-5 h-5" />
          New Game
        </button>
      </div>

      <div className="mt-6 text-center text-gray-600">
        <p className="text-sm">💖 Hearts vs ⭐ Stars</p>
      </div>
    </div>
  )
}
