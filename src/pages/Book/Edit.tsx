import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBookByTitle, updateBook } from '../../lib/api';
import { Book } from '../../lib/book.interface';
import Button from '../../components/Button';

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [book, setBook] = useState<Book | null>(null);
  const [newBook, setNewBook] = useState<Book | null>(null);
  const queryParams = new URLSearchParams(location.search);
  const bookId = queryParams.get('id');

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (bookId) {
        try {
          const book = await getBookByTitle(bookId);
          setBook(book);
          setNewBook({
            id: book.id,
            title: book.title,
            author: book.author,
            description: book.description || '',
            price: book.price,
            tags: book.tags || []
          });
        } catch (error) {
          console.log('Error fetching book details:', error);
          navigate('/');
        }
      }
    };

    fetchBookDetails();
  }, [bookId, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    if (newBook) {
      setNewBook({
        ...newBook,
        [field]: e.target.value,
      });
    }
  };

  const handleUpdate = async () => {
    if (newBook) {
      try {
        await updateBook(newBook);
        navigate(`/view?id=${bookId}`);
      } catch (error) {
        console.log('Error updating book:', error);
      }
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="sm:flex sm:justify-start sm:px-6 mb-4">
        <img src={book.image} alt={book.title} className="w-60 sm:w-80 mx-auto sm:mx-0" />
        <div className="px-6 sm:ml-8 flex-1">
          <h1 className="text-2xl font-bold mb-4 pt-5 sm:pt-0">Edit: {book.title}</h1>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Title:</label>
            <input
              type="text"
              value={newBook?.title || ''}
              onChange={(e) => handleChange(e, 'title')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Author:</label>
            <input
              type="text"
              value={newBook?.author || ''}
              onChange={(e) => handleChange(e, 'author')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Description:</label>
            <textarea
              value={newBook?.description || ''}
              onChange={(e) => handleChange(e, 'description')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Price:</label>
            <input
              type="number"
              value={newBook?.price || 0}
              onChange={(e) => handleChange(e, 'price')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Tags (Separate by comma):</label>
            <input
              type="text"
              value={newBook?.tags?.join(', ') || ''}
              onChange={(e) => handleChange(e, 'tags')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <Button 
            text="Update" 
            textColor="text-white"
            bgColor="bg-blue-500" 
            hoverColor="px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
            onClick={handleUpdate} />

          <Button 
            text="Cancel" 
            textColor="text-white"
            bgColor="bg-gray-500" 
            hoverColor="px-4 py-2 rounded-md hover:bg-gray-600 mt-4 sm:ml-4 ml-36"
            onClick={() => navigate(`/view?id=${book.id}`)} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
