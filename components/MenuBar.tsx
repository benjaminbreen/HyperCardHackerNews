import React, { useState, useEffect } from 'react';
import { soundService } from '../services/SoundService';

interface MenuBarProps {
  onAboutClick: () => void;
  onCalculatorClick: () => void;
  onPuzzleClick: () => void;
  onFontChange: (fontClass: string) => void;
  onGoAction: (action: string) => void;
  currentFont: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ onAboutClick, onCalculatorClick, onPuzzleClick, onFontChange, onGoAction, currentFont }) => {
  const [time, setTime] = useState('');
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleMenuClick = (menuName: string) => {
    soundService.playClick();
    if (openMenu === menuName) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menuName);
    }
  };

  const handleItemClick = (action: string, value?: string) => {
    soundService.playClick();
    setOpenMenu(null);
    
    if (action === 'link' && value) {
        window.open(value, '_blank');
        return;
    }

    switch(action) {
        case 'about': onAboutClick(); break;
        case 'calculator': onCalculatorClick(); break;
        case 'puzzle': onPuzzleClick(); break;
        case 'font': if (value) onFontChange(value); break;
        default: if (action) onGoAction(action); break;
    }
  };

  const menuItems = [
    { 
      name: 'apple', 
      label: '', 
      items: [
        { label: 'About HyperNews...', action: 'about' },
        { label: '-', action: '' },
        { label: 'Calculator', action: 'calculator' },
        { label: 'Res Obscura', action: 'link', value: 'https://resobscura.substack.com' },
        { label: 'Puzzle', action: 'puzzle' },
      ] 
    },
    { 
      name: 'file', 
      label: 'File', 
      items: [
        { label: 'New Stack...', action: 'new_stack' },
        { label: 'Open Stack...', action: 'open_stack' },
        { label: 'Close Stack', action: 'close_stack' },
        { label: 'Save', action: '' },
        { label: '-', action: '' },
        { label: 'Print...', action: '' },
        { label: 'Quit', action: 'quit' }
      ] 
    },
    { 
      name: 'edit', 
      label: 'Edit', 
      items: [
        { label: 'Undo', action: '' },
        { label: '-', action: '' },
        { label: 'Cut', action: '' },
        { label: 'Copy', action: '' },
        { label: 'Paste', action: '' },
        { label: 'Clear', action: 'clear_paint' } 
      ] 
    },
    { 
      name: 'go', 
      label: 'Go', 
      items: [
        { label: 'Back', action: 'back' },
        { label: 'Home', action: 'home' },
        { label: 'Help', action: 'help' },
        { label: 'Recent', action: 'recent' },
        { label: 'First', action: 'first' },
        { label: 'Prev', action: 'prev' },
        { label: 'Next', action: 'next' },
        { label: 'Last', action: 'last' }
      ] 
    },
    { 
      name: 'font', 
      label: 'Font', 
      items: [
        { label: 'Chicago', action: 'font', value: 'font-chicago' },
        { label: 'Geneva', action: 'font', value: 'font-geneva' },
        { label: 'Monaco', action: 'font', value: 'font-monaco' },
        { label: 'Times', action: 'font', value: 'font-times' },
      ] 
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-[28px] bg-white border-b-2 border-black z-50 flex items-center justify-between select-none font-chicago text-[13px] md:text-[15px] px-1 md:px-3 shadow-md">
      <div className="flex items-center h-full">
        {menuItems.map((menu) => (
          <div key={menu.name} className="relative group h-full flex items-center">
            <button
              className={`px-2 md:px-4 h-full focus:outline-none active:bg-black active:text-white ${openMenu === menu.name ? 'bg-black text-white' : 'text-black'}`}
              onMouseDown={() => handleMenuClick(menu.name)}
              onMouseEnter={() => { if (openMenu) setOpenMenu(menu.name); }}
            >
              {menu.label}
            </button>
            
            {openMenu === menu.name && (
              <div className="absolute top-[26px] left-0 bg-white border-2 border-black shadow-[4px_4px_0_0_black] py-1 min-w-[150px] z-50">
                {menu.items.map((item, idx) => (
                  item.label === '-' ? (
                    <div key={idx} className="h-[2px] bg-black my-1 mx-2 overflow-hidden border-b border-dotted border-gray-400"></div>
                  ) : (
                    <div 
                      key={idx} 
                      className="px-5 py-1 hover:bg-black hover:text-white cursor-default whitespace-nowrap text-[15px] flex justify-between"
                      onClick={() => handleItemClick(item.action, item.value)}
                    >
                      <span className={item.value ? item.value.replace('font-', 'font-') : ''}>{item.label}</span>
                      {menu.name === 'font' && item.value === currentFont && (
                        <span className="ml-2">✓</span>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center px-3 cursor-help relative group h-full font-chicago" onClick={() => soundService.playClick()}>
        <span className="mr-3 text-lg">?</span>
        <span>{time}</span>
      </div>
      
      {openMenu && (
        <div 
          className="fixed top-[28px] left-0 w-full h-full z-40 bg-transparent"
          onClick={() => setOpenMenu(null)}
        />
      )}
    </div>
  );
};

export default MenuBar;