import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  // Retrieve techs from localstorage when component did mount
  useEffect(() => {
    const storedTechs = localStorage.getItem('techs');

    if (storedTechs) {
      setTechs(JSON.parse(storedTechs));
    }
  }, []);

  // Add techs to localStorage when component did update
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  // Calculates techs lenght only when the tech value has changed
  const techsSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>{`Você tem ${techsSize} tecnologias`}</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button onClick={handleAdd} type="button">
        Add
      </button>
    </>
  );
}

export default App;
