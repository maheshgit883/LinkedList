import React from 'react';
import { BsArrowLeftRight } from 'react-icons/bs';
import './style.css';

function DoublyLinkedListNode({ value, hasNext }) {
  return (
    <div className="node">
      <div className="value">{value}</div>
      {hasNext && <BsArrowLeftRight className="arrow" />}
    </div>
  );
}

function RenderLinkedList({ linkedList }) {
  let current = linkedList.head;
  const nodes = [];

  let index = 0; // Add index variable

  while (current) {
    nodes.push(
      <DoublyLinkedListNode
        key={index} // Assign unique index as the key value
        value={current.value}
        hasNext={current.next !== null}
      />
    );
    current = current.next;
    index++; // Increment index
  }

  return (
    <div className="linked-list-container">
      <div className="linked-list">{nodes}</div>
    </div>
  );
}

export default RenderLinkedList;
