'use client'
import React,{ createContext, useContext, useState } from 'react';
interface ScrollContextProps {
    activeSection: number;
    setActiveSection: (section: number) => void;
  }
export const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider = ({ children }:{children:React.ReactNode;}) => {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): ScrollContextProps => {
    const context = useContext(ScrollContext);
    if (!context) {
      throw new Error('useScrollContext must be used within a ScrollProvider');
    }
    return context;
  };