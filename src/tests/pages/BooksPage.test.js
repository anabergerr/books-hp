import { render, findByText, act } from '@testing-library/react';
import BooksPage from '@/pages/books';
import { getBooks } from '../../utils/api';

jest.mock('../../utils/api', () => ({
  getBooks: jest.fn(),
}));

test('renders books page', async () => {
    getBooks.mockResolvedValueOnce({ data: { data: [] } });

    await act(async () => {
      render(<BooksPage />);
    });
    
    const element = await findByText('Books');
    expect(element).toBeInTheDocument();
});
