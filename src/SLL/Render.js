import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './style.css';

function LinkedListNode({ value, hasNext }) {
  return (
    <div className="node">
      <div className="value">{value}</div>
      {hasNext && <FaArrowRight className="arrow" />}
    </div>
  );
}

function RenderLinkedList({ linkedList }) {
  let current = linkedList.head;
  const nodes = [];

  let index = 0; // Add index variable

  while (current) {
    nodes.push(
      <LinkedListNode
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
