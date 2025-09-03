import React, { useEffect, useRef, useState } from 'react';
import { Search, ArrowUp, ArrowDown, CornerDownLeft, X, ArrowLeft, Sun, Moon } from 'lucide-react';

const integrations = [
  { name: 'GitLab', domain: 'gitlab.com', icon: '🦊' },
  { name: 'Trello', domain: 'trello.com', icon: '🟦' },
  { name: 'Asana', domain: 'asana.com', icon: '🌸' },
  { name: 'Dropbox', domain: 'dropbox.com', icon: '📦' },
  { name: 'Google Workspace', domain: 'workspace.google.com', icon: '🇬' },
  { name: 'Notion', domain: 'notion.so', icon: '📝' },
  { name: 'Slack', domain: 'slack.com', icon: '💬' },
];

const SearchModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  
  const [selectedItem, setSelectedItem] = useState(integrations[1]);
  const [isVisible, setIsVisible] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    inputRef.current?.focus();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center pt-20 transition-opacity duration-300 ease-in-out bg-black/30 backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`bg-white dark:bg-[#1c1c1c] rounded-[25px] shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- HEADER DENGAN SEARCH + TOMBOL CLOSE DI SAMPING --- */}
<div className="p-3 border-b border-gray-200 dark:border-gray-100">
  <div className="flex items-center space-x-2 w-full">
    <input
      ref={inputRef}
      type="text"
      placeholder="Search for integrations"
      className="flex-1 py-2.5 px-4 text-sm text-gray-900 
                 bg-white dark:bg-gray-800 
                 border border-gray-300 dark:border-gray-600 
                 rounded-[25px] 
                 placeholder:text-gray-400
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
    />
    <button
      onClick={onClose}
      className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      aria-label="Close search modal"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
</div>


        <div className="flex" style={{ height: '380px' }}>
          {/* Kolom Kiri */}
          <div className="w-[220px] border-r border-gray-200 dark:border-gray-800 p-2 space-y-1 overflow-y-auto">
            <p className="px-2 py-1 text-xs font-medium text-gray-500">Integrations</p>
            {integrations.map((item) => (
              <div
                key={item.name}
                onClick={() => setSelectedItem(item)}
                className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer transition-colors ${
                  selectedItem.name === item.name
                    ? 'bg-gray-100 dark:bg-gray-800'
                    : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <span className="text-xl flex items-center justify-center w-7 h-7">{item.icon}</span>
                <div>
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-100">{item.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.domain}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom Kanan */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-[#1c1c1c]">
            <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                <div className="absolute inset-0 rounded-full bg-blue-500/5 dark:bg-blue-400/5 animate-pulse [animation-duration:4s]"></div>
                <div className="absolute inset-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 animate-pulse [animation-duration:4s] [animation-delay:0.5s]"></div>
                <div className="absolute inset-4 rounded-full bg-blue-500/15 dark:bg-blue-400/15"></div>
                <span className="text-3xl">{selectedItem.icon}</span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Untitled + {selectedItem.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Updated May 26, 2024</p>
            <div className="my-4">
              <button 
                onClick={() => setIsToggled(!isToggled)}
                className={`relative w-9 h-5 rounded-full transition-colors ${isToggled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                <span className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${isToggled ? 'transform translate-x-4' : ''}`}></span>
              </button>
            </div>
            <button className="w-full max-w-xs bg-blue-600 text-white font-semibold py-1.5 rounded-lg hover:bg-blue-700 transition-transform active:scale-[0.98]">View Integration</button>
            <button className="w-full max-w-xs mt-2 bg-white dark:bg-transparent text-gray-800 dark:text-gray-200 font-semibold py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-transform active:scale-[0.98]">Customize</button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between p-2.5 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-3">
                <span className="flex items-center gap-1"><ArrowUp size={14}/> <ArrowDown size={14}/> to navigate</span>
                <span className="flex items-center gap-1"><CornerDownLeft size={14}/> to select</span>
                <span className="flex items-center gap-1"><kbd className="font-sans text-gray-400">esc</kbd> to close</span>
                <span className="flex items-center gap-1"><ArrowLeft size={14}/> return to parent</span>
            </div>
            <div className="flex items-center space-x-2">
                <button className="p-1 rounded text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"><Sun size={14} /></button>
                <button className="p-1 rounded text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"><Moon size={14} /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;