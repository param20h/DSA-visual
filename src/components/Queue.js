import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showCode, setShowCode] = useState(false);

  const enqueue = () => {
    if (inputValue.trim()) {
      setQueue([...queue, inputValue.trim()]);
      setInputValue('');
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    }
  };

  const clear = () => {
    setQueue([]);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Queue Data Structure</h2>
        <p>FIFO (First In, First Out) | Enqueue/Dequeue: O(1) | Space: O(n)</p>
      </div>

      <div className="controls">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          onKeyPress={(e) => e.key === 'Enter' && enqueue()}
          className="queue-input"
        />
        <button onClick={enqueue}>Enqueue</button>
        <button onClick={dequeue} disabled={queue.length === 0}>Dequeue</button>
        <button onClick={clear} disabled={queue.length === 0}>Clear</button>
        <button onClick={() => setShowCode(!showCode)} className="code-btn">
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className="visualization">
        <div className="queue-container">
          <div className="queue-info">
            <h3>Queue Operations</h3>
            <p><strong>Size:</strong> {queue.length}</p>
            <p><strong>Front:</strong> {queue.length > 0 ? queue[0] : 'Empty'}</p>
            <p><strong>Rear:</strong> {queue.length > 0 ? queue[queue.length - 1] : 'Empty'}</p>
            <div className="operations-info">
              <p>📥 <strong>Enqueue:</strong> Add element to rear</p>
              <p>📤 <strong>Dequeue:</strong> Remove element from front</p>
              <p>👁️ <strong>Front:</strong> View front element</p>
            </div>
          </div>
          <div className="queue-visual">
            <div className="queue-label front">FRONT</div>
            {queue.length === 0 ? (
              <div className="empty-queue">
                <div className="empty-message">
                  📦 Queue is empty
                  <br />
                  <small>Add elements using Enqueue</small>
                </div>
              </div>
            ) : (
              <div className="queue-items">
                {queue.map((item, index) => (
                  <div
                    key={index}
                    className={`queue-item ${index === 0 ? 'front-item' : ''} ${index === queue.length - 1 ? 'rear-item' : ''}`}
                  >
                    <span className="item-value">{item}</span>
                    {index === 0 && queue.length > 1 && <span className="position-indicator front-indicator">← FRONT</span>}
                    {index === queue.length - 1 && queue.length > 1 && <span className="position-indicator rear-indicator">REAR →</span>}
                  </div>
                ))}
              </div>
            )}
            <div className="queue-label rear">REAR</div>
          </div>
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="queue" />}
    </div>
  );
};

export default Queue;