// pages/BooksPage.js

import { useEffect, useState } from 'react';
import { getBooks } from '../../utils/api';
import Header from "@/components/Header"
import Card from "@/components/Card"

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBooks();
        if (Array.isArray(response.data.data)) {
          setBooks(response.data.data);
        } else {
          console.error('API response does not contain an array of books:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.id} data={book} type="books" />
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksPage;
