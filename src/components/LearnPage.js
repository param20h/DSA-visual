import React, { useState } from 'react';

const LearnPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('sorting');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  const navigateToVisualizer = (algorithmId) => {
    // This will be handled by the parent component
    if (window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('navigateToAlgorithm', { detail: algorithmId }));
    }
  };

  // Handle topic selection from footer
  React.useEffect(() => {
    const handleSelectTopic = (event) => {
      const topic = event.detail;
      setSelectedTopic(topic);
      setSelectedAlgorithm(null);
    };

    window.addEventListener('selectTopic', handleSelectTopic);
    return () => {
      window.removeEventListener('selectTopic', handleSelectTopic);
    };
  }, []);

  const topics = {
    sorting: {
      title: 'Sorting Algorithms',
      icon: '🔄',
      content: {
        overview: 'Sorting algorithms arrange elements in a specific order. They are fundamental to computer science and form the basis for many other algorithms.',
        keyPoints: [
          'Time complexity varies from O(n²) to O(n log n)',
          'Space complexity can be O(1) for in-place sorts',
          'Stability matters when sorting objects with multiple keys',
          'Different algorithms perform better on different data patterns'
        ],
        algorithms: [
          {
            name: 'Bubble Sort',
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            stability: 'Stable',
            description: 'Repeatedly compares adjacent elements and swaps them if they are in wrong order. The largest element "bubbles" to the end in each pass.',
            howItWorks: 'Compare adjacent pairs, swap if needed, repeat until no swaps occur.',
            bestCase: 'O(n) - when array is already sorted',
            worstCase: 'O(n²) - when array is reverse sorted',
            pros: ['Simple to understand and implement', 'In-place sorting', 'Stable algorithm', 'Adaptive (performs better on nearly sorted data)'],
            cons: ['Very inefficient for large datasets', 'Poor performance compared to other O(n²) algorithms', 'Many unnecessary comparisons'],
            visualizerLink: 'bubble-sort'
          },
          {
            name: 'Selection Sort',
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            stability: 'Unstable',
            description: 'Finds the minimum element from unsorted portion and places it at the beginning. Divides array into sorted and unsorted regions.',
            howItWorks: 'Find minimum in unsorted portion, swap with first unsorted element, expand sorted region.',
            bestCase: 'O(n²) - always performs same number of comparisons',
            worstCase: 'O(n²) - same as best case',
            pros: ['Simple implementation', 'In-place sorting', 'Minimum number of swaps (O(n))', 'Works well for small datasets'],
            cons: ['Inefficient for large datasets', 'Not stable', 'Not adaptive', 'Always O(n²) regardless of input'],
            visualizerLink: 'selection-sort'
          },
          {
            name: 'Insertion Sort',
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            stability: 'Stable',
            description: 'Builds sorted array one element at a time by inserting each element into its correct position among previously sorted elements.',
            howItWorks: 'Take element from unsorted portion, find correct position in sorted portion, insert it there.',
            bestCase: 'O(n) - when array is already sorted',
            worstCase: 'O(n²) - when array is reverse sorted',
            pros: ['Simple implementation', 'Efficient for small datasets', 'Adaptive and stable', 'In-place sorting', 'Online algorithm'],
            cons: ['Inefficient for large datasets', 'More writes than selection sort', 'O(n²) comparisons in worst case'],
            visualizerLink: 'insertion-sort'
          },
          {
            name: 'Merge Sort',
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(n)',
            stability: 'Stable',
            description: 'Divide and conquer algorithm that divides array into halves, sorts them recursively, then merges the sorted halves.',
            howItWorks: 'Divide array into halves, recursively sort each half, merge sorted halves back together.',
            bestCase: 'O(n log n) - consistent performance',
            worstCase: 'O(n log n) - same as best case',
            pros: ['Guaranteed O(n log n) performance', 'Stable algorithm', 'Predictable performance', 'Good for large datasets'],
            cons: ['Requires O(n) extra space', 'Not in-place', 'Slower than quicksort in practice', 'Not adaptive'],
            visualizerLink: 'merge-sort'
          },
          {
            name: 'Quick Sort',
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(log n)',
            stability: 'Unstable',
            description: 'Divide and conquer algorithm that selects a pivot element and partitions array around it, then recursively sorts the partitions.',
            howItWorks: 'Choose pivot, partition array around pivot, recursively sort left and right partitions.',
            bestCase: 'O(n log n) - when pivot divides array evenly',
            worstCase: 'O(n²) - when pivot is always smallest/largest',
            pros: ['Very efficient in practice', 'In-place sorting', 'Cache-friendly', 'Widely used in libraries'],
            cons: ['Worst case O(n²)', 'Not stable', 'Performance depends on pivot selection', 'Recursive (can cause stack overflow)'],
            visualizerLink: 'quick-sort'
          },
          {
            name: 'Heap Sort',
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(1)',
            stability: 'Unstable',
            description: 'Uses binary heap data structure. Builds max heap, then repeatedly extracts maximum element and places it at the end.',
            howItWorks: 'Build max heap, extract max (root), place at end, restore heap property, repeat.',
            bestCase: 'O(n log n) - consistent performance',
            worstCase: 'O(n log n) - same as best case',
            pros: ['Guaranteed O(n log n) performance', 'In-place sorting', 'Not recursive', 'Good worst-case performance'],
            cons: ['Not stable', 'Poor cache performance', 'Slower than quicksort in practice', 'Complex implementation'],
            visualizerLink: 'heap-sort'
          },
          {
            name: 'Radix Sort',
            timeComplexity: 'O(d × n)',
            spaceComplexity: 'O(n + k)',
            stability: 'Stable',
            description: 'Non-comparison sort that sorts by individual digits/characters. Processes digits from least to most significant.',
            howItWorks: 'Sort by each digit position using counting sort, from rightmost to leftmost digit.',
            bestCase: 'O(d × n) - where d is number of digits',
            worstCase: 'O(d × n) - same as best case',
            pros: ['Linear time for fixed-width integers', 'Stable algorithm', 'Good for large datasets with small keys', 'Not comparison-based'],
            cons: ['Only works with integers/strings', 'Requires extra space', 'Performance depends on key length', 'Not in-place'],
            visualizerLink: 'radix-sort'
          }
        ]
      }
    },
    searching: {
      title: 'Search Algorithms',
      icon: '🔍',
      content: {
        overview: 'Search algorithms locate specific elements within data structures. The choice of algorithm depends on data organization and search frequency.',
        keyPoints: [
          'Linear search works on any data organization',
          'Binary search requires sorted data but is much faster',
          'Hash-based searches can achieve O(1) average time',
          'Tree-based searches provide O(log n) guaranteed time'
        ],
        algorithms: [
          {
            name: 'Linear Search',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            description: 'Sequentially checks each element in the data structure until the target is found or all elements are examined.',
            howItWorks: 'Start from first element, compare with target, move to next element if no match, repeat until found or end reached.',
            bestCase: 'O(1) - target is first element',
            worstCase: 'O(n) - target is last element or not present',
            pros: ['Works on unsorted data', 'Simple implementation', 'No preprocessing required', 'Works on any data structure'],
            cons: ['Slow for large datasets', 'Inefficient for repeated searches', 'No early termination optimization'],
            visualizerLink: 'linear-search'
          },
          {
            name: 'Binary Search',
            timeComplexity: 'O(log n)',
            spaceComplexity: 'O(1)',
            description: 'Efficiently searches sorted arrays by repeatedly dividing the search interval in half and comparing with the middle element.',
            howItWorks: 'Compare target with middle element, eliminate half of remaining elements, repeat on remaining half.',
            bestCase: 'O(1) - target is middle element',
            worstCase: 'O(log n) - target is at leaf level',
            pros: ['Very efficient for large datasets', 'Logarithmic time complexity', 'Predictable performance', 'Space efficient'],
            cons: ['Requires sorted data', 'Not suitable for frequently changing data', 'Random access required'],
            visualizerLink: 'binary-search'
          },
          {
            name: 'Jump Search',
            timeComplexity: 'O(√n)',
            spaceComplexity: 'O(1)',
            description: 'Searches sorted array by jumping ahead by fixed steps, then performs linear search in the identified block.',
            howItWorks: 'Jump by √n steps until element is greater than target, then linear search in previous block.',
            bestCase: 'O(1) - target found in first jump',
            worstCase: 'O(√n) - target in last block',
            pros: ['Better than linear search', 'Works on sorted arrays', 'Simple implementation', 'Good for large datasets'],
            cons: ['Slower than binary search', 'Requires sorted data', 'Optimal jump size needs calculation']
          },
          {
            name: 'Interpolation Search',
            timeComplexity: 'O(log log n)',
            spaceComplexity: 'O(1)',
            description: 'Improved binary search for uniformly distributed data. Estimates position based on value rather than always choosing middle.',
            howItWorks: 'Calculate probable position using interpolation formula, search around that position.',
            bestCase: 'O(1) - direct hit with interpolation',
            worstCase: 'O(n) - when data is not uniformly distributed',
            pros: ['Very fast for uniform data', 'Better than binary search on average', 'Adaptive to data distribution'],
            cons: ['Requires uniformly distributed data', 'Complex implementation', 'Poor performance on non-uniform data']
          }
        ]
      }
    },
    dataStructures: {
      title: 'Data Structures',
      icon: '🏗️',
      content: {
        overview: 'Data structures organize and store data to enable efficient access and modification. The choice affects algorithm performance significantly.',
        keyPoints: [
          'Linear structures: Arrays, Linked Lists, Stacks, Queues',
          'Non-linear structures: Trees, Graphs, Hash Tables',
          'Trade-offs between time and space complexity',
          'Different structures optimize different operations'
        ],
        algorithms: [
          {
            name: 'Stack',
            timeComplexity: 'O(1)',
            spaceComplexity: 'O(n)',
            description: 'LIFO (Last In, First Out) linear data structure. Elements are added and removed from the same end called the top.',
            howItWorks: 'Push adds element to top, pop removes element from top, peek views top element without removing.',
            operations: 'Push: O(1), Pop: O(1), Peek: O(1), Search: O(n)',
            pros: ['Fast push/pop operations', 'Simple implementation', 'Memory efficient', 'Useful for recursion and parsing'],
            cons: ['Limited access pattern', 'No random access', 'Can overflow if not managed', 'Only top element accessible'],
            visualizerLink: 'stack'
          },
          {
            name: 'Queue',
            timeComplexity: 'O(1)',
            spaceComplexity: 'O(n)',
            description: 'FIFO (First In, First Out) linear data structure. Elements are added at rear and removed from front.',
            howItWorks: 'Enqueue adds element to rear, dequeue removes element from front, front/rear track positions.',
            operations: 'Enqueue: O(1), Dequeue: O(1), Front: O(1), Search: O(n)',
            pros: ['Fair processing order', 'Efficient operations', 'Good for scheduling', 'Natural for BFS'],
            cons: ['Sequential access only', 'No random access', 'Memory can be wasted in array implementation']
          },
          {
            name: 'Linked List',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            description: 'Linear data structure where elements are stored in nodes, each containing data and reference to next node.',
            howItWorks: 'Nodes connected via pointers, head points to first node, traversal follows pointers.',
            operations: 'Insert: O(1) at head, O(n) at position, Delete: O(1) with reference, O(n) by value',
            pros: ['Dynamic size', 'Efficient insertion/deletion', 'Memory efficient', 'No memory waste'],
            cons: ['No random access', 'Extra memory for pointers', 'Not cache friendly', 'Sequential access only']
          },
          {
            name: 'Binary Tree',
            timeComplexity: 'O(log n)',
            spaceComplexity: 'O(n)',
            description: 'Hierarchical data structure where each node has at most two children (left and right).',
            howItWorks: 'Root node at top, each node has left/right children, leaves have no children.',
            operations: 'Search: O(log n) balanced, O(n) skewed, Insert/Delete: O(log n) balanced',
            pros: ['Hierarchical organization', 'Efficient search in BST', 'Natural recursion', 'Ordered traversal'],
            cons: ['Can become unbalanced', 'Complex implementation', 'No constant time operations']
          },
          {
            name: 'Hash Table',
            timeComplexity: 'O(1)',
            spaceComplexity: 'O(n)',
            description: 'Data structure that maps keys to values using hash function for fast access.',
            howItWorks: 'Hash function converts key to array index, handle collisions with chaining or probing.',
            operations: 'Insert: O(1) average, Search: O(1) average, Delete: O(1) average',
            pros: ['Very fast average operations', 'Flexible key types', 'Good for caching', 'Constant time lookup'],
            cons: ['Hash collisions', 'Memory overhead', 'No ordering', 'Worst case O(n)']
          }
        ]
      }
    },
    complexity: {
      title: 'Complexity Analysis',
      icon: '📊',
      content: {
        overview: 'Algorithm complexity analysis helps us understand how algorithm performance scales with input size.',
        keyPoints: [
          'Big O notation describes upper bound of growth rate',
          'Time complexity: how runtime grows with input size',
          'Space complexity: how memory usage grows with input size',
          'Best, average, and worst-case scenarios matter'
        ],
        algorithms: [
          {
            name: 'Big O Notation',
            description: 'Mathematical notation to describe the upper bound of algorithm complexity.',
            examples: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)',
            pros: ['Standardized way to compare algorithms', 'Focus on scalability', 'Language independent'],
            cons: ['Ignores constants', 'Worst-case focus', 'May not reflect real performance']
          },
          {
            name: 'Time Complexity',
            description: 'Measures how algorithm runtime increases with input size.',
            examples: 'Constant O(1), Logarithmic O(log n), Linear O(n), Quadratic O(n²)',
            pros: ['Predicts scalability', 'Helps choose right algorithm', 'Performance comparison'],
            cons: ['Ignores hardware factors', 'Constants matter in practice', 'Average case often different']
          },
          {
            name: 'Space Complexity',
            description: 'Measures how algorithm memory usage increases with input size.',
            examples: 'In-place O(1), Linear O(n), Recursive O(log n) to O(n)',
            pros: ['Important for memory-constrained systems', 'Helps optimize memory usage'],
            cons: ['Often traded off with time complexity', 'Stack space often ignored']
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
            <span className="topic-icon">{topic.icon}</span>
            <span className="topic-title">{topic.title}</span>
          </button>
        ))}
      </div>

      <div className="learn-content">
        <div className="content-header">
          <h2>
            <span className="header-icon">{topics[selectedTopic].icon}</span>
            {topics[selectedTopic].title}
          </h2>
        </div>
        <p className="overview">{topics[selectedTopic].content.overview}</p>
        
        {topics[selectedTopic].content.keyPoints && (
          <div className="key-points">
            <h3>Key Points</h3>
            <ul className="points-list">
              {topics[selectedTopic].content.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        
        {selectedAlgorithm ? (
          <div className="single-algorithm-view">
            <button 
              className="back-btn"
              onClick={() => setSelectedAlgorithm(null)}
            >
              ← Back to {topics[selectedTopic].title}
            </button>
            
            <div className="algorithm-detail">
              <div className="algorithm-card featured">
                <div className="card-header">
                  <h3>{selectedAlgorithm.name}</h3>
                  {selectedAlgorithm.timeComplexity && (
                    <div className="complexity">
                      <span className="time-complexity">Time: {selectedAlgorithm.timeComplexity}</span>
                      <span className="space-complexity">Space: {selectedAlgorithm.spaceComplexity}</span>
                      {selectedAlgorithm.stability && <span className="stability">{selectedAlgorithm.stability}</span>}
                    </div>
                  )}
                </div>
                
                <p className="description">{selectedAlgorithm.description}</p>
                
                {selectedAlgorithm.howItWorks && (
                  <div className="how-it-works">
                    <h4>How it works:</h4>
                    <p>{selectedAlgorithm.howItWorks}</p>
                  </div>
                )}
                
                {selectedAlgorithm.operations && (
                  <div className="operations">
                    <h4>Operations:</h4>
                    <p>{selectedAlgorithm.operations}</p>
                  </div>
                )}
                
                {(selectedAlgorithm.bestCase || selectedAlgorithm.worstCase) && (
                  <div className="cases">
                    {selectedAlgorithm.bestCase && <p><strong>Best Case:</strong> {selectedAlgorithm.bestCase}</p>}
                    {selectedAlgorithm.worstCase && <p><strong>Worst Case:</strong> {selectedAlgorithm.worstCase}</p>}
                  </div>
                )}
                
                {selectedAlgorithm.examples && (
                  <div className="examples">
                    <h4>Examples:</h4>
                    <p>{selectedAlgorithm.examples}</p>
                  </div>
                )}
                
                <div className="pros-cons">
                  <div className="pros">
                    <h4>✅ Advantages:</h4>
                    <ul>
                      {selectedAlgorithm.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                    </ul>
                  </div>
                  <div className="cons">
                    <h4>❌ Disadvantages:</h4>
                    <ul>
                      {selectedAlgorithm.cons.map((con, i) => <li key={i}>{con}</li>)}
                    </ul>
                  </div>
                </div>
                
                {selectedAlgorithm.visualizerLink && (
                  <div className="action-buttons">
                    <button 
                      className="visualize-btn"
                      onClick={() => navigateToVisualizer(selectedAlgorithm.visualizerLink)}
                    >
                      🚀 Try Interactive Visualization
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="algorithms-grid">
            {topics[selectedTopic].content.algorithms.map((alg, index) => (
              <div key={index} className="algorithm-card" onClick={() => setSelectedAlgorithm(alg)}>
                <div className="card-header">
                  <h3>{alg.name}</h3>
                  {alg.timeComplexity && (
                    <div className="complexity">
                      <span className="time-complexity">Time: {alg.timeComplexity}</span>
                      <span className="space-complexity">Space: {alg.spaceComplexity}</span>
                      {alg.stability && <span className="stability">{alg.stability}</span>}
                    </div>
                  )}
                </div>
                
                <p className="description">{alg.description}</p>
                
                <div className="card-footer">
                  <span className="click-hint">Click to learn more →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnPage;