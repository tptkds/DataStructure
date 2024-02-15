class Element {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.array = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(data, priority) {
    const element = new Element(data, priority);
    let isAdded = false;
    for(let i = this.head; i < this.tail; i++) {
      if(element.priority < this.array[i].priority) {
        this.array.splice(i, 0, element);
        isAdded = true;
        break;
      }
    }
    if(!isAdded) this.array.push(element);
    return this.array.length;
  }

  dequeue() {
    const item = this.array[this.head];
    delete this.array[this.head++];
    return item;

  }

  clear() {
     this.array = []; this.head = 0; this.tail = 0; 
  }

  isEmpty() {
    return this.tail - this.head === 0;
  }

  size() {
    return this.tail - this.head;
  }

  getBuffer() {
    return this.array(map((element) => element.data));
  }

  front() {
    return this.array[this.head];
  }
}
