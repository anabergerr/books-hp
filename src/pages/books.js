// pages/BooksPage.js
import { useEffect, useState } from 'react';
import { getBooks } from '../utils/api';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBooks();
        
        // Verificar se a resposta contém um array de livros
        if (Array.isArray(response.data.data)) {
          setBooks(response.data.data);
        } else {
          console.error('API response does not contain an array of books:>>', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
    console.log('livrossss',books[0].id)
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
            <li key={book.id}>{book.attributes.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
