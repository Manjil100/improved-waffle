import { useState } from 'react'
import data from './data.json'

export default function App() {
  const [scps, setScps] = useState(data)
  const [selected, setSelected] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newScp, setNewScp] = useState({ name: '', class: '', image: '', description: '' })

  const addScp = () => {
    if (!newScp.name || !newScp.class || !newScp.image || !newScp.description) return
    const nextId = `SCP-${String(scps.length + 1).padStart(3, '0')}`
    setScps([...scps, { id: nextId, ...newScp }])
    setNewScp({ name: '', class: '', image: '', description: '' })
    setShowAddForm(false)
  }

  const deleteScp = (id) => {
    setScps(scps.filter(scp => scp.id !== id))
    setSelected(null)
  }

  return (
    <div className="container">
      <h1 className="title">SCP Catalogue</h1>
      <button onClick={() => setShowAddForm(true)} style={{ padding: '10px 20px', background: '#ff0000', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>Add New SCP</button>

      <div className="grid">
        {scps.map((scp) => (
          <div
            key={scp.id}
            className="card"
            onClick={() => setSelected(scp)}
          >
            <img src={scp.image} alt={scp.name} />
            <h2>{scp.name}</h2>
            <p>Class: {scp.class}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selected.name}</h2>
            <img src={selected.image} alt={selected.name} />
            <p><strong>Class:</strong> {selected.class}</p>
            <p>{selected.description}</p>
            <button onClick={() => setSelected(null)}>Close</button>
            <button onClick={() => deleteScp(selected.id)} style={{ marginLeft: '10px', background: '#cc0000' }}>Delete</button>
          </div>
        </div>
      )}

      {showAddForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New SCP</h2>
            <input
              type="text"
              placeholder="Name"
              value={newScp.name}
              onChange={e => setNewScp({ ...newScp, name: e.target.value })}
              style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
            />
            <select
              value={newScp.class}
              onChange={e => setNewScp({ ...newScp, class: e.target.value })}
              style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
            >
              <option value="">Select Class</option>
              <option value="Safe">Safe</option>
              <option value="Euclid">Euclid</option>
              <option value="Keter">Keter</option>
              <option value="Thaumiel">Thaumiel</option>
              <option value="Apollyon">Apollyon</option>
            </select>
            <input
              type="text"
              placeholder="Image URL"
              value={newScp.image}
              onChange={e => setNewScp({ ...newScp, image: e.target.value })}
              style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
            />
            <textarea
              placeholder="Description"
              value={newScp.description}
              onChange={e => setNewScp({ ...newScp, description: e.target.value })}
              style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', height: '100px' }}
            />
            <button onClick={addScp}>Add</button>
            <button onClick={() => setShowAddForm(false)} style={{ marginLeft: '10px', background: '#666' }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

// This code defines a React component for an SCP Catalogue application. It allows users to view a list of SCPs, see details of each SCP, add new SCPs, and delete existing ones. The component uses state to manage the list of SCPs, the currently selected SCP, and the form for adding new SCPs. The UI is styled with basic CSS for layout and interactivity.