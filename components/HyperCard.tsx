import React, { useState, useEffect, useRef } from 'react';
import { ViewState, NewsItem } from '../types';
import { NEWS_ITEMS, MORE_ITEMS, NEW_ITEMS } from '../constants';
import { soundService } from '../services/SoundService';
import { ToolType } from '../App';

interface HyperCardProps {
  onTitleMouseDown: (e: React.MouseEvent) => void;
  fontClass: string;
  activeTool: ToolType;
  goCommand: { action: string, ts: number } | null;
  stackMode: 'hn' | 'blank';
  onClose: () => void;
  onAboutClick: () => void;
}

// SVG Icons
const Icons = {
  Home: () => <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>,
  ArrowLeft: () => <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>,
  Triangle: () => <svg width="14" height="14" viewBox="0 0 10 10" className="fill-black"><path d="M1 9L5 1L9 9H1Z"/></svg>
};

const HyperCard: React.FC<HyperCardProps> = ({ onTitleMouseDown, fontClass, activeTool, goCommand, stackMode, onClose, onAboutClick }) => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  const [currentItem, setCurrentItem] = useState<NewsItem | null>(null);
  const [history, setHistory] = useState<ViewState[]>([]);
  
  // Navigation State
  const [activeList, setActiveList] = useState<'top' | 'new'>('top');
  const [page, setPage] = useState<number>(1);
  const [expandedArticle, setExpandedArticle] = useState<boolean>(false);
  const [showRecent, setShowRecent] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);

  // Canvas State
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.parentElement?.clientWidth || 900;
      canvas.height = canvas.parentElement?.clientHeight || 720;
    }
  }, []);

  // Handle Go Menu Commands
  useEffect(() => {
    if (!goCommand) return;
    
    // Commands only work in HN mode mostly, but clear_paint works everywhere
    if (goCommand.action === 'clear_paint') {
         soundService.playClick();
         const canvas = canvasRef.current;
         const ctx = canvas?.getContext('2d');
         if (canvas && ctx) {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
         }
         return;
    }

    if (stackMode === 'blank') return; // No navigation in blank stack

    soundService.playNav();
    const action = goCommand.action;

    switch(action) {
      case 'back':
        goBack();
        break;
      case 'home':
        goHome();
        break;
      case 'help':
        alert("HyperCard Help\n\n- Click items to read details.\n- Use the tool palette to draw on cards.\n- Use Go menu to navigate.");
        break;
      case 'recent':
        setShowRecent(true); // Simple alert mock
        setTimeout(() => { alert("Recent Cards:\n\nHome\n" + (currentItem ? currentItem.title : "")); setShowRecent(false); }, 100);
        break;
      case 'first':
        setViewState(ViewState.HOME);
        setActiveList('top');
        setPage(1);
        break;
      case 'last':
        setViewState(ViewState.HOME);
        setActiveList('top');
        setPage(2);
        break;
      case 'next':
        handleNext();
        break;
      case 'prev':
        handlePrev();
        break;
    }
  }, [goCommand, stackMode]);

  const handleNext = () => {
    const items = getDisplayedItems();
    if (viewState === ViewState.DETAIL && currentItem) {
      const idx = items.findIndex(i => i.id === currentItem.id);
      if (idx !== -1 && idx < items.length - 1) {
        setCurrentItem(items[idx + 1]);
        setExpandedArticle(false);
      } else {
        if (activeList === 'top' && page === 1) {
             setViewState(ViewState.HOME);
             setPage(2);
        }
      }
    } else if (viewState === ViewState.HOME) {
      if (activeList === 'top' && page === 1) setPage(2);
      else if (activeList === 'top' && page === 2) { setActiveList('new'); setPage(1); }
    }
  };

  const handlePrev = () => {
    const items = getDisplayedItems();
    if (viewState === ViewState.DETAIL && currentItem) {
       const idx = items.findIndex(i => i.id === currentItem.id);
       if (idx > 0) {
         setCurrentItem(items[idx - 1]);
         setExpandedArticle(false);
       } else {
         setViewState(ViewState.HOME);
       }
    } else if (viewState === ViewState.HOME) {
       if (activeList === 'new') { setActiveList('top'); setPage(2); }
       else if (page === 2) setPage(1);
    }
  };

  // Drawing Logic
  const startDrawing = (e: React.MouseEvent) => {
    if (activeTool !== 'pencil' && activeTool !== 'eraser') return;
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = activeTool === 'pencil' ? 1 : 16;
    ctx.lineCap = 'square';
    ctx.strokeStyle = activeTool === 'eraser' ? '#ffffff' : '#000000';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };
  
  const onMouseDownDraw = (e: React.MouseEvent) => {
      if (activeTool !== 'pencil' && activeTool !== 'eraser') return;
      setIsDrawing(true);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx) ctx.beginPath();
      draw(e);
  };

  const getDisplayedItems = () => {
    if (activeList === 'new') return NEW_ITEMS;
    if (page === 2) return MORE_ITEMS;
    return NEWS_ITEMS;
  };

  const displayedItems = getDisplayedItems();

  const goHome = () => {
    soundService.playNav();
    setHistory([...history, viewState]);
    setViewState(ViewState.HOME);
    setCurrentItem(null);
    setExpandedArticle(false);
  };

  const goBack = () => {
    soundService.playNav();
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setViewState(prev);
      setHistory(history.slice(0, -1));
      if (prev === ViewState.HOME) setCurrentItem(null);
      setExpandedArticle(false);
    } else {
      setViewState(ViewState.HOME);
    }
  };

  const goToDetail = (item: NewsItem) => {
    if (activeTool !== 'browse') return;
    soundService.playNav();
    setHistory([...history, viewState]);
    setCurrentItem(item);
    setViewState(ViewState.DETAIL);
    setExpandedArticle(false);
  };

  const handleTabChange = (list: 'top' | 'new') => {
    if (activeTool !== 'browse') return;
    soundService.playClick();
    setActiveList(list);
    setPage(1);
    setViewState(ViewState.HOME);
  };

  const handlePageChange = (newPage: number) => {
    if (activeTool !== 'browse') return;
    soundService.playNav();
    setPage(newPage);
    const scrollContainer = document.getElementById('list-container');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  };

  const getCursorClass = () => {
      switch(activeTool) {
          case 'browse': return 'cursor-auto'; 
          case 'pencil': return 'cursor-[url(https://cur.cursors-4u.net/cursors/cur-2/cur131.cur),_default]'; 
          case 'eraser': return 'cursor-[url(https://cur.cursors-4u.net/cursors/cur-2/cur134.cur),_default]'; 
          case 'text': return 'cursor-text';
          case 'button': 
          case 'field': return 'cursor-crosshair';
          default: return 'cursor-default';
      }
  };

  const contentPointerEvents = activeTool === 'browse' ? 'pointer-events-auto' : 'pointer-events-none';

  return (
    <div className={`w-full h-full max-w-[900px] max-h-[720px] md:w-[900px] md:h-[720px] bg-white border-2 border-black window-shadow flex flex-col select-none shadow-[2px_2px_0_0_#000000] relative ${getCursorClass()}`}>
      
      {/* PAINTING LAYER */}
      <canvas
         ref={canvasRef}
         className={`absolute inset-0 z-50 ${activeTool === 'browse' ? 'pointer-events-none' : 'pointer-events-auto'}`}
         onMouseDown={onMouseDownDraw}
         onMouseMove={draw}
         onMouseUp={stopDrawing}
         onMouseLeave={stopDrawing}
         onTouchStart={(e) => {
           e.preventDefault();
           const touch = e.touches[0];
           const mouseEvent = new MouseEvent('mousedown', {
             clientX: touch.clientX,
             clientY: touch.clientY
           });
           onMouseDownDraw(mouseEvent as any);
         }}
         onTouchMove={(e) => {
           e.preventDefault();
           const touch = e.touches[0];
           const mouseEvent = new MouseEvent('mousemove', {
             clientX: touch.clientX,
             clientY: touch.clientY
           });
           draw(mouseEvent as any);
         }}
         onTouchEnd={(e) => {
           e.preventDefault();
           stopDrawing();
         }}
      />

      {/* Title Bar */}
      <div 
        className="h-[32px] border-b-2 border-black flex items-center justify-center bg-white relative cursor-grab active:cursor-grabbing z-40"
        onMouseDown={onTitleMouseDown}
      >
        <div 
          className="absolute left-1.5 top-1.5 w-[20px] h-[20px] border-2 border-black bg-white hover:bg-black active:invert cursor-default flex items-center justify-center z-10"
          onClick={(e) => { e.stopPropagation(); soundService.playClick(); onClose(); }}
        />
        <div className="flex flex-col w-full h-full justify-center items-center px-10 overflow-hidden space-y-[3px] opacity-100 pointer-events-none">
           {Array.from({length: 5}).map((_, i) => (
             <div key={i} className="w-full h-[1px] bg-black"></div>
           ))}
        </div>
        <div className="absolute bg-white px-3 text-base font-chicago flex items-center gap-1 z-10">
          {stackMode === 'blank' 
            ? "Untitled Stack" 
            : (viewState === ViewState.HOME ? (activeList === 'top' ? "Home" : "New Submissions") : (currentItem?.title.substring(0, 30) + (currentItem?.title.length || 0 > 30 ? "..." : "")))
          }
        </div>
      </div>

      {/* Main Content Area */}
      {stackMode === 'blank' ? (
          <div className="flex-1 bg-white relative z-0">
             {/* Totally blank canvas area, tools work here */}
          </div>
      ) : (
          <div className={`flex-1 overflow-hidden relative p-2 md:p-6 flex flex-col z-0 ${contentPointerEvents}`}>
              {/* Header Section */}
              <div className="border-b-[4px] border-black mb-2 pb-2 flex justify-between items-end flex-wrap md:flex-nowrap gap-2">
                <div className="flex-1">
                  <h1 className="text-2xl md:text-4xl font-chicago leading-none tracking-tight">HyperCardHackerNews</h1>
                  <div className={`text-sm md:text-lg mt-1 md:mt-2 pl-1 ${fontClass}`}>Public Access • Dec 9, 1994</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                   <div className="flex gap-[-2px] items-end font-chicago text-xs md:text-sm">
                       <button
                         onClick={() => handleTabChange('top')}
                         className={`border-2 border-black border-b-0 px-2 md:px-3 py-1 mr-1 shadow-[2px_0_0_0_black] ${activeList === 'top' ? 'bg-black text-white' : 'bg-white hover:bg-gray-200'}`}
                       >
                         Top
                       </button>
                       <button
                         onClick={() => handleTabChange('new')}
                         className={`border-2 border-black border-b-0 px-2 md:px-3 py-1 shadow-[2px_0_0_0_black] ${activeList === 'new' ? 'bg-black text-white' : 'bg-white hover:bg-gray-200'}`}
                       >
                         New
                       </button>
                   </div>
                   <div
                      className="border-[3px] border-black p-1 md:p-2 mb-1 shadow-[3px_3px_0_0_black] cursor-pointer hover:bg-gray-100 active:translate-y-px active:shadow-[1px_1px_0_0_black]"
                      onClick={() => { if(activeTool === 'browse') { soundService.playClick(); setShowGuidelines(true); }}}
                   >
                      <div className="font-chicago text-2xl md:text-3xl px-1 md:px-2">HN</div>
                   </div>
                </div>
              </div>

              {/* Nav Icons */}
              <div className="flex justify-start gap-3 mb-4 pt-1 font-chicago">
                 {viewState !== ViewState.HOME && (
                   <button onClick={goHome} className="border-2 border-black px-3 py-1 text-sm hover:bg-black hover:text-white shadow-[2px_2px_0_0_black] flex items-center gap-2 active:translate-y-px active:shadow-none transition-none">
                      <Icons.Home /> Home
                   </button>
                 )}
                 {history.length > 0 && (
                   <button onClick={goBack} className="border-2 border-black px-3 py-1 text-sm hover:bg-black hover:text-white shadow-[2px_2px_0_0_black] flex items-center gap-2 active:translate-y-px active:shadow-none transition-none">
                      <Icons.ArrowLeft /> Back
                   </button>
                 )}
              </div>

              {/* Unified Content Box */}
              <div className="flex-1 border-[3px] border-black relative flex flex-col overflow-hidden bg-white">
                
                <div id="list-container" className={`flex-1 overflow-y-auto overflow-x-hidden bg-white ${fontClass}`}>
                  
                  {/* HOME VIEW */}
                  {viewState === ViewState.HOME && (
                    <div className="flex flex-col py-2">
                      {displayedItems.map((item, index) => (
                        <div 
                          key={item.id} 
                          className={`group flex items-baseline px-3 py-1.5 ${activeTool === 'browse' ? 'cursor-mac-hand hover:bg-black hover:text-white' : ''}`}
                          onClick={() => goToDetail(item)}
                        >
                          <span className="font-chicago w-10 text-right shrink-0 mr-3 text-2xl">
                            {(activeList === 'top' && page === 2) ? index + 31 : index + 1}.
                          </span>
                          <div className="w-4 h-4 mr-3 shrink-0 self-center flex items-center justify-center">
                            <Icons.Triangle />
                          </div>
                          <span className={`text-lg whitespace-nowrap overflow-hidden text-ellipsis max-w-[480px] leading-relaxed ${fontClass}`}>{item.title}</span>
                          <div className="flex-1 border-b-[3px] border-dotted border-black mx-2 mb-[6px] opacity-40 group-hover:border-white group-hover:opacity-100"></div>
                          <span className={`shrink-0 text-sm ${fontClass}`}>{item.domain}</span>
                        </div>
                      ))}

                      {activeList === 'top' && (
                        <div className="flex justify-center p-4 mt-2 border-t-2 border-dotted border-gray-300">
                          {page === 1 ? (
                            <button 
                              onClick={() => handlePageChange(2)}
                              className="font-chicago border-2 border-black px-4 py-2 hover:bg-black hover:text-white shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none"
                            >
                              More...
                            </button>
                          ) : (
                            <button 
                              onClick={() => handlePageChange(1)}
                              className="font-chicago border-2 border-black px-4 py-2 hover:bg-black hover:text-white shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none"
                            >
                              Back to Top
                            </button>
                          )}
                        </div>
                      )}
                      {activeList === 'new' && (
                         <div className={`text-center p-4 italic text-gray-500 ${fontClass}`}>
                            No more new items.
                         </div>
                      )}
                    </div>
                  )}

                  {/* DETAIL VIEW - Unified Scrolling */}
                  {viewState === ViewState.DETAIL && currentItem && (
                    <div className="p-6 min-h-full">
                      {/* Article Info Box */}
                      <div className="border-2 border-black p-6 shadow-[4px_4px_0_0_black] mb-8 bg-white">
                        <h2 className="font-chicago text-3xl mb-4 leading-tight">{currentItem.title}</h2>
                        <div className={`text-lg space-y-2 ${fontClass}`}>
                           <p><strong className="font-chicago">Posted by:</strong> {currentItem.user}</p>
                           <p><strong className="font-chicago">Date:</strong> December 9, 1994 ({currentItem.timeAgo})</p>
                           <p><strong className="font-chicago">Score:</strong> {currentItem.points} points</p>
                           <p className="mt-4">
                             <a href="#" className="underline hover:text-gray-600 font-bold" onClick={(e) => e.preventDefault()}>{currentItem.url}</a>
                           </p>
                        </div>
                        
                        {/* Article Text */}
                        {currentItem.text && (
                          <div className="mt-6 pt-4 border-t-2 border-black">
                            {expandedArticle ? (
                               <div className={`${fontClass} text-lg leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2 duration-300`}>
                                  {currentItem.text}
                               </div>
                            ) : (
                               <button 
                                 onClick={() => { if(activeTool === 'browse') { soundService.playClick(); setExpandedArticle(true); }}}
                                 className={`font-chicago border-2 border-black px-4 py-1 shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none flex items-center gap-2 ${activeTool === 'browse' ? 'hover:bg-black hover:text-white' : ''}`}
                               >
                                 <span className="text-xl">☞</span> Click to read article...
                               </button>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Comments Section - Flows naturally after article */}
                      <div>
                        <h3 className="font-chicago text-2xl border-b-2 border-black mb-6 pb-1">Comments</h3>
                        <div className="space-y-6">
                          {currentItem.comments.map(comment => (
                            <div 
                              key={comment.id} 
                              className={`text-lg ${fontClass} relative`}
                              style={{ paddingLeft: `${comment.indent * 32}px` }}
                            >
                              {comment.indent > 0 && (
                                <div className="absolute left-0 top-0 bottom-0 border-l-2 border-dotted border-black" style={{ left: `${(comment.indent * 32) - 16}px`}}></div>
                              )}
                              <div className="bg-[#eee] inline-block px-2 border border-transparent font-chicago text-base mb-1">{comment.user}:</div>
                              <p className="leading-relaxed pl-2 text-black">{comment.text}</p>
                            </div>
                          ))}
                          {currentItem.comments.length === 0 && (
                            <div className="italic text-gray-500 text-lg">No comments yet.</div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Visual corner blocker */}
                <div className="absolute right-0 bottom-0 w-[16px] h-[16px] border-l border-t border-black bg-[#e0e0e0] pointer-events-none z-20 hidden"></div>
              </div>

              {/* Footer Status Bar */}
              <div className={`mt-2 flex items-center text-sm px-2 ${fontClass} relative h-6 select-none`}>
                 <div className="absolute left-2">
                    {viewState === ViewState.HOME 
                      ? (activeList === 'top' ? (page === 1 ? "Items 1-30" : "Items 31-60") : "30 new items") 
                      : `${currentItem?.comments.length || 0} comments`
                    }
                 </div>

                 <div className="w-full flex justify-center">
                    <button 
                        onClick={() => { if(activeTool === 'browse') { soundService.playClick(); onAboutClick(); }}}
                        className={`font-bold hover:underline ${activeTool !== 'browse' ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                        About
                    </button>
                 </div>

                 <div className="absolute right-2 flex gap-4">
                   <span className="cursor-help hover:underline font-bold">Find...</span>
                 </div>
              </div>

          </div>
      )}

      {/* Guidelines Modal */}
      {showGuidelines && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center p-2 md:p-4" onClick={() => { soundService.playClick(); setShowGuidelines(false); }}>
          <div
            className="bg-white border-2 border-black w-full max-w-[600px] max-h-[90vh] shadow-[4px_4px_0_0_black] flex flex-col font-geneva z-[70]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-8 border-b-2 border-black flex items-center justify-center bg-[#e0e0e0] px-2">
              <span className="font-chicago text-base md:text-lg">Hacker News Guidelines</span>
            </div>
            <div className="flex-1 overflow-y-scroll p-3 md:p-6 text-sm md:text-base leading-relaxed">
              <h3 className="font-chicago text-lg mb-3 border-b border-black pb-1">What to Submit</h3>
              <p className="mb-3"><strong>On-Topic:</strong> Anything that good hackers would find interesting. That includes more than hacking and startups. If you had to reduce it to a sentence: anything that gratifies one's intellectual curiosity.</p>
              <p className="mb-4"><strong>Off-Topic:</strong> Most stories about politics, crime, sports, or celebrities. Videos of pratfalls or cute animal pictures. If they'd cover it on TV news, it's probably off-topic.</p>

              <h3 className="font-chicago text-lg mb-3 border-b border-black pb-1 mt-4">In Submissions</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Please don't use uppercase or exclamation points in titles.</li>
                <li>Submit the original source when possible.</li>
                <li>Don't use HN primarily for promotion.</li>
                <li>Remove the site name from titles—it will be displayed automatically.</li>
                <li>Please use the original title unless it's misleading or linkbait.</li>
                <li>Mark videos and PDFs by appending [video] or [pdf] to the title.</li>
                <li>Don't delete and repost stories.</li>
                <li>Don't solicit upvotes or comments.</li>
              </ul>

              <h3 className="font-chicago text-lg mb-3 border-b border-black pb-1 mt-4">In Comments</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Be kind.</strong> Don't be snarky.</li>
                <li>When disagreeing, reply to the argument instead of calling names.</li>
                <li>Please respond to the strongest interpretation of what someone says.</li>
                <li>Assume good faith.</li>
                <li>Eschew flamebait. Avoid generic tangents.</li>
                <li>Please don't post shallow dismissals of other people's work.</li>
                <li>Don't use Hacker News for political or ideological battle.</li>
                <li>Please don't pick the most provocative thing to complain about.</li>
                <li>Don't use uppercase for emphasis. Use *asterisks* instead.</li>
                <li>If a story is spam or off-topic, flag it—don't comment about it.</li>
                <li>Please don't complain about tangential annoyances like website formats.</li>
              </ul>

              <p className="text-xs italic mt-4 pt-3 border-t border-dotted border-gray-400">These guidelines help keep Hacker News a place for curious conversation and intellectual exploration. For more information, contact hn@ycombinator.com</p>
            </div>
            <div className="border-t-2 border-black p-3 flex justify-center bg-white">
              <button
                className="px-6 py-1 border-2 border-black rounded-full shadow-[2px_2px_0_0_black] active:translate-y-px active:shadow-none hover:bg-black hover:text-white font-chicago"
                onClick={() => { soundService.playClick(); setShowGuidelines(false); }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HyperCard;