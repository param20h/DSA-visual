import React from 'react';
import BubbleSort from './components/BubbleSort';
import SelectionSort from './components/SelectionSort';
import InsertionSort from './components/InsertionSort';
import MergeSort from './components/MergeSort';
import QuickSort from './components/QuickSort';
import BinarySearch from './components/BinarySearch';
import Stack from './components/Stack';
import LearnPage from './components/LearnPage';
import { useApp } from './context/AppContext';
import { getImplementedAlgorithms } from './utils/AlgorithmRegistry';
import './App.css';

function App() {
  const { state, dispatch } = useApp();
  const { activeAlgorithm, currentPage } = state;

  const algorithms = [
    { id: 'bubble-sort', name: 'Bubble Sort', component: BubbleSort },
    { id: 'selection-sort', name: 'Selection Sort', component: SelectionSort },
    { id: 'insertion-sort', name: 'Insertion Sort', component: InsertionSort },
    { id: 'merge-sort', name: 'Merge Sort', component: MergeSort },
    { id: 'quick-sort', name: 'Quick Sort', component: QuickSort },
    { id: 'binary-search', name: 'Binary Search', component: BinarySearch },
    { id: 'stack', name: 'Stack', component: Stack }
  ];

  const ActiveComponent = algorithms.find(alg => alg.id === activeAlgorithm)?.component;

  return (
    <div className="app">
      <header className="header">
        <div className="header-graphics">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <div className="binary-tree">
                <div className="node root"></div>
                <div className="node left"></div>
                <div className="node right"></div>
                <div className="connection c1"></div>
                <div className="connection c2"></div>
              </div>
            </div>
          </div>
          <h1>DSA Visualizer</h1>
          <p>Interactive Data Structures and Algorithms</p>
        </div>
      </header>

      <div className="page-nav">
        <button 
          className={`page-btn ${currentPage === 'visualizer' ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'SET_PAGE', payload: 'visualizer' })}
        >
          Visualizer
        </button>
        <button 
          className={`page-btn ${currentPage === 'learn' ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'SET_PAGE', payload: 'learn' })}
        >
          Learn
        </button>
      </div>

      {currentPage === 'visualizer' && (
        <nav className="nav">
        <div className="dropdown">
          <button className="dropdown-btn">
            {algorithms.find(alg => alg.id === activeAlgorithm)?.name}
            <span className="dropdown-arrow">▼</span>
          </button>
          <div className="dropdown-content">
            {algorithms.map(alg => (
              <button
                key={alg.id}
                className={`dropdown-item ${activeAlgorithm === alg.id ? 'active' : ''}`}
                onClick={() => dispatch({ type: 'SET_ALGORITHM', payload: alg.id })}
              >
                {alg.name}
              </button>
            ))}
          </div>
        </div>
        </nav>
      )}

      <main className="main">
        {currentPage === 'visualizer' && ActiveComponent && <ActiveComponent />}
        {currentPage === 'learn' && <LearnPage />}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DSA Visualizer</h3>
            <p>Learn algorithms through interactive visualizations</p>
          </div>
          <div className="footer-section">
            <h4>Algorithms</h4>
            <ul>
              <li>Sorting Algorithms</li>
              <li>Search Algorithms</li>
              <li>Data Structures</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 DSA Visualizer. Built with React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;