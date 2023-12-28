// pages/books/[slug].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getBookById } from '../../utils/api';

const BookDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBookById(slug);
        setBook(response.data.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{book.attributes.title}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
        <img
          src={book.attributes.cover}
          alt="Book cover"
          className="w-full md:w-1/3 md:mr-6 rounded-md shadow-md"
        />
        <div className="md:w-2/3">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Author:</span> {book.attributes.author}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Release Date:</span> {book.attributes.release_date}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Pages:</span> {book.attributes.pages}
          </p>
          <p className="text-gray-800">{book.attributes.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
