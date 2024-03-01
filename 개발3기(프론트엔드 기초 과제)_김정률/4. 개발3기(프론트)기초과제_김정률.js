'use strict';
const assert = require('assert');

class Collection {
  constructor() {
    this._arr = [];
  }
  get_arr() {
    return this._arr;
  }

  push(value) {
    this._arr.push(value);
    return this;
  }

  get peek() {
    return this.isStack ? this._arr[this._arr.length - 1] : this._arr[0];
  }

  get poll() {
    return this.isStack ? this._arr.pop() : this._arr.shift();
  }

  clear() {
    this._arr = [];
  }
  
  toArray() {
    return this._arr;
  }

  remove() {
    if (this._arr.length === 0) {
        this.isStack? console.log("Stack이 이미 비어있습니다.") : console.log("Queue가 이미 비어있습니다")
    }
    else{
      this.isStack ? this._arr.pop() : this._arr.shift();
    }
  }

  get isEmpty() {
    return this._arr.length === 0;
  }

  get size() {
    return this._arr.length;
  }
}

class Stack extends Collection {
  constructor() {
    super(); 
    this.isStack = true; 
  }
  pop() { return this._arr.pop(); }
}

class Queue extends Collection {
  constructor() {
    super(); 
    this.isQueue = true; 
  }

  enqueue(value) { this.push(value); return this; }
  dequeue() { return this._arr.shift(); }
}

// 아래 코드가 통과되도록 Collection 클래스의 method를 작성하시오!
const stack = new Stack();
stack.push(1).push(2).push(3).push(5);
assert.deepStrictEqual(stack.toArray(), [1, 2, 3, 5]);
stack.pop();
assert.strictEqual(stack.peek, 3);
stack.remove();
assert.strictEqual(stack.poll, 2);
assert.deepStrictEqual(stack.toArray(), [1]);

const queue = new Queue();
queue.enqueue(1).enqueue(3).enqueue(5);
queue.dequeue();
assert.deepStrictEqual(queue.toArray(), [3, 5]);
assert.strictEqual(queue.poll, 3);
assert.deepStrictEqual(queue.toArray(), [5]);

if (!stack.isEmpty) stack.clear();
if (queue.size) queue.clear();

assert.deepStrictEqual(stack.toArray(), []);
assert.deepStrictEqual(queue.toArray(), []);