import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';
import NumberInput from './NumberInput';

const RadixSort = () => {
  const [array, setArray] = useState([170, 45, 75, 90, 2, 802, 24, 66]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState('');
  const [buckets, setBuckets] = useState([]);
  const [currentDigit, setCurrentDigit] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  const getMaxDigits = (nums) => {
    let maxDigits = 0;
    for (let num of nums) {
      maxDigits = Math.max(maxDigits, num.toString().length);
    }
    return maxDigits;
  };

  const radixSort = async () => {
    setIsAnimating(true);
    let arr = [...array];
    const maxDigits = getMaxDigits(arr);

    for (let k = 0; k < maxDigits; k++) {
      setCurrentDigit(k);
      setCurrentStep(`Sorting by digit position ${k + 1} (from right)`);
      
      // Create buckets
      const digitBuckets = Array.from({ length: 10 }, () => []);
      
      // Distribute numbers into buckets
      for (let num of arr) {
        const digit = getDigit(num, k);
        digitBuckets[digit].push(num);
      }
      
      setBuckets([...digitBuckets]);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Collect numbers from buckets
      arr = [];
      for (let bucket of digitBuckets) {
        arr.push(...bucket);
      }
      
      setArray([...arr]);
      setCurrentStep(`Collected from buckets: [${arr.join(', ')}]`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setCurrentStep('Radix Sort Complete!');
    setBuckets([]);
    setIsAnimating(false);
  };

  const resetArray = () => {
    setArray([170, 45, 75, 90, 2, 802, 24, 66]);
    setBuckets([]);
    setCurrentStep('');
    setCurrentDigit(0);
  };

  const handleArrayChange = (newArray) => {
    setArray(newArray);
    setBuckets([]);
    setCurrentStep('');
    setCurrentDigit(0);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Radix Sort Visualization</h2>
        <p>Time Complexity: O(d × n) | Space Complexity: O(n + k) | Stable: Yes</p>
      </div>

      <NumberInput 
        onArrayChange={handleArrayChange}
        disabled={isAnimating}
        currentArray={array}
      />

      <div className="controls">
        <button onClick={radixSort} disabled={isAnimating}>
          {isAnimating ? 'Sorting...' : 'Start Radix Sort'}
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
        {isAnimating && <p>Current digit position: {currentDigit + 1}</p>}
      </div>

      <div className="array-container">
        <h3>Current Array</h3>
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{
              height: `${Math.max(value / 4, 20)}px`,
              backgroundColor: '#4ecdc4'
            }}
          >
            <span className="array-value">{value}</span>
          </div>
        ))}
      </div>

      {buckets.length > 0 && (
        <div className="buckets-container">
          <h3>Digit Buckets (Digit Position {currentDigit + 1})</h3>
          <div className="buckets-grid">
            {buckets.map((bucket, index) => (
              <div key={index} className="bucket">
                <div className="bucket-header">Bucket {index}</div>
                <div className="bucket-content">
                  {bucket.map((num, numIndex) => (
                    <div key={numIndex} className="bucket-item">
                      <span className="number">{num}</span>
                      <span className="highlighted-digit">
                        {getDigit(num, currentDigit)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showCode && <CodeDisplay algorithm="radixSort" />}
    </div>
  );
};

export default RadixSort;