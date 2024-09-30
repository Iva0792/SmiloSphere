import React, { useState, useEffect } from 'react';

function SearchPatients() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      searchDatabase(debouncedQuery);
    }
  }, [debouncedQuery]);

  const searchDatabase = async (query) => {
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
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPatients;
