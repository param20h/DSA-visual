# DSA Visualizer 🚀

An interactive web application for visualizing Data Structures and Algorithms built with React. Learn algorithms through engaging animations and step-by-step visualizations.

## ✨ Features

- **Interactive Visualizations**: Watch algorithms come to life with smooth animations
- **Multiple Algorithm Categories**: 
  - Sorting Algorithms (Bubble, Selection, Insertion, Merge, Quick Sort)
  - Search Algorithms (Binary Search)
  - Data Structures (Stack)
- **Learn Mode**: Educational content with explanations and complexity analysis
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Clean UI**: Modern, intuitive interface with floating animations

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling and animations
- **React Context API** - State management

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

### Sorting Algorithms
- **Bubble Sort** - O(n²) time complexity
- **Selection Sort** - O(n²) time complexity  
- **Insertion Sort** - O(n²) time complexity
- **Merge Sort** - O(n log n) time complexity
- **Quick Sort** - O(n log n) average time complexity

### Search Algorithms
- **Binary Search** - O(log n) time complexity

### Data Structures
- **Stack** - LIFO (Last In, First Out) operations

## 🎮 How to Use

1. **Choose an Algorithm**: Select from the dropdown menu in the visualizer
2. **Watch the Animation**: Observe how the algorithm processes data step by step
3. **Learn Mode**: Switch to the Learn tab for detailed explanations
4. **Interactive Controls**: Use play, pause, and speed controls during visualization

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- Add new sorting algorithms (Heap Sort, Radix Sort)
- Implement graph algorithms (BFS, DFS, Dijkstra)
- Add tree data structures (Binary Tree, AVL Tree)
- Improve animations and UI/UX
- Add algorithm complexity comparisons

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🌟 Future Enhancements

- [ ] Graph algorithms visualization
- [ ] Tree data structures
- [ ] Algorithm performance comparison
- [ ] Code editor integration
- [ ] Export visualization as GIF/video
- [ ] Dark/Light theme toggle
- [ ] Mobile app version

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by various algorithm visualization tools
- Built with Create React App
- Icons and animations created with CSS3

## 📞 Contact

- GitHub: [@param20h](https://github.com/param20h)
- Email: your.email@example.com

---

⭐ Star this repository if you found it helpful!
