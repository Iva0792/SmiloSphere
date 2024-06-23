import React, { useState } from 'react';

function SearchPatients() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch('https://smilosphere.cloud/search.php?q=${query}');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search patients" 
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPatients;
