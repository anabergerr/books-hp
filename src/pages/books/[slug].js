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
    <div>
      <h1>{book.attributes.title}</h1>
      <p>{book.attributes.release_date}</p>
      <p>{book.attributes.author}</p>
      <p>{book.attributes.pages}</p>
      <img width={200} src={book.attributes.cover} alt="Book cover" />
      <p>{book.attributes.summary}</p>
    </div>
  );
};

export default BookDetailPage;
