import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showCode, setShowCode] = useState(false);

  const push = () => {
    if (inputValue.trim()) {
      setStack([...stack, inputValue.trim()]);
      setInputValue('');
    }
  };

  const pop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1));
    }
  };

  const clear = () => {
    setStack([]);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Stack Data Structure</h2>
        <p>LIFO (Last In, First Out) | Push/Pop: O(1) | Space: O(n)</p>
      </div>

      <div className="controls">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          onKeyPress={(e) => e.key === 'Enter' && push()}
        />
        <button onClick={push}>Push</button>
        <button onClick={pop} disabled={stack.length === 0}>Pop</button>
        <button onClick={clear} disabled={stack.length === 0}>Clear</button>
        <button onClick={() => setShowCode(!showCode)} className="code-btn">
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className="visualization">
        <div className="stack-container">
          <div className="stack-info">
            <h3>Stack Operations</h3>
            <p><strong>Size:</strong> {stack.length}</p>
            <p><strong>Top Element:</strong> {stack.length > 0 ? stack[stack.length - 1] : 'Empty'}</p>
            <div className="operations-info">
              <p>🔼 <strong>Push:</strong> Add element to top</p>
              <p>🔽 <strong>Pop:</strong> Remove element from top</p>
              <p>👁️ <strong>Peek:</strong> View top element</p>
            </div>
          </div>
          <div className="stack-visual">
            <div className="stack-label">TOP</div>
            {stack.length === 0 ? (
              <div className="empty-stack">
                <div className="empty-message">
                  📦 Stack is empty
                  <br />
                  <small>Add elements using Push</small>
                </div>
              </div>
            ) : (
              stack.slice().reverse().map((item, index) => (
                <div
                  key={stack.length - 1 - index}
                  className={`stack-item ${index === 0 ? 'top' : ''}`}
                >
                  <span className="item-value">{item}</span>
                  {index === 0 && <span className="top-indicator">← TOP</span>}
                </div>
              ))
            )}
            <div className="stack-base">BOTTOM</div>
          </div>
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="stack" />}
    </div>
  );
};

export default Stack;