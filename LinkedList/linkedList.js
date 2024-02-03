class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    size() {
        return this.length;
    }
    isEmpty() {
        return this.length === 0 ? true : false;
    }
    append(data) {
        if (data == "undefined") return false;
        const newNode = new Node(data);
        this.length++;
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let curNode = this.head;
            while (true) {
                if (curNode.next === null) break;
                curNode = curNode.next;
            }
            curNode.next = newNode;
        }
        return true;
    }
    insert(data, position = 0) {
        if (data === "undefined" || position > this.length || position < 0) return false;
        let newNode = new Node(data);
        this.length++;
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let curNode = this.head;
            for (let i = 1; i < position; i++) {
                curNode = curNode.next;
            }
            newNode.next = curNode.next;
            curNode.next = newNode;
        }
        return true;
    }
    remove(data) {
        if (data === "undefined" || this.isEmpty()) return false;
        if (this.head.data == data) {
            this.head = this.head.next;
        }
        let curNode = this.head;
        for (let i = 1; i < this.length; i++) {
            if (curNode.next.data === data) {
                curNode.next = curNode.next.next;
                this.length--;
                return true;
            }
            curNode = curNode.next;
        }
        return false;
    }
    removeAt(position = 0) {
        if (position > this.length - 1 || position < 0 || this.isEmpty()) return false;
        if (position === 0) {
            this.head = this.head.next;
        }
        let curNode = this.head;
        for (let i = 1; i < position; i++) {
            curNode = curNode.next;
        }
        curNode.next = curNode.next.next;
        this.length--;
        return true;
    }
    printNode() {
        let data = [];
        let curNode = this.head;
        while (curNode !== null) {
            data.push(curNode.data);
            curNode = curNode.next;
        }
        console.log(`head -> ${data.join(' -> ')} -> null`);
    }
    indexOf(data) {
        if (data === "undefined" || this.isEmpty()) return false;
        let curNode = this.head;
        for (let i = 1; i <= this.length; i++) {
            if (curNode.data === data) {
                return i - 1;
            }
            curNode = curNode.next;
        }
        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insert("2-1", 2);
linkedList.remove("2-1");
linkedList.removeAt(2);
linkedList.printNode();
linkedList.indexOf(1);
console.log(linkedList.isEmpty())