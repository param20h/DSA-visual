# DSA Visualizer 🚀

An interactive web application for visualizing Data Structures and Algorithms built with React. Learn algorithms through engaging animations, step-by-step visualizations, and comprehensive educational content.

## ✨ Features

### 🎯 Interactive Visualizations
- **9+ Algorithm Implementations**: Watch algorithms come to life with smooth animations
- **Custom Array Input**: Create your own arrays or use preset configurations
- **Real-time Controls**: Play, pause, reset, and adjust animation speeds
- **Step-by-step Breakdown**: Understand each operation with detailed explanations

### 📚 Algorithm Categories
- **Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Radix Sort
- **Search Algorithms**: Binary Search, Linear Search, Jump Search, Interpolation Search
- **Data Structures**: Stack, Queue, Linked Lists, Binary Trees, Hash Tables

### 🎓 Enhanced Learning Experience
- **Comprehensive Learn Mode**: Detailed algorithm explanations with complexity analysis
- **Interactive Algorithm Selection**: Click to explore individual algorithms in depth
- **Multi-language Code Examples**: View implementations in JavaScript, Python, Java, and C++
- **Visual Code Editor**: Syntax-highlighted code with copy functionality
- **Complexity Analysis**: Understand Big O notation and performance characteristics

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Dark Theme**: Easy on the eyes with beautiful gradients and animations
- **Interactive Elements**: Clickable footer navigation and algorithm cards
- **GitHub Integration**: Direct links to repository and star functionality

## 🛠️ Technologies Used

- **React 18** - Frontend framework with hooks and context
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Advanced styling with animations, gradients, and responsive design
- **React Context API** - Global state management
- **Custom Animation Engine** - Smooth algorithm visualizations
- **Responsive Web Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/param20h/DSA-visual.git
cd DSA-visual
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
dsa-visualizer/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Algorithm visualization components
│   │   ├── BinarySearch.js
│   │   ├── BubbleSort.js
│   │   ├── CodeDisplay.js   # Multi-language code viewer
│   │   ├── NumberInput.js   # Custom array input component
│   │   ├── HeapSort.js
│   │   ├── RadixSort.js
│   │   ├── InsertionSort.js
│   │   ├── LearnPage.js
│   │   ├── MergeSort.js
│   │   ├── QuickSort.js
│   │   ├── SelectionSort.js
│   │   └── Stack.js
│   ├── context/             # React Context for state management
│   │   └── AppContext.js
│   ├── utils/               # Utility functions
│   │   ├── AlgorithmRegistry.js
│   │   └── AnimationEngine.js
│   ├── App.js              # Main application component
│   ├── App.css             # Global styles
│   └── index.js            # Application entry point
├── package.json
└── README.md
```

## 🎯 Available Algorithms

### 🔄 Sorting Algorithms
| Algorithm | Time Complexity | Space Complexity | Stable | Description |
|-----------|----------------|------------------|--------|-------------|
| **Bubble Sort** | O(n²) | O(1) | ✅ | Simple comparison-based sort |
| **Selection Sort** | O(n²) | O(1) | ❌ | Finds minimum and places at beginning |
| **Insertion Sort** | O(n²) | O(1) | ✅ | Builds sorted array one element at a time |
| **Merge Sort** | O(n log n) | O(n) | ✅ | Divide and conquer approach |
| **Quick Sort** | O(n log n) avg | O(log n) | ❌ | Efficient pivot-based sorting |
| **Heap Sort** | O(n log n) | O(1) | ❌ | Binary heap-based sorting |
| **Radix Sort** | O(d×n) | O(n+k) | ✅ | Non-comparison digit-based sort |

### 🔍 Search Algorithms
| Algorithm | Time Complexity | Space Complexity | Requirements |
|-----------|----------------|------------------|--------------|
| **Linear Search** | O(n) | O(1) | None |
| **Binary Search** | O(log n) | O(1) | Sorted array |
| **Jump Search** | O(√n) | O(1) | Sorted array |
| **Interpolation Search** | O(log log n) | O(1) | Uniformly distributed data |

### 🏗️ Data Structures
| Structure | Operations | Time Complexity | Use Cases |
|-----------|------------|----------------|-----------|
| **Stack** | Push/Pop/Peek | O(1) | Function calls, undo operations |
| **Queue** | Enqueue/Dequeue | O(1) | BFS, scheduling |
| **Linked List** | Insert/Delete | O(1)/O(n) | Dynamic data |
| **Binary Tree** | Search/Insert | O(log n) | Hierarchical data |
| **Hash Table** | Insert/Search | O(1) avg | Fast lookups |

## 🎮 How to Use

### 🖥️ Visualizer Mode
1. **Select Algorithm**: Choose from the dropdown menu (9+ algorithms available)
2. **Customize Input**: 
   - Use preset arrays (Random, Nearly Sorted, Reverse Sorted, etc.)
   - Create custom arrays with the input field
   - Adjust array size with the slider (3-15 elements)
3. **Run Visualization**: Click "Start" to watch the algorithm in action
4. **View Code**: Click "Show Code" to see implementations in 4 programming languages
5. **Interactive Controls**: Play, pause, reset, and control animation speed

### 📖 Learn Mode
1. **Browse Topics**: Select from Sorting, Searching, Data Structures, or Complexity Analysis
2. **Explore Algorithms**: Click on any algorithm card to dive deep into its details
3. **Navigate Easily**: Use the interactive footer to jump between sections
4. **Try Visualizations**: Click "Try Interactive Visualization" to switch to visualizer mode

### 🎯 Advanced Features
- **Multi-language Code**: View the same algorithm in JavaScript, Python, Java, and C++
- **Copy Code**: One-click copy functionality for all code examples
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **GitHub Integration**: Star the repository and contribute to the project

## 🌟 Recent Updates

- ✅ **Enhanced UI/UX**: Modern dark theme with beautiful animations
- ✅ **Custom Array Input**: Create your own test cases with intuitive controls
- ✅ **Multi-language Code Support**: JavaScript, Python, Java, and C++ implementations
- ✅ **Interactive Learn Mode**: Click-to-explore algorithm details
- ✅ **Advanced Sorting Algorithms**: Added Heap Sort and Radix Sort
- ✅ **Responsive Design**: Perfect mobile and tablet experience
- ✅ **GitHub Integration**: Direct repository links and star functionality
- ✅ **Interactive Footer**: Navigate directly to specific algorithms and topics

## 🚀 Future Enhancements

- [ ] **Graph Algorithms**: BFS, DFS, Dijkstra's Algorithm, A* Search
- [ ] **Advanced Trees**: AVL Trees, Red-Black Trees, B-Trees
- [ ] **Dynamic Programming**: Visualize classic DP problems
- [ ] **Algorithm Racing**: Compare multiple algorithms side-by-side
- [ ] **Performance Analytics**: Real-time complexity analysis
- [ ] **Code Playground**: Live code editor with execution
- [ ] **Export Features**: Save visualizations as GIF/video
- [ ] **Collaborative Mode**: Share sessions with friends
- [ ] **Voice Commands**: "Show me quick sort" voice control
- [ ] **AR Visualization**: Mobile AR for 3D algorithm viewing

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🤝 Contributing

We welcome contributions! Here are some ways you can help:

### 🐛 Found a Bug?
- [Report Issues](https://github.com/param20h/DSA-visual/issues)
- Provide detailed steps to reproduce
- Include screenshots if applicable

### 💡 Want to Add Features?
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 🎯 Contribution Ideas
- Add new algorithms (Graph algorithms, DP problems)
- Improve animations and visual effects
- Add more programming languages
- Enhance mobile experience
- Write tests and documentation
- Optimize performance

## 📊 Project Stats

- **10+ Algorithms** implemented with visualizations
- **4 Programming Languages** for code examples
- **100% Interactive** - every algorithm is fully animated
- **Mobile Responsive** - works on all devices
- **Open Source** - MIT License

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Links

- **GitHub**: [@param20h](https://github.com/param20h)
- **Repository**: [DSA-visual](https://github.com/param20h/DSA-visual)
- **Issues**: [Report Bugs](https://github.com/param20h/DSA-visual/issues)
- **Documentation**: [README](https://github.com/param20h/DSA-visual/blob/main/README.md)

## 🙏 Acknowledgments

- Inspired by various algorithm visualization tools
- Built with Create React App
- Icons and animations created with CSS3
- Community feedback and contributions

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**[⭐ Star on GitHub](https://github.com/param20h/DSA-visual/stargazers)** • **[🐛 Report Bug](https://github.com/param20h/DSA-visual/issues)** • **[💡 Request Feature](https://github.com/param20h/DSA-visual/issues)**

**Made with ❤️ by [@param20h](https://github.com/param20h)**

</div>
