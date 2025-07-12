import React, { useState } from 'react';

const NumberInput = ({ onArrayChange, disabled, currentArray }) => {
  const [inputValue, setInputValue] = useState('');
  const [arraySize, setArraySize] = useState(8);

  const presetArrays = [
    { name: 'Random Small', array: [64, 34, 25, 12, 22, 11, 90] },
    { name: 'Random Medium', array: [170, 45, 75, 90, 2, 802, 24, 66, 15, 3] },
    { name: 'Nearly Sorted', array: [1, 2, 4, 3, 5, 6, 8, 7, 9, 10] },
    { name: 'Reverse Sorted', array: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10] },
    { name: 'All Same', array: [5, 5, 5, 5, 5, 5, 5] },
    { name: 'Large Numbers', array: [1000, 500, 750, 250, 900, 100, 800] }
  ];

  const handleCustomInput = () => {
    try {
      const numbers = inputValue
        .split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num) && num >= 0 && num <= 999);
      
      if (numbers.length > 0 && numbers.length <= 15) {
        onArrayChange(numbers);
        setInputValue('');
      } else {
        alert('Please enter 1-15 valid numbers (0-999) separated by commas');
      }
    } catch (error) {
      alert('Invalid input format. Use comma-separated numbers.');
    }
  };

  const generateRandomArray = () => {
    const size = Math.min(Math.max(arraySize, 3), 15);
    const randomArray = Array.from({ length: size }, () => 
      Math.floor(Math.random() * 900) + 10
    );
    onArrayChange(randomArray);
  };

  const handlePresetSelect = (preset) => {
    onArrayChange(preset.array);
  };

  return (
    <div className="number-input-container">
      <div className="input-section">
        <div className="custom-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter numbers: 64, 34, 25, 12..."
            disabled={disabled}
            className="array-input"
          />
          <button 
            onClick={handleCustomInput} 
            disabled={disabled || !inputValue.trim()}
            className="apply-btn"
          >
            Apply
          </button>
        </div>
        
        <div className="random-generator">
          <div className="size-control">
            <label>Size:</label>
            <input
              type="range"
              min="3"
              max="15"
              value={arraySize}
              onChange={(e) => setArraySize(parseInt(e.target.value))}
              disabled={disabled}
              className="size-slider"
            />
            <span className="size-value">{arraySize}</span>
          </div>
          <button 
            onClick={generateRandomArray} 
            disabled={disabled}
            className="random-btn"
          >
            🎲 Random Array
          </button>
        </div>
      </div>

      <div className="preset-section">
        <h4>Quick Presets:</h4>
        <div className="preset-buttons">
          {presetArrays.map((preset, index) => (
            <button
              key={index}
              onClick={() => handlePresetSelect(preset)}
              disabled={disabled}
              className="preset-btn"
              title={`[${preset.array.join(', ')}]`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="current-array">
        <h4>Current Array:</h4>
        <div className="array-preview">
          {currentArray.map((num, index) => (
            <span key={index} className="array-item">
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberInput;