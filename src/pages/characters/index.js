import { getCharacters } from '../../utils/api';
import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters(searchTerm,currentPage, pageSize)
        setCharacters(response.data.data);
        setTotalItems(response.data.meta.total);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
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
    <>
    <Header />
    <div className="container mb-20 mt-20 p-8">
      <h1 className="text-3xl font-bold underline mb-4">Lista de Personagens</h1>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <p className="mb-2">Quantidade de itens: {totalItems}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <Card key={character.id} data={character} type="characters" />
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={handleLoadMore}
          disabled={characters.length < pageSize}
          className="py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer"
        >
          Carregar Mais
        </button>
      </div>  
    </div>
    <Footer />
  </>
  );
};

export default Character;
