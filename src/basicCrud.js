import React, { useState } from 'react';

const Crud = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');

  const addData = () => {
    setData([...data, newData]);
    setNewData('');
  };

  const deleteData = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const updateData = (id, newData) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return newData;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1>CRUD Operations in ReactJS</h1>
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <button onClick={addData}>Add Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}
            <button onClick={() => deleteData(item.id)}>Delete</button>
            <button onClick={() => updateData(item.id, { id: item.id + 1 })}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
