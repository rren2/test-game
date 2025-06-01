import { useState } from 'react';

export function meta() {
  return [
    { title: "Tic-Tac-Toe Game - Test Game" },
    { name: "description", content: "Play an interactive tic-tac-toe game built with React." },
  ];
}

export function loader() {
  return {};
}

function Square({ value, onSquareClick }: { value: string | null; onSquareClick: () => void }) {
  return (
    <button 
      className="square group relative overflow-hidden" 
      onClick={onSquareClick}
    >
      <span className={`transition-all duration-300 ${value ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} ${value === 'X' ? 'text-blue-500' : 'text-red-500'}`}>
        {value}
      </span>
      {!value && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }: { 
  xIsNext: boolean; 
  squares: (string | null)[]; 
  onPlay: (nextSquares: (string | null)[]) => void 
}) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  let statusColor = "";
  if (winner) {
    status = `🎉 Winner: ${winner}!`;
    statusColor = winner === 'X' ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400';
  } else {
    const isDraw = squares.every(square => square !== null);
    if (isDraw) {
      status = "🤝 It's a draw!";
      statusColor = 'text-yellow-600 dark:text-yellow-400';
    } else {
      status = `Next player: ${xIsNext ? '🔵 X' : '🔴 O'}`;
      statusColor = xIsNext ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400';
    }
  }
  return (
    <div className="game-board-container">
      <div className={`status animate-pulse ${statusColor}`}>{status}</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }
    
    const isCurrentMove = move === currentMove;
    
    return (
      <li key={move} className="mb-2">
        <button 
          onClick={() => jumpTo(move)}
          className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
            isCurrentMove 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 hover:shadow-md'
          }`}
        >
          {isCurrentMove ? '• ' : ''}
          {description}
          {isCurrentMove ? ' (current)' : ''}
        </button>
      </li>
    );
  });
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0 max-w-6xl px-4">
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Tic-Tac-Toe
            </h1>
            <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🎮</div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
            A classic game with modern style, built with React hooks and time travel features
          </p>
        </header>
        
        <div className="game-container grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="game-board-section bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-gray-700/50 p-8 shadow-2xl">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          
          <div className="game-info-section bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-gray-700/50 p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Game History
              </h3>
            </div>
            <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              <ol className="space-y-2">{moves}</ol>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => {
              setHistory([Array(9).fill(null)]);
              setCurrentMove(0);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            New Game
          </button>
          
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}

function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
