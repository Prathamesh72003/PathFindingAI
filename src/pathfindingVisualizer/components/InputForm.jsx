import React, { useState } from 'react';

function InputForm() {
  const [startRow, setStartRow] = useState(0);
  const [startCol, setStartCol] = useState(1);
  const [endRow, setEndRow] = useState(11);
  const [endCol, setEndCol] = useState(30);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startRow') {
      setStartRow(parseInt(value, 10));
    } else if (name === 'startCol') {
      setStartCol(parseInt(value, 10));
    } else if (name === 'endRow') {
      setEndRow(parseInt(value, 10));
    } else if (name === 'endCol') {
      setEndCol(parseInt(value, 10));
    }
  };

  const handleSubmit = () => {
    const resultArray = getStartFinishNode(startRow, startCol, endRow, endCol);
    console.log('Result Array:', resultArray);
    // You can use resultArray as needed in your application logic
  };

  return (
    <div>
      <label>
        Start Row:
        <input
          type="number"
          name="startRow"
          value={startRow}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Start Column:
        <input
          type="number"
          name="startCol"
          value={startCol}
          onChange={handleInputChange}
        />
      </label>

      <label>
        End Row:
        <input
          type="number"
          name="endRow"
          value={endRow}
          onChange={handleInputChange}
        />
      </label>

      <label>
        End Column:
        <input
          type="number"
          name="endCol"
          value={endCol}
          onChange={handleInputChange}
        />
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputForm;
