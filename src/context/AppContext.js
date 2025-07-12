import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  currentPage: 'visualizer',
  activeAlgorithm: 'bubble-sort',
  darkMode: true,
  animationSpeed: 500,
  isAnimating: false,
  user: null,
  progress: {}
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_ALGORITHM':
      return { ...state, activeAlgorithm: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_ANIMATION_SPEED':
      return { ...state, animationSpeed: action.payload };
    case 'SET_ANIMATING':
      return { ...state, isAnimating: action.payload };
    case 'UPDATE_PROGRESS':
      return { 
        ...state, 
        progress: { ...state.progress, [action.algorithm]: action.payload }
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};