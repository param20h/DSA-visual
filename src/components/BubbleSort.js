import React, { useState, useEffect } from 'react';
import CodeDisplay from './CodeDisplay';
import NumberInput from './NumberInput';

const BubbleSort = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [sorting, setSorting] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [swapping, setSwapping] = useState([]);
  const [showCode, setShowCode] = useState(false);

  const bubbleSortVisualization = async (arr) => {
    setSorting(true);
    const newArr = [...arr];
    
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = 0; j < newArr.length - i - 1; j++) {
        setComparing([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (newArr[j] > newArr[j + 1]) {
          setSwapping([j, j + 1]);
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
          setArray([...newArr]);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        setSwapping([]);
      }
    }
    setComparing([]);
    setSorting(false);
  };

  const handleSort = () => {
    if (!sorting) {
      bubbleSortVisualization(array);
    }
  };

  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
    setComparing([]);
    setSwapping([]);
  };

  const handleArrayChange = (newArray) => {
    setArray(newArray);
    setComparing([]);
    setSwapping([]);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Bubble Sort Visualization</h2>
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
                comparing.includes(index) ? 'comparing' : ''
              } ${swapping.includes(index) ? 'swapping' : ''}`}

            >
              {value}
            </div>
          ))}
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="bubbleSort" />}
    </div>
  );
};

export default BubbleSort;