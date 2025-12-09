import React, { useState, useEffect } from 'react';
import { soundService } from '../services/SoundService';

interface PuzzleProps {
  onClose: () => void;
  onMouseDown: (e: React.MouseEvent) => void;
}

const Puzzle: React.FC<PuzzleProps> = ({ onClose, onMouseDown }) => {
  // 1-15, 0 represents empty
  const [tiles, setTiles] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    // Initialize simple solvable state: solved state with last two swapped, then easy shuffle
    // or just random valid shuffle. For simplicity: start solved then shuffle a bit
    let initial = Array.from({length: 16}, (_, i) => i + 1);
    initial[15] = 0; // last is empty
    
    // Simple shuffle by simulating valid moves
    let emptyIdx = 15;
    for(let i=0; i<100; i++) {
        const neighbors = [];
        if (emptyIdx % 4 > 0) neighbors.push(emptyIdx - 1); // left
        if (emptyIdx % 4 < 3) neighbors.push(emptyIdx + 1); // right
        if (emptyIdx >= 4) neighbors.push(emptyIdx - 4); // up
        if (emptyIdx < 12) neighbors.push(emptyIdx + 4); // down
        
        const rand = neighbors[Math.floor(Math.random() * neighbors.length)];
        [initial[emptyIdx], initial[rand]] = [initial[rand], initial[emptyIdx]];
        emptyIdx = rand;
    }
    
    setTiles(initial);
  }, []);

  const moveTile = (index: number) => {
    const emptyIdx = tiles.indexOf(0);
    // Check adjacency
    const isAdjacent = 
      (index === emptyIdx - 1 && emptyIdx % 4 !== 0) || // Right of empty
      (index === emptyIdx + 1 && index % 4 !== 0) || // Left of empty
      (index === emptyIdx - 4) || // Below empty
      (index === emptyIdx + 4); // Above empty

    if (isAdjacent) {
      soundService.playClick();
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIdx]] = [newTiles[emptyIdx], newTiles[index]];
      setTiles(newTiles);
      checkWin(newTiles);
    }
  };

  const checkWin = (currentTiles: number[]) => {
     // Check if 1-15 are in order
     for(let i=0; i<15; i++) {
         if (currentTiles[i] !== i + 1) return;
     }
     setSolved(true);
     soundService.playStartup(); // Success sound
  };

  return (
    <div className="w-[180px] bg-[#e0e0e0] border-2 border-black shadow-[4px_4px_0_0_black] flex flex-col font-chicago select-none">
       <div 
        className="h-[20px] border-b border-black flex items-center justify-between px-1 bg-[repeating-linear-gradient(90deg,black,black_1px,white_1px,white_2px)] cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
      >
        <div 
           className="w-3 h-3 border border-black bg-white active:bg-black cursor-pointer"
           onClick={(e) => { e.stopPropagation(); onClose(); soundService.playClick(); }}
        ></div>
        <span className="bg-[#e0e0e0] px-1 text-[10px] leading-none font-bold">Puzzle</span>
      </div>

      <div className="p-4 flex flex-col items-center">
         {solved ? (
             <div className="h-[144px] w-[144px] flex items-center justify-center text-center">
                 <div className="text-xl font-bold">You Won!</div>
             </div>
         ) : (
             <div className="grid grid-cols-4 gap-0 border-2 border-gray-500 shadow-inner bg-gray-700">
                {tiles.map((tile, i) => (
                    <div 
                      key={i}
                      className={`w-9 h-9 flex items-center justify-center font-bold text-lg
                        ${tile === 0 ? 'bg-gray-700' : 'bg-white border border-gray-400 shadow-[inset_1px_1px_0_white,1px_1px_0_black] cursor-pointer hover:bg-gray-100'}
                      `}
                      onClick={() => tile !== 0 && moveTile(i)}
                    >
                      {tile !== 0 ? tile : ''}
                    </div>
                ))}
             </div>
         )}
         <div className="mt-2 text-xs text-center font-geneva">
             Slide tiles to order 1-15.
         </div>
      </div>
    </div>
  );
};

export default Puzzle;