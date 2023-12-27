// pages/BooksPage.js
import { useEffect, useState } from 'react';
import { getBooks } from '../../utils/api';
import Link from 'next/link';


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
    console.log(books);
    fetchData();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <p>{book.attributes.title}</p>
            <p>{book.attributes.release_date}</p>
            <p>{book.attributes.author}</p>
            <p>{book.attributes.pages}</p>
            <img width={100} src={book.attributes.cover}/>
            <a href={`/books/${book.attributes.slug}`}>
              <a>Clique para saber mais</a>
            </a>

            <p>------------</p>
          </div>
            
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
