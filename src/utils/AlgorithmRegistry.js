// Central registry for all algorithms
export const ALGORITHM_CATEGORIES = {
  SORTING: 'sorting',
  SEARCHING: 'searching',
  DATA_STRUCTURES: 'data-structures',
  GRAPHS: 'graphs',
  DYNAMIC_PROGRAMMING: 'dynamic-programming',
  TREES: 'trees'
};

export const ALGORITHM_REGISTRY = {
  // Sorting Algorithms
  'bubble-sort': {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    category: ALGORITHM_CATEGORIES.SORTING,
    difficulty: 'Beginner',
    timeComplexity: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)' },
    spaceComplexity: 'O(1)',
    description: 'Compares adjacent elements and swaps them if they are in wrong order.',
    implemented: true
  },
  'selection-sort': {
    id: 'selection-sort',
    name: 'Selection Sort',
    category: ALGORITHM_CATEGORIES.SORTING,
    difficulty: 'Beginner',
    timeComplexity: { best: 'O(n²)', average: 'O(n²)', worst: 'O(n²)' },
    spaceComplexity: 'O(1)',
    description: 'Finds minimum element and places it at the beginning.',
    implemented: false
  },
  'insertion-sort': {
    id: 'insertion-sort',
    name: 'Insertion Sort',
    category: ALGORITHM_CATEGORIES.SORTING,
    difficulty: 'Beginner',
    timeComplexity: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)' },
    spaceComplexity: 'O(1)',
    description: 'Builds sorted array one element at a time.',
    implemented: false
  },
  'merge-sort': {
    id: 'merge-sort',
    name: 'Merge Sort',
    category: ALGORITHM_CATEGORIES.SORTING,
    difficulty: 'Intermediate',
    timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)' },
    spaceComplexity: 'O(n)',
    description: 'Divide and conquer algorithm that splits array and merges sorted halves.',
    implemented: false
  },
  'quick-sort': {
    id: 'quick-sort',
    name: 'Quick Sort',
    category: ALGORITHM_CATEGORIES.SORTING,
    difficulty: 'Intermediate',
    timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n²)' },
    spaceComplexity: 'O(log n)',
    description: 'Divide and conquer algorithm using pivot element.',
    implemented: false
  },

  // Search Algorithms
  'binary-search': {
    id: 'binary-search',
    name: 'Binary Search',
    category: ALGORITHM_CATEGORIES.SEARCHING,
    difficulty: 'Beginner',
    timeComplexity: { best: 'O(1)', average: 'O(log n)', worst: 'O(log n)' },
    spaceComplexity: 'O(1)',
    description: 'Divides sorted array in half repeatedly.',
    implemented: true
  },
  'linear-search': {
    id: 'linear-search',
    name: 'Linear Search',
    category: ALGORITHM_CATEGORIES.SEARCHING,
    difficulty: 'Beginner',
    timeComplexity: { best: 'O(1)', average: 'O(n)', worst: 'O(n)' },
    spaceComplexity: 'O(1)',
    description: 'Checks each element sequentially until target is found.',
    implemented: false
  },

  // Data Structures
  'stack': {
    id: 'stack',
    name: 'Stack',
    category: ALGORITHM_CATEGORIES.DATA_STRUCTURES,
    difficulty: 'Beginner',
    timeComplexity: { best: 'O(1)', average: 'O(1)', worst: 'O(1)' },
    spaceComplexity: 'O(n)',
    description: 'LIFO (Last In, First Out) data structure.',
    implemented: true
  },
  'queue': {
    id: 'queue',
    name: 'Queue',
    category: ALGORITHM_CATEGORIES.DATA_STRUCTURES,
    difficulty: 'Beginner',
    timeComplexity: { best: 'O(1)', average: 'O(1)', worst: 'O(1)' },
    spaceComplexity: 'O(n)',
    description: 'FIFO (First In, First Out) data structure.',
    implemented: false
  }
};

export const getAlgorithmsByCategory = (category) => {
  return Object.values(ALGORITHM_REGISTRY).filter(alg => alg.category === category);
};

export const getImplementedAlgorithms = () => {
  return Object.values(ALGORITHM_REGISTRY).filter(alg => alg.implemented);
};

export const getAlgorithmById = (id) => {
  return ALGORITHM_REGISTRY[id];
};