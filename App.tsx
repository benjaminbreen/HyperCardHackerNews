import React, { useEffect, useState } from 'react';
import MenuBar from './components/MenuBar';
import HyperCard from './components/HyperCard';
import Calculator from './components/Calculator';
import Puzzle from './components/Puzzle';
import OpenFileDialog from './components/OpenFileDialog';
import { soundService } from './services/SoundService';

// Simplified Tool Icons (6 items)
const ToolIcons = {
  Browse: () => <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2L9 8h2v8h2V8h2L12 2z" fill="currentColor"/><path d="M12 18a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/></svg>,
  Button: () => <svg viewBox="0 0 24 24" className="w-5 h-5"><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" fill="none" strokeWidth="2"/><text x="8" y="16" fontSize="8" fontFamily="sans-serif" fill="currentColor">OK</text></svg>,
  Field: () => <svg viewBox="0 0 24 24" className="w-5 h-5"><rect x="4" y="4" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="1"/><line x1="6" y1="8" x2="18" y2="8" stroke="currentColor"/><line x1="6" y1="12" x2="18" y2="12" stroke="currentColor"/><line x1="6" y1="16" x2="18" y2="16" stroke="currentColor"/></svg>,
  Text: () => <svg viewBox="0 0 24 24" className="w-5 h-5"><text x="6" y="18" fontSize="18" fontFamily="serif" fontWeight="bold" fill="currentColor">A</text></svg>,
  Pencil: () => <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M18 4l2 2L8 18H6v-2L18 4z" fill="currentColor"/></svg>,
  Eraser: () => <svg viewBox="0 0 24 24" className="w-5 h-5"><rect x="6" y="6" width="12" height="12" transform="rotate(-15 12 12)" fill="white" stroke="currentColor" strokeWidth="2"/><rect x="8" y="8" width="8" height="8" transform="rotate(-15 12 12)" fill="currentColor"/></svg>,
};

interface Position {
  x: number;
  y: number;
}

export type ToolType = 'browse' | 'button' | 'field' | 'text' | 'pencil' | 'eraser';
type StackMode = 'hn' | 'blank' | null;

const App: React.FC = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);
  const [isPuzzleOpen, setPuzzleOpen] = useState(false);
  const [isOpenDialogOpen, setOpenDialogOpen] = useState(false);
  const [currentFont, setCurrentFont] = useState('font-geneva');
  
  // App State
  const [activeTool, setActiveTool] = useState<ToolType>('browse');
  const [goCommand, setGoCommand] = useState<{ action: string, ts: number } | null>(null);
  
  // Window Positions
  const [stackPos, setStackPos] = useState<Position>({ x: 0, y: 0 }); 
  const [palettePos, setPalettePos] = useState<Position>({ x: 40, y: 80 });
  const [calcPos, setCalcPos] = useState<Position>({ x: 200, y: 100 });
  const [puzzlePos, setPuzzlePos] = useState<Position>({ x: 250, y: 150 });
  
  const [isStackInitialized, setIsStackInitialized] = useState(false);
  const [activeStackMode, setActiveStackMode] = useState<StackMode>('hn');
  const [showToolPalette, setShowToolPalette] = useState(true);

  // Dragging State
  const [dragState, setDragState] = useState<{
    id: 'stack' | 'palette' | 'calculator' | 'puzzle' | null;
    startMouse: Position;
    startPos: Position;
  }>({ id: null, startMouse: { x: 0, y: 0 }, startPos: { x: 0, y: 0 } });

  useEffect(() => {
    if (!isStackInitialized) {
      const isMobile = window.innerWidth < 768;
      setStackPos({
        x: isMobile ? 0 : Math.max(0, (window.innerWidth - 900) / 2),
        y: isMobile ? 0 : Math.max(40, (window.innerHeight - 720) / 2)
      });
      setIsStackInitialized(true);
    }
  }, [isStackInitialized]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragState.id) return;
      
      const dx = e.clientX - dragState.startMouse.x;
      const dy = e.clientY - dragState.startMouse.y;
      
      const newPos = {
        x: dragState.startPos.x + dx,
        y: dragState.startPos.y + dy
      };

      if (dragState.id === 'stack') setStackPos(newPos);
      if (dragState.id === 'palette') setPalettePos(newPos);
      if (dragState.id === 'calculator') setCalcPos(newPos);
      if (dragState.id === 'puzzle') setPuzzlePos(newPos);
    };

    const handleMouseUp = () => {
      setDragState(prev => ({ ...prev, id: null }));
    };

    if (dragState.id) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragState]);

  const startDrag = (e: React.MouseEvent, id: 'stack' | 'palette' | 'calculator' | 'puzzle') => {
    e.preventDefault();
    let currentPos = { x: 0, y: 0 };
    if (id === 'stack') currentPos = stackPos;
    if (id === 'palette') currentPos = palettePos;
    if (id === 'calculator') currentPos = calcPos;
    if (id === 'puzzle') currentPos = puzzlePos;

    setDragState({
      id,
      startMouse: { x: e.clientX, y: e.clientY },
      startPos: currentPos
    });
  };

  const handleToolClick = (tool: ToolType) => {
    soundService.playClick();
    setActiveTool(tool);
  };

  const handleGoAction = (action: string) => {
    if (action === 'close_stack') {
       soundService.playClick();
       setActiveStackMode(null);
    } else if (action === 'open_stack') {
       setOpenDialogOpen(true);
    } else if (action === 'new_stack') {
       soundService.playStartup();
       setActiveStackMode('blank');
    } else if (action === 'quit') {
       soundService.playClick();
       setActiveStackMode(null);
       setShowToolPalette(false);
    } else {
       setGoCommand({ action, ts: Date.now() });
    }
  };

  useEffect(() => {
    const handleInit = () => {
      soundService.playStartup();
      window.removeEventListener('click', handleInit);
    };
    window.addEventListener('click', handleInit);
    return () => window.removeEventListener('click', handleInit);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col">
      <MenuBar 
        onAboutClick={() => setAboutOpen(true)} 
        onCalculatorClick={() => setCalculatorOpen(true)}
        onPuzzleClick={() => setPuzzleOpen(true)}
        onFontChange={setCurrentFont}
        onGoAction={handleGoAction}
        currentFont={currentFont}
      />
      
      {/* Desktop Area */}
      <div className="flex-1 relative w-full h-full pb-[44px] md:pb-0">
        
        {/* Desktop Icons - Hidden on mobile */}
        <div className="hidden md:flex absolute right-6 top-16 flex-col items-end gap-8 group cursor-mac-default z-0">
          <div className="flex flex-col items-center w-24 text-center" onClick={() => soundService.playClick()}>
             <div className="w-12 h-14 bg-white border-2 border-black mb-1 relative shadow-[3px_3px_0_0_black] active:invert">
               <div className="absolute inset-1.5 border border-dotted border-black"></div>
               <div className="absolute bottom-1.5 right-1.5 w-4 h-2.5 bg-black"></div>
             </div>
             <span className="bg-white px-1 text-sm font-geneva border border-white group-hover:border-black shadow-sm font-medium">Macintosh HD</span>
          </div>
          <div className="flex flex-col items-center w-24 text-center" onClick={() => soundService.playClick()}>
             <div className="w-12 h-14 bg-white border-2 border-black mb-1 relative shadow-[3px_3px_0_0_black] flex items-center justify-center active:invert">
                <svg width="28" height="28" viewBox="0 0 24 24"><path d="M4,4H20V20H4V4M6,6V18H18V6H6M8,8H16V10H8V8M8,12H16V14H8V12Z" fill="black"/></svg>
             </div>
             <span className="bg-white px-1 text-sm font-geneva border border-white group-hover:border-black shadow-sm font-medium">Trash</span>
          </div>
          
          {/* Easter Egg: Dogcow Icon */}
          <div className="flex flex-col items-center w-24 text-center" onClick={() => { soundService.playMoof(); }}>
             <div className="w-12 h-14 bg-white border-2 border-black mb-1 relative shadow-[3px_3px_0_0_black] flex items-center justify-center active:invert">
                {/* Pixel art "Moof" cow */}
                <svg width="32" height="32" viewBox="0 0 16 16" shapeRendering="crispEdges">
                  <path d="M4 4h2v1h-2zM7 4h2v1h-2zM10 5h1v1h-1zM3 6h1v1h-1zM11 6h1v3h-1zM4 7h6v2h-6zM3 9h1v3h-1zM4 11h1v1h-1zM8 11h1v1h-1z" fill="black"/>
                </svg>
             </div>
             <span className="bg-white px-1 text-sm font-geneva border border-white group-hover:border-black shadow-sm font-medium">Clarus</span>
          </div>
        </div>

        {/* Draggable Accessories */}
        {isCalculatorOpen && (
          <div
            className="md:absolute fixed inset-0 md:inset-auto flex items-center justify-center md:block"
            style={{
              left: window.innerWidth >= 768 ? calcPos.x : 0,
              top: window.innerWidth >= 768 ? calcPos.y : 0,
              zIndex: dragState.id === 'calculator' ? 50 : 40
            }}
          >
             <Calculator onClose={() => setCalculatorOpen(false)} onMouseDown={(e) => startDrag(e, 'calculator')} />
          </div>
        )}

        {isPuzzleOpen && (
          <div
            className="md:absolute fixed inset-0 md:inset-auto flex items-center justify-center md:block"
            style={{
              left: window.innerWidth >= 768 ? puzzlePos.x : 0,
              top: window.innerWidth >= 768 ? puzzlePos.y : 0,
              zIndex: dragState.id === 'puzzle' ? 50 : 40
            }}
          >
             <Puzzle onClose={() => setPuzzleOpen(false)} onMouseDown={(e) => startDrag(e, 'puzzle')} />
          </div>
        )}

        {isOpenDialogOpen && (
           <OpenFileDialog 
              onCancel={() => setOpenDialogOpen(false)}
              onOpen={() => { setActiveStackMode('hn'); setOpenDialogOpen(false); }}
           />
        )}

        {/* Draggable HyperCard Window */}
        {isStackInitialized && activeStackMode && (
          <div
            className="w-full h-full md:w-auto md:h-auto"
            style={{
              position: 'absolute',
              left: stackPos.x,
              top: stackPos.y,
              right: window.innerWidth < 768 ? 0 : 'auto',
              bottom: window.innerWidth < 768 ? 0 : 'auto',
              zIndex: dragState.id === 'stack' ? 30 : 10
            }}
          >
            <HyperCard
              onTitleMouseDown={(e) => startDrag(e, 'stack')}
              fontClass={currentFont}
              activeTool={activeTool}
              goCommand={goCommand}
              stackMode={activeStackMode}
              onClose={() => { soundService.playClick(); setActiveStackMode(null); }}
              onAboutClick={() => setAboutOpen(true)}
            />
          </div>
        )}

        {/* Draggable Tool Palette - Remains visible if showToolPalette is true, even if stack is closed */}
        {showToolPalette && (
          <div
            className="md:absolute fixed bottom-0 left-0 md:left-auto md:bottom-auto md:w-[78px] w-full bg-white border-2 border-black shadow-[3px_3px_0_0_black] md:flex-col flex-row select-none"
            style={{
              left: window.innerWidth >= 768 ? palettePos.x : 0,
              top: window.innerWidth >= 768 ? palettePos.y : 'auto',
              bottom: window.innerWidth < 768 ? 0 : 'auto',
              zIndex: dragState.id === 'palette' ? 31 : 20
            }}
          >
            <div
              className="hidden md:flex h-4 border-b-2 border-black items-center justify-center relative bg-white bg-[repeating-linear-gradient(90deg,black,black_1px,white_1px,white_2px)] opacity-50 cursor-grab active:cursor-grabbing"
              onMouseDown={(e) => startDrag(e, 'palette')}
            >
            </div>

            {/* Tools Grid (2 rows x 3 cols on desktop, 1 row x 6 cols on mobile) */}
            <div className="grid md:grid-cols-3 grid-cols-6 gap-[1px] bg-black p-[1px]">
              <div onClick={() => handleToolClick('browse')} className={`md:h-[24px] h-[40px] flex items-center justify-center cursor-default ${activeTool === 'browse' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><ToolIcons.Browse /></div>
              <div onClick={() => handleToolClick('button')} className={`md:h-[24px] h-[40px] flex items-center justify-center cursor-default ${activeTool === 'button' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><ToolIcons.Button /></div>
              <div onClick={() => handleToolClick('field')} className={`md:h-[24px] h-[40px] flex items-center justify-center cursor-default ${activeTool === 'field' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><ToolIcons.Field /></div>
              <div onClick={() => handleToolClick('text')} className={`md:h-[24px] h-[40px] flex items-center justify-center cursor-default ${activeTool === 'text' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><ToolIcons.Text /></div>
              <div onClick={() => handleToolClick('pencil')} className={`md:h-[24px] h-[40px] flex items-center justify-center cursor-default ${activeTool === 'pencil' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><ToolIcons.Pencil /></div>
              <div onClick={() => handleToolClick('eraser')} className={`md:h-[24px] h-[40px] flex items-center justify-center cursor-default ${activeTool === 'eraser' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><ToolIcons.Eraser /></div>
            </div>
          </div>
        )}

        {/* About Dialog Modal */}
        {isAboutOpen && (
          <div className="absolute inset-0 z-[60] flex items-center justify-center p-4">
             <div className="absolute inset-0 bg-transparent" onClick={() => soundService.playError()}></div>
             <div className="bg-white border-2 border-black w-full max-w-[500px] shadow-[4px_4px_0_0_black] flex flex-col font-geneva z-[70]">
                <div className="h-8 border-b-2 border-black flex items-center justify-center bg-[#e0e0e0]">
                   <span className="font-chicago text-base md:text-lg">About HyperCardHackerNews</span>
                </div>
                <div className="p-4 md:p-8 flex flex-col items-center">
                   <div className="w-16 h-16 mb-6 border-2 border-black flex items-center justify-center shadow-[3px_3px_0_0_black]">
                      <span className="text-4xl"></span>
                   </div>
                   <h2 className="font-chicago text-2xl mb-2">HyperCardHackerNews</h2>
                   <p className="text-sm mb-6">Version 1.0.5</p>
                   <div className="w-full h-40 border border-black p-1 bg-white relative">
                      <div className="w-full h-full overflow-y-scroll border border-black p-2 text-sm leading-relaxed pr-6 font-geneva">
              
                        <p className="mb-2">An homage to <a href="https://news.ycombinator.com/item?id=46205632" target="_blank" className="underline hover:bg-black hover:text-white">this project</a> by Hacker News user <b>keepamovin</b> which simulates the HN Front page in the year 2035.</p>
                        <p className="mb-2">Created by Gemini 3 Pro under the direction of <a href="https://benjaminpbreen.com" target="_blank" className="underline hover:bg-black hover:text-white">Benjamin Breen</a> who you can read more from <a href="https://resobscura.substack.com" target="_blank" className="underline hover:bg-black hover:text-white">here</a>. </p>
                        
                        <p className="mb-2">Github: <a href="https://github.com/benjaminbreen/HyperCardHackerNews" target="_blank" className="underline hover:bg-black hover:text-white">https://github.com/benjaminbreen/HyperCardHackerNews</a> </p>
                       
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-full border-l border-black bg-[#eee] flex flex-col justify-between">
                         <div className="h-4 border-b border-black flex items-center justify-center text-[8px]">▲</div>
                         <div className="flex-1 bg-white relative">
                            <div className="w-full h-8 bg-black opacity-20 absolute top-0"></div>
                         </div>
                         <div className="h-4 border-t border-black flex items-center justify-center text-[8px]">▼</div>
                      </div>
                   </div>
                   <button 
                     className="mt-6 px-8 py-1 border-2 border-black rounded-full shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none hover:bg-black hover:text-white font-chicago"
                     onClick={() => setAboutOpen(false)}
                   >
                     OK
                   </button>
                </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;