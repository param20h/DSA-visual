import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';
import NumberInput from './NumberInput';

const LinearSearch = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [target, setTarget] = useState(22);
  const [searching, setSearching] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [found, setFound] = useState(-1);
  const [showCode, setShowCode] = useState(false);

  const linearSearchVisualization = async (arr, target) => {
    setSearching(true);
    setFound(-1);
    
    for (let i = 0; i < arr.length; i++) {
      setCurrentIndex(i);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (arr[i] === target) {
        setFound(i);
        break;
      }
    }
    
    setSearching(false);
    if (found === -1 && currentIndex === arr.length - 1) {
      setCurrentIndex(-1);
    }
  };

  const handleSearch = () => {
    if (!searching) {
      linearSearchVisualization(array, parseInt(target));
    }
  };

  const reset = () => {
    setCurrentIndex(-1);
    setFound(-1);
  };

  const handleArrayChange = (newArray) => {
    setArray(newArray);
    reset();
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Linear Search Visualization</h2>
        <p>Time Complexity: O(n) | Space Complexity: O(1) | Works on: Any Array</p>
      </div>

      <NumberInput 
        onArrayChange={handleArrayChange}
        disabled={searching}
        currentArray={array}
      />

      <div className="controls">
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Target value"
          disabled={searching}
          className="target-input"
        />
        <button onClick={handleSearch} disabled={searching}>
          {searching ? 'Searching...' : 'Search'}
        </button>
        <button onClick={reset} disabled={searching}>Reset</button>
        <button onClick={() => setShowCode(!showCode)} className="code-btn">
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className="visualization">
        <div className="array-container">
          {array.map((value, index) => (
            <div
              key={index}
              className={`array-bar ${
                index === currentIndex ? 'comparing' : ''
              } ${index === found ? 'found' : ''}`}
            >
              <span className="array-value">{value}</span>
            </div>
          ))}
        </div>
        <div className="algorithm-info">
          <p><strong>Linear Search:</strong> Check each element sequentially until target is found</p>
          {currentIndex !== -1 && <p>Checking index: {currentIndex} (value: {array[currentIndex]})</p>}
          {found !== -1 && <p>✓ Found target {target} at index: {found}</p>}
          {searching === false && found === -1 && currentIndex === -1 && <p>✗ Target {target} not found in array</p>}
          <div className="legend">
            <span className="legend-item comparing-legend">Checking</span>
            <span className="legend-item found">Found</span>
          </div>
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="linearSearch" />}
    </div>
  );
};

export default LinearSearch;