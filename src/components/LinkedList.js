import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';

const LinkedList = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [insertIndex, setInsertIndex] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const insertAtHead = () => {
    if (inputValue.trim()) {
      setList([inputValue.trim(), ...list]);
      setInputValue('');
    }
  };

  const insertAtTail = () => {
    if (inputValue.trim()) {
      setList([...list, inputValue.trim()]);
      setInputValue('');
    }
  };

  const insertAtIndex = () => {
    if (inputValue.trim() && insertIndex >= 0 && insertIndex <= list.length) {
      const newList = [...list];
      newList.splice(insertIndex, 0, inputValue.trim());
      setList(newList);
      setInputValue('');
    }
  };

  const deleteAtIndex = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const clear = () => {
    setList([]);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithm-header">
        <h2>Linked List Data Structure</h2>
        <p>Insert: O(1) at head, O(n) at position | Delete: O(1) with reference | Space: O(n)</p>
      </div>

      <div className="controls">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          onKeyPress={(e) => e.key === 'Enter' && insertAtTail()}
          className="list-input"
        />
        <button onClick={insertAtHead}>Insert at Head</button>
        <button onClick={insertAtTail}>Insert at Tail</button>
        <div className="index-controls">
          <input
            type="number"
            value={insertIndex}
            onChange={(e) => setInsertIndex(Math.max(0, Math.min(list.length, parseInt(e.target.value) || 0)))}
            min="0"
            max={list.length}
            className="index-input"
            placeholder="Index"
          />
          <button onClick={insertAtIndex}>Insert at Index</button>
        </div>
        <button onClick={clear} disabled={list.length === 0}>Clear</button>
        <button onClick={() => setShowCode(!showCode)} className="code-btn">
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className="visualization">
        <div className="linkedlist-container">
          <div className="list-info">
            <h3>Linked List Operations</h3>
            <p><strong>Length:</strong> {list.length}</p>
            <p><strong>Head:</strong> {list.length > 0 ? list[0] : 'null'}</p>
            <p><strong>Tail:</strong> {list.length > 0 ? list[list.length - 1] : 'null'}</p>
          </div>
          <div className="list-visual">
            {list.length === 0 ? (
              <div className="empty-list">
                <div className="null-node">HEAD → null</div>
              </div>
            ) : (
              <div className="nodes-container">
                <span className="head-label">HEAD →</span>
                {list.map((item, index) => (
                  <div key={index} className="node-group">
                    <div className="node">
                      <div className="node-data">{item}</div>
                      <div className="node-pointer">→</div>
                      <button 
                        className="delete-btn"
                        onClick={() => deleteAtIndex(index)}
                        title="Delete node"
                      >
                        ×
                      </button>
                    </div>
                    {index < list.length - 1 && <div className="connection-line"></div>}
                  </div>
                ))}
                <div className="null-node">null</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showCode && <CodeDisplay algorithm="linkedList" />}
    </div>
  );
};

export default LinkedList;