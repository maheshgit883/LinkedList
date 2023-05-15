import React, { useState } from 'react';
import Select from 'react-select';
import LinkedList from './LinkedList';
import RenderLinkedList from './Render';
import './style.css';

const Operations = [
  { label: " ", value: "" },
  { label: "Push", value: 1 },
  { label: "Insert At", value: 2 },
  { label: "Delete", value: 3 },
  { label: "Update the value of", value: 4 },
  { label: "Get Element at", value: 5 },
  { label: "Get Index of", value: 6 },
  { label: "Get Size", value: 7 },
  { label: "Clear", value: 8 }
];

function DoublyLinkedList() {
  const [selectedOperation, setSelectedOperation] = useState(0);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [linkedList, setLinkedList] = useState(() => new LinkedList());
  const [errorMessage, setErrorMessage] = useState("");

  const handleOperationChange = (selectedOption) => {
    setSelectedOperation(selectedOption.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleIndexChange = (event) => {
    setIndex(event.target.value);
  };

const handleOperationSubmit = () => {
  try {
    if (selectedOperation === 1) {
      if (value.trim() === "") {
        setErrorMessage("Please enter a value");
        return;
      }
      linkedList.push(value);
    } else if (selectedOperation === 2) {
      if (value.trim() === "" || index.trim() === "") {
        setErrorMessage("Please enter both value and index");
        return;
      }
      linkedList.insertAt(value, index);
    } else if (selectedOperation === 3) {
      if (value.trim() === "") {
        setErrorMessage("Please enter an value");
        return;
      }
      linkedList.delete(value);
    } else if (selectedOperation === 4) {
      if (index.trim() === "" || value.trim() === "") {
        setErrorMessage("Please enter both index and new value");
        return;
      }
      linkedList.updateValueAt(index, value);
    } else if (selectedOperation === 5) {
      if (index.trim() === "") {
        setErrorMessage("Please enter an index");
        return;
      }
      linkedList.getElementAt(index);
    } else if (selectedOperation === 6) {
      if (value.trim() === "") {
        setErrorMessage("Please enter a value");
        return;
      }
      linkedList.getIndex(value);
    } else if (selectedOperation === 7) {
      linkedList.getSize();
      setSelectedOperation(0);
    } else if (selectedOperation === 8) {
      linkedList.clear();
      setSelectedOperation(0);
    }
    setLinkedList(linkedList);
    console.log("LinkedList:", linkedList);
    setErrorMessage("");
    setValue("");
    setIndex("");
  } catch (error) {
    console.error("An error occurred:", error);
    setErrorMessage("An error occurred");
  }
};


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 operation-container">
          <Select
            options={Operations}
            placeholder="Select Operation from menu"
            onChange={handleOperationChange}
          />
          <div className="input-group">
            {selectedOperation === 1 && (
              <input
                type="text"
                placeholder="Enter Value"
                value={value}
                onChange={handleValueChange}
                className="input-field"
              />
            )}
            {selectedOperation === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Enter Value"
                  value={value}
                  onChange={handleValueChange}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Enter Index"
                  value={index}
                  onChange={handleIndexChange}
                  className="input-field"
                />
              </>
            )}
            {selectedOperation === 3 && (
            <>
              <input
                type="text"
                placeholder="Enter value"
                value={value}
                onChange={handleValueChange}
                className="input-field"
              />
            </>
          )}
          {selectedOperation === 4 && (
            <>
              <input
                type="text"
                placeholder="Enter Index"
                value={index}
                onChange={handleIndexChange}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Enter New Value"
                value={value}
                onChange={handleValueChange}
                className="input-field"
              />
            </>
          )}
          {selectedOperation === 5 && (
            <>
              <input
                type="text"
                placeholder="Enter Index"
                value={index}
                onChange={handleIndexChange}
                className="input-field"
              />
            </>
          )}
          {selectedOperation === 6 && (
            <>
              <input
                type="text"
                placeholder="Enter Value"
                value={value}
                onChange={handleValueChange}
                className="input-field"
              />
            </>
          )}
          </div>
          <button onClick={handleOperationSubmit} className="submit-button">
            Submit
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {linkedList.message && (<div className="message">{linkedList.message}</div> )}
          <RenderLinkedList linkedList={linkedList} />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default DoublyLinkedList;
