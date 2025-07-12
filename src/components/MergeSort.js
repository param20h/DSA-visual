import React, { useState } from 'react';
import { AnimationEngine } from '../utils/AnimationEngine';
import CodeDisplay from './CodeDisplay';
import NumberInput from './NumberInput';

const MergeSort = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90, 88]);
  const [sorting, setSorting] = useState(false);
  const [leftSection, setLeftSection] = useState([]);
  const [rightSection, setRightSection] = useState([]);
  const [merging, setMerging] = useState([]);
  const [showCode, setShowCode] = useState(false);

  const animationEngine = new AnimationEngine(800);

  const mergeSortVisualization = async (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return arr;
    
    const mid = Math.floor((start + end) / 2);
    
    // Highlight current section being divided
    const currentSection = [];
    for (let i = start; i <= end; i++) {
      currentSection.push(i);
    }
    setMerging(currentSection);
    await animationEngine.delay(600);
    
    // Highlight left and right sections
    const left = [];
    const right = [];
    for (let i = start; i <= mid; i++) left.push(i);
    for (let i = mid + 1; i <= end; i++) right.push(i);
    
    setLeftSection(left);
    setRightSection(right);
    await animationEngine.delay(800);
    
    // Recursively sort left and right halves
    await mergeSortVisualization(arr, start, mid);
    await mergeSortVisualization(arr, mid + 1, end);
    
    // Merge the sorted halves
    await merge(arr, start, mid, end);
    
    setLeftSection([]);
    setRightSection([]);
    setMerging([]);
  };

  const merge = async (arr, start, mid, end) => {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);
    
    let i = 0, j = 0, k = start;
    
    setMerging([]);
    for (let idx = start; idx <= end; idx++) {
      setMerging(prev => [...prev, idx]);
    }
    await animationEngine.delay(400);
    
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
      setArray([...arr]);
      await animationEngine.delay(400);
    }
    
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
      setArray([...arr]);
      await animationEngine.delay(300);
    }
    
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
      setArray([...arr]);
      await animationEngine.delay(300);
    }
  };

  const handleSort = async () => {
    if (!sorting) {
      setSorting(true);
      const newArr = [...array];
      await mergeSortVisualization(newArr);
      setSorting(false);
    }
  };

  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90, 88]);
    setLeftSection([]);
    setRightSection([]);
    setMerging([]);
  };

  const handleArrayChange = (newArray) => {
    setArray(newArray);
    setLeftSection([]);
    setRightSection([]);
    setMerging([]);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Merge Sort Visualization</h2>
        <p>Time Complexity: O(n log n) | Space Complexity: O(n) | Stable: Yes</p>
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
                leftSection.includes(index) ? 'left-section' : ''
              } ${rightSection.includes(index) ? 'right-section' : ''} ${
                merging.includes(index) ? 'merging' : ''
              }`}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="algorithm-info">
          <p><strong>Merge Sort:</strong> Divide and conquer - split array and merge sorted halves</p>
          <div className="legend">
            <span className="legend-item left">Left Half</span>
            <span className="legend-item right">Right Half</span>
            <span className="legend-item merge">Merging</span>
          </div>
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="mergeSort" />}
    </div>
  );
};

export default MergeSort;