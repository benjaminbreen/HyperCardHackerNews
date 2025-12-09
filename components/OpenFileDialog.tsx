import React from 'react';
import { soundService } from '../services/SoundService';

interface OpenFileDialogProps {
  onCancel: () => void;
  onOpen: () => void;
}

const OpenFileDialog: React.FC<OpenFileDialogProps> = ({ onCancel, onOpen }) => {
  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-transparent" onClick={() => soundService.playError()}></div>
      <div className="bg-white border-2 border-black w-[400px] shadow-[4px_4px_0_0_black] flex flex-col font-chicago p-4 z-[70] select-none">
         <div className="flex justify-between items-start mb-4">
             <div className="border-2 border-black w-[220px] h-[150px] overflow-y-scroll bg-white p-1 shadow-inner">
                 <div 
                   className="bg-black text-white px-2 py-1 cursor-default mb-1"
                   onClick={() => {}}
                 >
                   HyperCardHackerNews
                 </div>
             </div>
             <div className="flex flex-col gap-3 w-[120px]">
                 <button 
                   className="border-2 border-black px-2 py-1 shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none hover:bg-black hover:text-white"
                   onClick={() => { soundService.playStartup(); onOpen(); }}
                 >
                   Open
                 </button>
                 <button 
                   className="border-2 border-black px-2 py-1 shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none hover:bg-black hover:text-white"
                   onClick={() => { soundService.playClick(); onCancel(); }}
                 >
                   Cancel
                 </button>
                 <div className="h-4"></div>
                 <button 
                   className="border-2 border-black px-2 py-1 shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none hover:bg-black hover:text-white disabled:opacity-50"
                   disabled
                 >
                   Eject
                 </button>
                 <button 
                   className="border-2 border-black px-2 py-1 shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none hover:bg-black hover:text-white disabled:opacity-50"
                   disabled
                 >
                   Desktop
                 </button>
             </div>
         </div>
         <div className="text-center font-geneva text-sm">
            Select a Stack to open
         </div>
      </div>
    </div>
  );
};

export default OpenFileDialog;