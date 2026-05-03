import React, { useState } from "react";


function CrudApp() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (!newItem) return;
    setItems([...items, { id: Date.now(), name: newItem }]);
    setNewItem("");
  };

  const handleUpdate = () => {
    setItems(items.map(item =>
      item.id === editId ? { ...item, name: editValue } : item
    ));
    setEditId(null);
    setEditValue("");
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">React CRUD with Bootstrap</h2>

      {/* ✅ Bootstrap Link */}
      <a 
        href="https://react.dev" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-link mb-3"
      >
        Learn React (External Link)
      </a>

      <div className="input-group mb-3">
        <input
          className="form-control"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Enter item"
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
      </div>

      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editId === item.id ? (
              <div className="input-group">
                <input
                  className="form-control"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                />
                <button className="btn btn-success" onClick={handleUpdate}>Save</button>
              </div>
            ) : (
              <>
                <span>{item.name}</span>
                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => { setEditId(item.id); setEditValue(item.name); }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;