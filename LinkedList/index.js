class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let previousNode = this.head;
    let temporaryNode = this.head;

    while (temporaryNode.next) {
      previousNode = temporaryNode;
      temporaryNode = temporaryNode.next;
    }

    this.tail = previousNode;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return this;
  }

  unshift(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  shift() {
    if (!this.head) return undefined;

    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return undefined;

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) return undefined;

    node.value = value;

    return node;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);
    if (!previousNode) return undefined;

    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (!this.head) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    if (!previousNode || !postNode) return undefined;

    previousNode.next = postNode;
    this.length--;

    return this;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let after = current.next;

    this.head = this.tail;
    this.tail = current;

    for (let i = 0; i < this.length; i++) {
      after = current.next;
      current.next = prev;
      prev = current;
      current = after;
    }

    return this;
  }
}

const linkedList = new LinkedList(1);
