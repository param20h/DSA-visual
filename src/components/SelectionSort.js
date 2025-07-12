import React, { useState } from 'react';
import { AnimationEngine } from '../utils/AnimationEngine';

const SelectionSort = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [sorting, setSorting] = useState(false);
  const [currentMin, setCurrentMin] = useState(-1);
  const [comparing, setComparing] = useState(-1);
  const [sorted, setSorted] = useState([]);
  const [showCode, setShowCode] = useState(false);

  const animationEngine = new AnimationEngine(600);

  const selectionSortVisualization = async (arr) => {
    setSorting(true);
    const newArr = [...arr];
    const newSorted = [];
    
    for (let i = 0; i < newArr.length - 1; i++) {
      let minIdx = i;
      setCurrentMin(i);
      await animationEngine.delay(400);
      
      for (let j = i + 1; j < newArr.length; j++) {
        setComparing(j);
        await animationEngine.delay(300);
        
        if (newArr[j] < newArr[minIdx]) {
          minIdx = j;
          setCurrentMin(minIdx);
          await animationEngine.delay(300);
        }
      }
      
      if (minIdx !== i) {
        [newArr[i], newArr[minIdx]] = [newArr[minIdx], newArr[i]];
        setArray([...newArr]);
        await animationEngine.delay(500);
      }
      
      newSorted.push(i);
      setSorted([...newSorted]);
      setCurrentMin(-1);
      setComparing(-1);
      await animationEngine.delay(200);
    }
    
    newSorted.push(newArr.length - 1);
    setSorted([...newSorted]);
    setSorting(false);
  };

  const handleSort = () => {
    if (!sorting) {
      selectionSortVisualization(array);
    }
  };

  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
    setCurrentMin(-1);
    setComparing(-1);
    setSorted([]);
  };

  return (
    <div className="algorithm-container">
      <div className="controls">
        <button onClick={handleSort} disabled={sorting}>
          {sorting ? 'Sorting...' : 'Start Sort'}
        </button>
        <button onClick={resetArray} disabled={sorting}>Reset</button>
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
                sorted.includes(index) ? 'sorted' : ''
              } ${currentMin === index ? 'current-min' : ''} ${
                comparing === index ? 'comparing' : ''
              }`}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="algorithm-info">
          <p><strong>Selection Sort:</strong> Find minimum element and place at beginning</p>
          {currentMin !== -1 && <p>Current minimum at index: {currentMin}</p>}
          {comparing !== -1 && <p>Comparing with index: {comparing}</p>}
        </div>
      </div>

      {showCode && (
        <div className="code-section">
          <h3>Selection Sort Algorithm</h3>
          <pre>
{`function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}`}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SelectionSort;