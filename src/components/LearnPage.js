import React, { useState } from 'react';

const LearnPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('sorting');

  const topics = {
    sorting: {
      title: 'Sorting Algorithms',
      content: {
        overview: 'Sorting algorithms arrange elements in a specific order (ascending or descending).',
        algorithms: [
          {
            name: 'Bubble Sort',
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            description: 'Compares adjacent elements and swaps them if they are in wrong order.',
            pros: ['Simple to understand', 'In-place sorting'],
            cons: ['Very slow for large datasets', 'Not efficient']
          },
          {
            name: 'Selection Sort',
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            description: 'Finds minimum element and places it at the beginning.',
            pros: ['Simple implementation', 'In-place sorting'],
            cons: ['Inefficient for large datasets', 'Not stable']
          },
          {
            name: 'Quick Sort',
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(log n)',
            description: 'Divide and conquer algorithm using pivot element.',
            pros: ['Very efficient', 'Widely used'],
            cons: ['Worst case O(n²)', 'Not stable']
          }
        ]
      }
    },
    searching: {
      title: 'Search Algorithms',
      content: {
        overview: 'Search algorithms find specific elements within data structures.',
        algorithms: [
          {
            name: 'Linear Search',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            description: 'Checks each element sequentially until target is found.',
            pros: ['Works on unsorted data', 'Simple implementation'],
            cons: ['Slow for large datasets']
          },
          {
            name: 'Binary Search',
            timeComplexity: 'O(log n)',
            spaceComplexity: 'O(1)',
            description: 'Divides sorted array in half repeatedly.',
            pros: ['Very efficient', 'Logarithmic time'],
            cons: ['Requires sorted data']
          }
        ]
      }
    },
    dataStructures: {
      title: 'Data Structures',
      content: {
        overview: 'Data structures organize and store data efficiently.',
        algorithms: [
          {
            name: 'Stack',
            timeComplexity: 'O(1)',
            spaceComplexity: 'O(n)',
            description: 'LIFO (Last In, First Out) data structure.',
            pros: ['Fast operations', 'Simple implementation'],
            cons: ['Limited access pattern']
          },
          {
            name: 'Queue',
            timeComplexity: 'O(1)',
            spaceComplexity: 'O(n)',
            description: 'FIFO (First In, First Out) data structure.',
            pros: ['Fair processing order', 'Efficient operations'],
            cons: ['Sequential access only']
          }
        ]
      }
    }
  };

  return (
    <div className="learn-page">
      <div className="learn-sidebar">
        <h3>Topics</h3>
        {Object.entries(topics).map(([key, topic]) => (
          <button
            key={key}
            className={`topic-btn ${selectedTopic === key ? 'active' : ''}`}
            onClick={() => setSelectedTopic(key)}
          >
            {topic.title}
          </button>
        ))}
      </div>

      <div className="learn-content">
        <h2>{topics[selectedTopic].title}</h2>
        <p className="overview">{topics[selectedTopic].content.overview}</p>
        
        <div className="algorithms-grid">
          {topics[selectedTopic].content.algorithms.map((alg, index) => (
            <div key={index} className="algorithm-card">
              <h3>{alg.name}</h3>
              <div className="complexity">
                <span>Time: {alg.timeComplexity}</span>
                <span>Space: {alg.spaceComplexity}</span>
              </div>
              <p>{alg.description}</p>
              <div className="pros-cons">
                <div className="pros">
                  <h4>Pros:</h4>
                  <ul>
                    {alg.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                  </ul>
                </div>
                <div className="cons">
                  <h4>Cons:</h4>
                  <ul>
                    {alg.cons.map((con, i) => <li key={i}>{con}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;