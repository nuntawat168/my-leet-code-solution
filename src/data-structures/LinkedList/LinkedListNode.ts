export default class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T, next?: LinkedListNode<T>) {
    this.value = value;
    this.next = next ? next : null;
  }

  toString(callback?: (value: T) => string): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
