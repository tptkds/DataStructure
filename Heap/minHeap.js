class MinHeap {
    constructor() {
        this.items = [];
    }

    swap(index1, index2) {
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return index * 2 + 1;
    }

    rightChildIndex(index) {
        return index * 2 + 2;
    }

    parent(index) {
        return this.items[this.parentIndex(index)];
    }
    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }
    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }
    peek() {
        return this.items[0];
    }
    size() {
        return this.items.length;
    }

    insert(item) {
        this.items[this.size()] = item;
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.size() - 1;
        while(this.parent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }
     extract() {
        let item = this.items[0];
        this.items[0] = this.items[this.size() - 1];
        this.items.pop();
        this.bubbleDown();
        return item;
     }

     bubbleDown() {
        let index = 0;
        while(this.leftChild(index) && this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index]) {
            let childIndex = this.leftChildIndex(index);
            if(this.rightChild(index) && this.rightChild(index) < this.items[childIndex]) {
               childIndex = this.rightChildIndex(index); 
            }
            this.swap(childIndex, index);
            index = childIndex;
        }
    }
}