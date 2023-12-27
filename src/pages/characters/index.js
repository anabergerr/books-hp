// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://api.potterdb.com/v1/characters?filter[name_cont]=${searchTerm}&page[number]=${currentPage}&page[size]=${pageSize}`
        );
        setCharacters(response.data.data);
        setTotalItems(response.data.meta.total);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [searchTerm, currentPage, pageSize]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <h1>Lista de Personagens</h1>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <p>Quantidade de itens: {totalItems}</p>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <div>
              <p>{character.attributes.name}</p>
              <a href={`/characters/${encodeURIComponent(character.attributes.slug)}`}>
                <a>Veja Mais</a>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleLoadMore} disabled={characters.length < pageSize}>
          Carregar Mais
        </button>
      </div>
    </div>
  );
};

export default Character;
