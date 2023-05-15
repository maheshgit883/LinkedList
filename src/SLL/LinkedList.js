class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0; // New property to store the count of nodes
    this.message = ""; // New property to store operation messages
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.count++; // Increment count
    this.message = `Successfully pushed value: ${value}`; // Set success message
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let currentIndex = 0;

      while (current && currentIndex < Number(index)) {
        prev = current;
        current = current.next;
        currentIndex++;
      }
      if (currentIndex === Number(index)) {
        if (prev) {
          prev.next = newNode;
        } else {
          // Update the head if inserting at index 0
          this.head = newNode;
        }
        newNode.next = current;
        this.count++; // Increment count
        this.message = `Successfully inserted value: ${value} at index: ${index}`; // Set success message
      } else {
        this.message = "Invalid index."; // Set error message
      }
    }
  }
  
  delete(value) {
    let current = this.head;
    let prev = null;
  
    while (current) {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.head = current.next;
        }
        this.count--; // Decrement count
        this.message = `Successfully deleted value: ${value}`;
        return;
      }
  
      prev = current;
      current = current.next;
    }
  
    this.message = `Value not found: ${value}`;
  }
  

  updateValueAt(index, newValue) {
    let current = this.head;
    let currentIndex = 0;

    while (current && currentIndex < Number(index)) {
      current = current.next;
      currentIndex++;
    }

    if (currentIndex === Number(index) && current) {
      current.value = newValue;
      this.message = `Successfully updated value at index: ${index}`; // Set success message
    } else {
      this.message = "Invalid index."; // Set error message
    }
  }

  getElementAt(index) {
    let current = this.head;
    let currentIndex = 0;

    while (current && currentIndex < Number(index)) {
      current = current.next;
      currentIndex++;
    }

    if (currentIndex === Number(index) && current) {
      this.message = `Element at index ${index}: ${current.value}`; // Set success message
    } else {
      this.message = "Invalid index."; // Set error message
    }
  }


  getIndex(value) {
    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (current.value === value) {
        this.message = `Index of value ${value}: ${currentIndex}`; // Set success message
        return;
      }
      current = current.next;
      currentIndex++;
    }

    this.message = `Value ${value} not found in the list.`; // Set error message
  }

  getSize() {
    this.message = `Size of the list: ${this.count}`;
  }

  clear() {
    this.head = null;
    this.count = 0;
    this.message = "List cleared.";
  }
}

export default LinkedList;


