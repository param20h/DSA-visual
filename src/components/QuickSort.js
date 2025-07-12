import React, { useState } from 'react';
import { AnimationEngine } from '../utils/AnimationEngine';
import CodeDisplay from './CodeDisplay';
import NumberInput from './NumberInput';

const QuickSort = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [sorting, setSorting] = useState(false);
  const [pivot, setPivot] = useState(-1);
  const [comparing, setComparing] = useState([]);
  const [partitioned, setPartitioned] = useState([]);
  const [showCode, setShowCode] = useState(false);

  const animationEngine = new AnimationEngine(700);

  const quickSortVisualization = async (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
      // Highlight current section
      const currentSection = [];
      for (let i = low; i <= high; i++) {
        currentSection.push(i);
      }
      setPartitioned(currentSection);
      await animationEngine.delay(500);
      
      const pivotIndex = await partition(arr, low, high);
      
      // Mark pivot as partitioned
      setPartitioned(prev => [...prev, pivotIndex]);
      await animationEngine.delay(300);
      
      await quickSortVisualization(arr, low, pivotIndex - 1);
      await quickSortVisualization(arr, pivotIndex + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    const pivotValue = arr[high];
    setPivot(high);
    await animationEngine.delay(400);
    
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      setComparing([j, high]);
      await animationEngine.delay(400);
      
      if (arr[j] < pivotValue) {
        i++;
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await animationEngine.delay(500);
        }
      }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await animationEngine.delay(500);
    
    setPivot(-1);
    setComparing([]);
    
    return i + 1;
  };

  const handleSort = async () => {
    if (!sorting) {
      setSorting(true);
      const newArr = [...array];
      await quickSortVisualization(newArr);
      setPartitioned([]);
      setSorting(false);
    }
  };

  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
    setPivot(-1);
    setComparing([]);
    setPartitioned([]);
  };

  const handleArrayChange = (newArray) => {
    setArray(newArray);
    setPivot(-1);
    setComparing([]);
    setPartitioned([]);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Quick Sort Visualization</h2>
        <p>Time Complexity: O(n log n) avg, O(n²) worst | Space Complexity: O(log n) | Stable: No</p>
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
                pivot === index ? 'pivot' : ''
              } ${comparing.includes(index) ? 'comparing' : ''} ${
                partitioned.includes(index) ? 'partitioned' : ''
              }`}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="algorithm-info">
          <p><strong>Quick Sort:</strong> Divide and conquer using pivot element</p>
          {pivot !== -1 && <p>Pivot: {array[pivot]} at index {pivot}</p>}
          <div className="legend">
            <span className="legend-item pivot-legend">Pivot</span>
            <span className="legend-item comparing-legend">Comparing</span>
            <span className="legend-item partitioned-legend">Current Section</span>
          </div>
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="quickSort" />}
    </div>
  );
};

export default QuickSort;