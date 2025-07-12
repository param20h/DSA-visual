import React, { useState } from 'react';

const BinarySearch = () => {
  const [array] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
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

  return (
    <div className="algorithm-container">
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
        <div className="search-info">
          {left !== -1 && <p>Left: {left}, Right: {right}</p>}
          {mid !== -1 && <p>Mid: {mid} (value: {array[mid]})</p>}
          {found !== -1 && <p>Found at index: {found}</p>}
        </div>
      </div>

      {showCode && (
        <div className="code-section">
          <h3>Binary Search Algorithm</h3>
          <pre>
{`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`}
          </pre>
        </div>
      )}
    </div>
  );
};

export default BinarySearch;