class CircularQueue {
    constructor(size) {
        this.array = new Array(size);
        this.size = size;
        this.head = 0;
        this.tail = 0;
        this.length = 0;
    }

    getBuffer() {
        return this.array.slice();
    }

    isEmpty(){
        return this.length === 0;
    }

    isFull() {
        return this.size === this.length;
    }

    enqueue(data) {
        if(this.isFull()) return false;

        this.array[this.tail] = data;
        if(this.tail + 1 === this.size) {
            this.tail = 0;
        } else {
            this.tail++;
        }
        this.length++;
    }
    dequeue() {
        if(this.isEmpty()) return undefined;
        const data = this.array[this.head];
        delete this.array[this.head];
        if(this.head + 1 === this.size) {
            this.head = 0;
        } else {
            this.head++;
        }
        return data;
    }

    front() {
        return this.length === 0 ? undefined : this.array[this.head];
    }

    clear(size) {
        this.array = new Array(size);
        this.size = size;
        this.length = 0;
        this.head = 0;
        this.tail = 0;
    }
}

let queue = new CircularQueue(10);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(2);

queue.dequeue()
console.log(queue.getBuffer());