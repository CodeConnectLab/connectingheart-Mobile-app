import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigationRoute = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationRoute must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('MainTabs');

  return (
    <NavigationContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </NavigationContext.Provider>
  );
};

