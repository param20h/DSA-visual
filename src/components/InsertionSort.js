import React, { useState } from 'react';
import { AnimationEngine } from '../utils/AnimationEngine';
import CodeDisplay from './CodeDisplay';
import NumberInput from './NumberInput';

const InsertionSort = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [sorting, setSorting] = useState(false);
  const [currentKey, setCurrentKey] = useState(-1);
  const [comparing, setComparing] = useState(-1);
  const [sorted, setSorted] = useState([0]);
  const [showCode, setShowCode] = useState(false);

  const animationEngine = new AnimationEngine(500);

  const insertionSortVisualization = async (arr) => {
    setSorting(true);
    const newArr = [...arr];
    const newSorted = [0];
    
    for (let i = 1; i < newArr.length; i++) {
      const key = newArr[i];
      setCurrentKey(i);
      await animationEngine.delay(400);
      
      let j = i - 1;
      
      while (j >= 0) {
        setComparing(j);
        await animationEngine.delay(300);
        
        if (newArr[j] <= key) break;
        
        newArr[j + 1] = newArr[j];
        setArray([...newArr]);
        await animationEngine.delay(300);
        j--;
      }
      
      newArr[j + 1] = key;
      setArray([...newArr]);
      
      newSorted.push(i);
      setSorted([...newSorted]);
      setCurrentKey(-1);
      setComparing(-1);
      await animationEngine.delay(200);
    }
    
    setSorting(false);
  };

  const handleSort = () => {
    if (!sorting) {
      insertionSortVisualization(array);
    }
  };

  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
    setCurrentKey(-1);
    setComparing(-1);
    setSorted([0]);
  };

  const handleArrayChange = (newArray) => {
    setArray(newArray);
    setCurrentKey(-1);
    setComparing(-1);
    setSorted([0]);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Insertion Sort Visualization</h2>
        <p>Time Complexity: O(n²) | Space Complexity: O(1) | Stable: Yes</p>
      </div>

      <NumberInput 
        onArrayChange={handleArrayChange}
        disabled={sorting}
        currentArray={array}
      />

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
              } ${currentKey === index ? 'current-key' : ''} ${
                comparing === index ? 'comparing' : ''
              }`}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="algorithm-info">
          <p><strong>Insertion Sort:</strong> Build sorted array one element at a time</p>
          {currentKey !== -1 && <p>Inserting key: {array[currentKey]} from index {currentKey}</p>}
          {comparing !== -1 && <p>Comparing with index: {comparing}</p>}
          <div className="legend">
            <span className="legend-item sorted">Sorted</span>
            <span className="legend-item current-key">Current Key</span>
            <span className="legend-item comparing-legend">Comparing</span>
          </div>
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="insertionSort" />}
    </div>
  );
};

export default InsertionSort;