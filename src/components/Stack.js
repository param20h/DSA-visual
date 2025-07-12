import React, { useState } from 'react';

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
            <p>Size: {stack.length}</p>
            <p>Top: {stack.length > 0 ? stack[stack.length - 1] : 'Empty'}</p>
          </div>
          <div className="stack-visual">
            {stack.length === 0 ? (
              <div className="empty-stack">Stack is empty</div>
            ) : (
              stack.slice().reverse().map((item, index) => (
                <div
                  key={stack.length - 1 - index}
                  className={`stack-item ${index === 0 ? 'top' : ''}`}
                >
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {showCode && (
        <div className="code-section">
          <h3>Stack Data Structure</h3>
          <pre>
{`class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}`}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Stack;