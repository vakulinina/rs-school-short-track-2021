const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    if (!this.value) {
      return 0;
    }
    if (!this.next) {
      return 1;
    }
    return 1 + this.next.size;
  }

  enqueue(element) {
    if (!this.value) {
      ListNode.call(this, element);
    } else if (!this.next) {
      this.next = new ListNode(element);
      Object.setPrototypeOf(this.next, Queue.prototype);
    } else {
      this.next.enqueue(element);
    }
  }

  dequeue() {
    const topElement = this.value;
    this.value = this.next ? this.next.value : undefined;
    this.next = this.next ? this.next.next : null;
    return topElement;
  }
}

module.exports = Queue;
