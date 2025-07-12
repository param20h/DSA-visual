import React, { useState, useEffect } from 'react';

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
                comparing.includes(index) ? 'comparing' : ''
              } ${swapping.includes(index) ? 'swapping' : ''}`}

            >
              {value}
            </div>
          ))}
        </div>
      </div>

      {showCode && (
        <div className="code-section">
          <h3>Bubble Sort Algorithm</h3>
          <pre>
{`function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
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

export default BubbleSort;