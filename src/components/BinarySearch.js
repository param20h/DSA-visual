import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';
import NumberInput from './NumberInput';

const BinarySearch = () => {
  const [array, setArray] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
  const [target, setTarget] = useState(7);
  const [searching, setSearching] = useState(false);
  const [left, setLeft] = useState(-1);
  const [right, setRight] = useState(-1);
  const [mid, setMid] = useState(-1);
  const [found, setFound] = useState(-1);
  const [showCode, setShowCode] = useState(false);

  const binarySearchVisualization = async (arr, target) => {
    setSearching(true);
    setFound(-1);
    let l = 0, r = arr.length - 1;
    
    while (l <= r) {
      setLeft(l);
      setRight(r);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const m = Math.floor((l + r) / 2);
      setMid(m);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (arr[m] === target) {
        setFound(m);
        break;
      }
      
      if (arr[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    
    setSearching(false);
    if (found === -1 && l > r) {
      setLeft(-1);
      setRight(-1);
      setMid(-1);
    }
  };

  const handleSearch = () => {
    if (!searching) {
      binarySearchVisualization(array, parseInt(target));
    }
  };

  const reset = () => {
    setLeft(-1);
    setRight(-1);
    setMid(-1);
    setFound(-1);
  };

  const handleArrayChange = (newArray) => {
    // Sort the array for binary search
    const sortedArray = [...newArray].sort((a, b) => a - b);
    setArray(sortedArray);
    reset();
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Binary Search Visualization</h2>
        <p>Time Complexity: O(log n) | Space Complexity: O(1) | Requires: Sorted Array</p>
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
                index === left || index === right ? 'range' : ''
              } ${index === mid ? 'mid' : ''} ${
                index === found ? 'found' : ''
              }`}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="algorithm-info">
          <p><strong>Binary Search:</strong> Efficiently search sorted arrays by dividing search space</p>
          {left !== -1 && <p>Search Range: Left={left}, Right={right}</p>}
          {mid !== -1 && <p>Mid: {mid} (value: {array[mid]})</p>}
          {found !== -1 && <p>✓ Found target {target} at index: {found}</p>}
          {searching === false && found === -1 && left > right && <p>✗ Target {target} not found in array</p>}
          <div className="legend">
            <span className="legend-item range">Search Range</span>
            <span className="legend-item mid">Mid Point</span>
            <span className="legend-item found">Found</span>
          </div>
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="binarySearch" />}
    </div>
  );
};

export default BinarySearch;