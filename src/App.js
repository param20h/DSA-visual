import React from 'react';
import BubbleSort from './components/BubbleSort';
import SelectionSort from './components/SelectionSort';
import InsertionSort from './components/InsertionSort';
import MergeSort from './components/MergeSort';
import QuickSort from './components/QuickSort';
import HeapSort from './components/HeapSort';
import RadixSort from './components/RadixSort';
import BinarySearch from './components/BinarySearch';
import Stack from './components/Stack';
import LearnPage from './components/LearnPage';
import { useApp } from './context/AppContext';
import { getImplementedAlgorithms } from './utils/AlgorithmRegistry';
import './App.css';

function App() {
  const { state, dispatch } = useApp();
  const { activeAlgorithm, currentPage } = state;

  // Handle navigation from Learn page to Visualizer
  React.useEffect(() => {
    const handleNavigateToAlgorithm = (event) => {
      const algorithmId = event.detail;
      dispatch({ type: 'SET_ALGORITHM', payload: algorithmId });
      dispatch({ type: 'SET_PAGE', payload: 'visualizer' });
    };

    window.addEventListener('navigateToAlgorithm', handleNavigateToAlgorithm);
    return () => {
      window.removeEventListener('navigateToAlgorithm', handleNavigateToAlgorithm);
    };
  }, [dispatch]);

  const algorithms = [
    { id: 'bubble-sort', name: 'Bubble Sort', component: BubbleSort },
    { id: 'selection-sort', name: 'Selection Sort', component: SelectionSort },
    { id: 'insertion-sort', name: 'Insertion Sort', component: InsertionSort },
    { id: 'merge-sort', name: 'Merge Sort', component: MergeSort },
    { id: 'quick-sort', name: 'Quick Sort', component: QuickSort },
    { id: 'heap-sort', name: 'Heap Sort', component: HeapSort },
    { id: 'radix-sort', name: 'Radix Sort', component: RadixSort },
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
          <div className="header-top">
            <div className="header-github">
              <a 
                href="https://github.com/param20h/DSA-visual" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-github-link"
              >
                🐈 GitHub
              </a>
              <a 
                href="https://github.com/param20h/DSA-visual/stargazers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-star-link"
              >
                ⭐ Star
              </a>
            </div>
          </div>
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
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">9+</span>
              <span className="stat-label">Algorithms</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Interactive</span>
            </div>
          </div>
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
            <h3>DSA Visualizer 🚀</h3>
            <p>Learn algorithms through interactive visualizations</p>
            <div className="github-links">
              <a 
                href="https://github.com/param20h/DSA-visual" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                🐈 View on GitHub
              </a>
              <a 
                href="https://github.com/param20h/DSA-visual/stargazers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="star-link"
              >
                ⭐ Star this Repository
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Algorithms</h4>
            <ul>
              <li onClick={() => {
                dispatch({ type: 'SET_PAGE', payload: 'learn' });
                setTimeout(() => {
                  const event = new CustomEvent('selectTopic', { detail: 'sorting' });
                  window.dispatchEvent(event);
                }, 100);
              }}>Sorting Algorithms</li>
              <li onClick={() => {
                dispatch({ type: 'SET_PAGE', payload: 'learn' });
                setTimeout(() => {
                  const event = new CustomEvent('selectTopic', { detail: 'searching' });
                  window.dispatchEvent(event);
                }, 100);
              }}>Search Algorithms</li>
              <li onClick={() => {
                dispatch({ type: 'SET_PAGE', payload: 'learn' });
                setTimeout(() => {
                  const event = new CustomEvent('selectTopic', { detail: 'dataStructures' });
                  window.dispatchEvent(event);
                }, 100);
              }}>Data Structures</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Access</h4>
            <ul>
              <li onClick={() => dispatch({ type: 'SET_PAGE', payload: 'visualizer' })}>Visualizer</li>
              <li onClick={() => dispatch({ type: 'SET_PAGE', payload: 'learn' })}>Learn</li>
              <li onClick={() => {
                dispatch({ type: 'SET_PAGE', payload: 'learn' });
                setTimeout(() => {
                  const event = new CustomEvent('selectTopic', { detail: 'complexity' });
                  window.dispatchEvent(event);
                }, 100);
              }}>Complexity Analysis</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Popular Algorithms</h4>
            <ul>
              <li onClick={() => {
                dispatch({ type: 'SET_ALGORITHM', payload: 'quick-sort' });
                dispatch({ type: 'SET_PAGE', payload: 'visualizer' });
              }}>Quick Sort</li>
              <li onClick={() => {
                dispatch({ type: 'SET_ALGORITHM', payload: 'binary-search' });
                dispatch({ type: 'SET_PAGE', payload: 'visualizer' });
              }}>Binary Search</li>
              <li onClick={() => {
                dispatch({ type: 'SET_ALGORITHM', payload: 'merge-sort' });
                dispatch({ type: 'SET_PAGE', payload: 'visualizer' });
              }}>Merge Sort</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 DSA Visualizer. Built with React ❤️</p>
          <div className="footer-links">
            <a 
              href="https://github.com/param20h" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Made by @param20h
            </a>
            <span className="separator">|</span>
            <a 
              href="https://github.com/param20h/DSA-visual/issues" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Report Issues
            </a>
            <span className="separator">|</span>
            <a 
              href="https://github.com/param20h/DSA-visual/blob/main/README.md" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;