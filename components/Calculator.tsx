import React, { useState } from 'react';
import { soundService } from '../services/SoundService';

interface CalculatorProps {
  onClose: () => void;
  onMouseDown: (e: React.MouseEvent) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onClose, onMouseDown }) => {
  const [display, setDisplay] = useState('0');
  const [stored, setStored] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNum = (num: string) => {
    soundService.playClick();
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOp = (operation: string) => {
    soundService.playClick();
    const current = parseFloat(display);
    
    if (stored !== null && op) {
       // Chain calculation
       const result = calculate(stored, current, op);
       setStored(result);
       setDisplay(String(result).slice(0, 10));
    } else {
       setStored(current);
    }
    
    setOp(operation);
    setNewNumber(true);
  };

  const calculate = (a: number, b: number, operation: string) => {
    switch(operation) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleEqual = () => {
    soundService.playClick();
    if (stored !== null && op) {
      const result = calculate(stored, parseFloat(display), op);
      setDisplay(String(result).slice(0, 10));
      setStored(null);
      setOp(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    soundService.playClick();
    setDisplay('0');
    setStored(null);
    setOp(null);
    setNewNumber(true);
  };

  return (
    <div className="w-[160px] bg-[#e0e0e0] border-2 border-black shadow-[4px_4px_0_0_black] flex flex-col font-chicago select-none">
      <div 
        className="h-[20px] border-b border-black flex items-center justify-between px-1 bg-[repeating-linear-gradient(90deg,black,black_1px,white_1px,white_2px)] cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
      >
        <div 
           className="w-3 h-3 border border-black bg-white active:bg-black cursor-pointer"
           onClick={(e) => { e.stopPropagation(); onClose(); soundService.playClick(); }}
        ></div>
        <span className="bg-[#e0e0e0] px-1 text-[10px] leading-none font-bold">Calculator</span>
      </div>
      
      <div className="p-3">
        <div className="bg-white border border-black h-8 mb-3 text-right px-1 font-monaco text-lg leading-7 overflow-hidden">
           {display}
        </div>
        
        <div className="grid grid-cols-4 gap-1">
          <button onClick={handleClear} className="col-span-1 bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none text-xs h-6">C</button>
          <button onClick={() => handleOp('=')} className="col-span-1 bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">=</button>
          <button onClick={() => handleOp('/')} className="col-span-1 bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">/</button>
          <button onClick={() => handleOp('*')} className="col-span-1 bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">*</button>

          <button onClick={() => handleNum('7')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">7</button>
          <button onClick={() => handleNum('8')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">8</button>
          <button onClick={() => handleNum('9')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">9</button>
          <button onClick={() => handleOp('-')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">-</button>

          <button onClick={() => handleNum('4')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">4</button>
          <button onClick={() => handleNum('5')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">5</button>
          <button onClick={() => handleNum('6')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">6</button>
          <button onClick={() => handleOp('+')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">+</button>

          <button onClick={() => handleNum('1')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">1</button>
          <button onClick={() => handleNum('2')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">2</button>
          <button onClick={() => handleNum('3')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">3</button>
          <button onClick={handleEqual} className="row-span-2 bg-black text-white border border-black shadow-[1px_1px_0_0_gray] active:translate-y-px active:shadow-none h-full flex items-center justify-center">=</button>

          <button onClick={() => handleNum('0')} className="col-span-2 bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">0</button>
          <button onClick={() => handleNum('.')} className="bg-white border border-black shadow-[1px_1px_0_0_black] active:translate-y-px active:shadow-none h-6">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;