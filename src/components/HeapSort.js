import React, { useState, useEffect } from 'react';
import CodeDisplay from './CodeDisplay';
import NumberInput from './NumberInput';

const HeapSort = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState('');
  const [heapArray, setHeapArray] = useState([]);
  const [comparing, setComparing] = useState([]);
  const [showCode, setShowCode] = useState(false);

  const heapify = async (arr, n, i, setArr, setComparing, setStep) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    setStep(`Heapifying at index ${i}`);
    setComparing([i]);
    await new Promise(resolve => setTimeout(resolve, 800));

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      setComparing([i, largest]);
      setStep(`Swapping ${arr[i]} and ${arr[largest]}`);
      await new Promise(resolve => setTimeout(resolve, 800));

      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setArr([...arr]);
      await new Promise(resolve => setTimeout(resolve, 500));

      await heapify(arr, n, largest, setArr, setComparing, setStep);
    }
  };

  const buildMaxHeap = async (arr, setArr, setComparing, setStep) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i, setArr, setComparing, setStep);
    }
  };

  const heapSort = async () => {
    setIsAnimating(true);
    const arr = [...array];
    const n = arr.length;

    setCurrentStep('Building max heap...');
    await buildMaxHeap(arr, setHeapArray, setComparing, setCurrentStep);

    for (let i = n - 1; i > 0; i--) {
      setCurrentStep(`Moving max element ${arr[0]} to position ${i}`);
      setComparing([0, i]);
      await new Promise(resolve => setTimeout(resolve, 800));

      [arr[0], arr[i]] = [arr[i], arr[0]];
      setHeapArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 500));

      await heapify(arr, i, 0, setHeapArray, setComparing, setCurrentStep);
    }

    setCurrentStep('Heap Sort Complete!');
    setComparing([]);
    setIsAnimating(false);
  };

  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
    setHeapArray([]);
    setComparing([]);
    setCurrentStep('');
  };

  const handleArrayChange = (newArray) => {
    setArray(newArray);
    setHeapArray([]);
    setComparing([]);
    setCurrentStep('');
  };

  const displayArray = heapArray.length > 0 ? heapArray : array;

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Heap Sort Visualization</h2>
        <p>Time Complexity: O(n log n) | Space Complexity: O(1) | Stable: No</p>
      </div>

      <NumberInput 
        onArrayChange={handleArrayChange}
        disabled={isAnimating}
        currentArray={array}
      />

      <div className="controls">
        <button onClick={heapSort} disabled={isAnimating}>
          {isAnimating ? 'Sorting...' : 'Start Heap Sort'}
        </button>
        <button onClick={resetArray} disabled={isAnimating}>
          Reset
        </button>
        <button onClick={() => setShowCode(!showCode)} className="code-btn">
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className="step-info">
        <p>{currentStep}</p>
      </div>

      <div className="array-container">
        {displayArray.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${comparing.includes(index) ? 'comparing' : ''}`}
            style={{
              height: `${value * 3}px`,
              backgroundColor: comparing.includes(index) ? '#ff6b6b' : '#4ecdc4'
            }}
          >
            <span className="array-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="heap-tree">
        <h3>Heap Structure</h3>
        <div className="tree-visualization">
          {displayArray.map((value, index) => (
            <div
              key={index}
              className={`heap-node level-${Math.floor(Math.log2(index + 1))}`}
              style={{
                backgroundColor: comparing.includes(index) ? '#ff6b6b' : '#74b9ff'
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="heapSort" />}
    </div>
  );
};

export default HeapSort;