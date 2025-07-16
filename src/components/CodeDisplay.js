import React, { useState } from 'react';

const CodeDisplay = ({ algorithm }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const codeSnippets = {
    bubbleSort: {
      javascript: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
      python: `def bubble_sort(arr):
    for i in range(len(arr) - 1):
        for j in range(len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
      java: `public static void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
      cpp: `void bubbleSort(vector<int>& arr) {
    for (int i = 0; i < arr.size() - 1; i++) {
        for (int j = 0; j < arr.size() - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`
    },
    heapSort: {
      javascript: `function heapSort(arr) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
  return arr;
}

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
}

function heapify(arr, i, heapSize) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest, heapSize);
  }
}`,
      python: `def heap_sort(arr):
    build_max_heap(arr)
    for i in range(len(arr) - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, 0, i)
    return arr

def build_max_heap(arr):
    for i in range(len(arr) // 2 - 1, -1, -1):
        heapify(arr, i, len(arr))

def heapify(arr, i, heap_size):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    
    if left < heap_size and arr[left] > arr[largest]:
        largest = left
    if right < heap_size and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, largest, heap_size)`,
      java: `public static void heapSort(int[] arr) {
    buildMaxHeap(arr);
    for (int i = arr.length - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, 0, i);
    }
}

private static void buildMaxHeap(int[] arr) {
    for (int i = arr.length / 2 - 1; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
}

private static void heapify(int[] arr, int i, int heapSize) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, largest, heapSize);
    }
}`,
      cpp: `void heapSort(vector<int>& arr) {
    buildMaxHeap(arr);
    for (int i = arr.size() - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, 0, i);
    }
}

void buildMaxHeap(vector<int>& arr) {
    for (int i = arr.size() / 2 - 1; i >= 0; i--) {
        heapify(arr, i, arr.size());
    }
}

void heapify(vector<int>& arr, int i, int heapSize) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, largest, heapSize);
    }
}`
    },
    radixSort: {
      javascript: `function radixSort(arr) {
  const maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({length: 10}, () => []);
    for (let num of arr) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, num.toString().length);
  }
  return maxDigits;
}`,
      python: `def radix_sort(arr):
    max_digits = get_max_digits(arr)
    for k in range(max_digits):
        buckets = [[] for _ in range(10)]
        for num in arr:
            digit = get_digit(num, k)
            buckets[digit].append(num)
        arr = [num for bucket in buckets for num in bucket]
    return arr

def get_digit(num, place):
    return (abs(num) // (10 ** place)) % 10

def get_max_digits(nums):
    return max(len(str(abs(num))) for num in nums)`,
      java: `public static void radixSort(int[] arr) {
    int maxDigits = getMaxDigits(arr);
    for (int k = 0; k < maxDigits; k++) {
        List<Integer>[] buckets = new List[10];
        for (int i = 0; i < 10; i++) {
            buckets[i] = new ArrayList<>();
        }
        for (int num : arr) {
            int digit = getDigit(num, k);
            buckets[digit].add(num);
        }
        int index = 0;
        for (List<Integer> bucket : buckets) {
            for (int num : bucket) {
                arr[index++] = num;
            }
        }
    }
}

private static int getDigit(int num, int place) {
    return (Math.abs(num) / (int)Math.pow(10, place)) % 10;
}

private static int getMaxDigits(int[] nums) {
    int maxDigits = 0;
    for (int num : nums) {
        maxDigits = Math.max(maxDigits, String.valueOf(Math.abs(num)).length());
    }
    return maxDigits;
}`,
      cpp: `void radixSort(vector<int>& arr) {
    int maxDigits = getMaxDigits(arr);
    for (int k = 0; k < maxDigits; k++) {
        vector<vector<int>> buckets(10);
        for (int num : arr) {
            int digit = getDigit(num, k);
            buckets[digit].push_back(num);
        }
        arr.clear();
        for (auto& bucket : buckets) {
            for (int num : bucket) {
                arr.push_back(num);
            }
        }
    }
}

int getDigit(int num, int place) {
    return (abs(num) / (int)pow(10, place)) % 10;
}

int getMaxDigits(vector<int>& nums) {
    int maxDigits = 0;
    for (int num : nums) {
        maxDigits = max(maxDigits, (int)to_string(abs(num)).length());
    }
    return maxDigits;
}`
    },
    quickSort: {
      javascript: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`,
      python: `def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
      java: `public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}`,
      cpp: `void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}`
    },
    mergeSort: {
      javascript: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
      java: `public static void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

private static void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    for (i = left; i <= right; i++) {
        arr[i] = temp[i - left];
    }
}`,
      cpp: `void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp(right - left + 1);
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    for (i = left; i <= right; i++) {
        arr[i] = temp[i - left];
    }
}`
    },
    binarySearch: {
      javascript: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`,
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
      java: `public static int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}`,
      cpp: `int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}`
    },
    selectionSort: {
      javascript: `function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}`,
      python: `def selection_sort(arr):
    for i in range(len(arr) - 1):
        min_idx = i
        
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr`,
      java: `public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIdx = i;
        
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        if (minIdx != i) {
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}`,
      cpp: `void selectionSort(vector<int>& arr) {
    for (int i = 0; i < arr.size() - 1; i++) {
        int minIdx = i;
        
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        if (minIdx != i) {
            swap(arr[i], arr[minIdx]);
        }
    }
}`
    },
    insertionSort: {
      javascript: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  return arr;
}`,
      python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        arr[j + 1] = key
    
    return arr`,
      java: `public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}`,
      cpp: `void insertionSort(vector<int>& arr) {
    for (int i = 1; i < arr.size(); i++) {
        int key = arr[i];
        int j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}`
    },
    stack: {
      javascript: `class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
    return this.items.length;
  }
  
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }
  
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}`,
      python: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, element):
        self.items.append(element)
        return len(self.items)
    
    def pop(self):
        if self.is_empty():
            return None
        return self.items.pop()
    
    def peek(self):
        if self.is_empty():
            return None
        return self.items[-1]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)`,
      java: `import java.util.ArrayList;
import java.util.List;

public class Stack<T> {
    private List<T> items;
    
    public Stack() {
        this.items = new ArrayList<>();
    }
    
    public int push(T element) {
        items.add(element);
        return items.size();
    }
    
    public T pop() {
        if (isEmpty()) {
            return null;
        }
        return items.remove(items.size() - 1);
    }
    
    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return items.get(items.size() - 1);
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
    
    public int size() {
        return items.size();
    }
}`,
      cpp: `#include <vector>
#include <stdexcept>

template<typename T>
class Stack {
private:
    std::vector<T> items;
    
public:
    int push(const T& element) {
        items.push_back(element);
        return items.size();
    }
    
    T pop() {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        T top = items.back();
        items.pop_back();
        return top;
    }
    
    T peek() const {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        return items.back();
    }
    
    bool isEmpty() const {
        return items.empty();
    }
    
    size_t size() const {
        return items.size();
    }
};`
    },
    linearSearch: {
      javascript: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`,
      python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
      java: `public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
      cpp: `int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`
    },
    queue: {
      javascript: `class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
    return this.items.length;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}`,
      python: `class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, element):
        self.items.append(element)
        return len(self.items)
    
    def dequeue(self):
        if self.is_empty():
            return None
        return self.items.pop(0)
    
    def front(self):
        if self.is_empty():
            return None
        return self.items[0]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)`,
      java: `import java.util.ArrayList;
import java.util.List;

public class Queue<T> {
    private List<T> items;
    
    public Queue() {
        this.items = new ArrayList<>();
    }
    
    public int enqueue(T element) {
        items.add(element);
        return items.size();
    }
    
    public T dequeue() {
        if (isEmpty()) {
            return null;
        }
        return items.remove(0);
    }
    
    public T front() {
        if (isEmpty()) {
            return null;
        }
        return items.get(0);
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
    
    public int size() {
        return items.size();
    }
}`,
      cpp: `#include <deque>

template<typename T>
class Queue {
private:
    std::deque<T> items;
    
public:
    int enqueue(const T& element) {
        items.push_back(element);
        return items.size();
    }
    
    T dequeue() {
        if (isEmpty()) {
            throw std::runtime_error("Queue is empty");
        }
        T front = items.front();
        items.pop_front();
        return front;
    }
    
    T front() const {
        if (isEmpty()) {
            throw std::runtime_error("Queue is empty");
        }
        return items.front();
    }
    
    bool isEmpty() const {
        return items.empty();
    }
    
    size_t size() const {
        return items.size();
    }
};`
    },
    linkedList: {
      javascript: `class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insertAtHead(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  insertAtTail(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return false;
    
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
    return true;
  }
}`,
      python: `class ListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0
    
    def insert_at_head(self, data):
        new_node = ListNode(data)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    
    def insert_at_tail(self, data):
        new_node = ListNode(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self.size += 1
    
    def delete_at_index(self, index):
        if index < 0 or index >= self.size:
            return False
        
        if index == 0:
            self.head = self.head.next
        else:
            current = self.head
            for i in range(index - 1):
                current = current.next
            current.next = current.next.next
        
        self.size -= 1
        return True`,
      java: `class ListNode {
    int data;
    ListNode next;
    
    ListNode(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedList {
    private ListNode head;
    private int size;
    
    public LinkedList() {
        this.head = null;
        this.size = 0;
    }
    
    public void insertAtHead(int data) {
        ListNode newNode = new ListNode(data);
        newNode.next = head;
        head = newNode;
        size++;
    }
    
    public void insertAtTail(int data) {
        ListNode newNode = new ListNode(data);
        if (head == null) {
            head = newNode;
        } else {
            ListNode current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }
    
    public boolean deleteAtIndex(int index) {
        if (index < 0 || index >= size) {
            return false;
        }
        
        if (index == 0) {
            head = head.next;
        } else {
            ListNode current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next;
        }
        size--;
        return true;
    }
}`,
      cpp: `struct ListNode {
    int data;
    ListNode* next;
    
    ListNode(int data) : data(data), next(nullptr) {}
};

class LinkedList {
private:
    ListNode* head;
    int size;
    
public:
    LinkedList() : head(nullptr), size(0) {}
    
    void insertAtHead(int data) {
        ListNode* newNode = new ListNode(data);
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    void insertAtTail(int data) {
        ListNode* newNode = new ListNode(data);
        if (!head) {
            head = newNode;
        } else {
            ListNode* current = head;
            while (current->next) {
                current = current->next;
            }
            current->next = newNode;
        }
        size++;
    }
    
    bool deleteAtIndex(int index) {
        if (index < 0 || index >= size) {
            return false;
        }
        
        if (index == 0) {
            ListNode* temp = head;
            head = head->next;
            delete temp;
        } else {
            ListNode* current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current->next;
            }
            ListNode* temp = current->next;
            current->next = current->next->next;
            delete temp;
        }
        size--;
        return true;
    }
};`
    }
  };

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'cpp', name: 'C++', icon: '⚡' }
  ];

  const currentCode = codeSnippets[algorithm]?.[selectedLanguage] || `// Code for ${algorithm} in ${selectedLanguage} is not available yet.
// Please select a different language or algorithm.`;

  const getAlgorithmTitle = (alg) => {
    const titles = {
      bubbleSort: 'Bubble Sort',
      selectionSort: 'Selection Sort',
      insertionSort: 'Insertion Sort',
      heapSort: 'Heap Sort',
      radixSort: 'Radix Sort',
      quickSort: 'Quick Sort',
      mergeSort: 'Merge Sort',
      binarySearch: 'Binary Search',
      linearSearch: 'Linear Search',
      stack: 'Stack Data Structure',
      queue: 'Queue Data Structure',
      linkedList: 'Linked List Data Structure'
    };
    return titles[alg] || 'Algorithm';
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentCode);
  };

  return (
    <div className="code-section">
      <div className="code-header">
        <div className="code-title">
          <h3>{getAlgorithmTitle(algorithm)} Implementation</h3>
          <div className="code-actions">
            <button className="copy-btn" onClick={copyToClipboard} title="Copy code">
              📋 Copy
            </button>
          </div>
        </div>
        <div className="language-selector">
          {languages.map(lang => (
            <button
              key={lang.id}
              className={`lang-btn ${selectedLanguage === lang.id ? 'active' : ''}`}
              onClick={() => setSelectedLanguage(lang.id)}
            >
              <span className="lang-icon">{lang.icon}</span>
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="code-content">
        <div className="code-window">
          <div className="window-header">
            <div className="window-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="file-name">{algorithm}.{selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage === 'java' ? 'java' : selectedLanguage === 'python' ? 'py' : 'js'}</div>
          </div>
          <div className="code-editor">
            <pre><code>{currentCode}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeDisplay;