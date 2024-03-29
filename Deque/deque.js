class Deque {
    constructor() {
        this.array = [];
        this.tail = 0;
        this.head = 0;
    }

    getBuffer() {
        return this.array.slice();
    }

    isEmpty() {
        return this.tail - this.head;
    }

    pushFront(data) {
        this.array.splice(this.head, 0, data);
        this.tail++;
    }

    pushBack(data) {
        this.array[tail] = data;
        this.tail++;
    }

    popFront() {
        const data = this.array[this.head];
        delete this.array[this.head];
        head++;
        return data;
    }

    popBack() {
        const data = this.array[this.tail - 1];
        delete this.array[this.tail - 1];
        tail--;
        return data;
    }
    front() {
        return this.isEmpty() ? undefined : this.array[this.head];
    }
    back() {
        return this.isEmpty() ? undefined : this.array[this.tail - 1];
    }
    size() {
        return this.tail - this.head;
    }
    clear() {
        this.array = [];
        this.head = 0;
        this.tail = 0;
    }
}