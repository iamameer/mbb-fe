import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBookByTitle } from '../../lib/api';
import { Book } from '../../lib/book.interface';
import Button from '../../components/Button';

const Details = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [book, setBook] = useState<Book | null>(null);

  const queryParams = new URLSearchParams(location.search);
  const bookId = queryParams.get('id');

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (bookId) {
        try {
          const book = await getBookByTitle(bookId);
          setBook(book);
        } catch (error) {
          console.log('Error fetching book details:', error);
          navigate('/');
        }
      }
    };

    fetchBookDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="sm:flex sm:justify-start sm:px-6 mb-4">
        <img src={book.image} alt={book.title} 
        className="w-60 sm:w-80 mx-auto sm:mx-0" />
        
        <div className="px-6 sm:ml-8 flex-1">
          <h1 className="text-2xl font-bold mb-4 pt-5 sm:pt-0">{book.title}</h1>
  
          <table className="min-w-full table-auto">
            <tbody>
              <tr>
                <td className="text-sm font-semibold py-2">Author:</td>
                <td className="text-lg p-2">{book.author}</td>
              </tr>
              <tr>
                <td className="text-sm font-semibold py-2">Description:</td>
                <td className="text-md p-2">{book.description}</td>
              </tr>
              <tr>
                <td className="text-sm font-semibold py-2">Price:</td>
                <td className="text-lg font-bold text-blue-600 p-2">${book.price.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="text-sm font-semibold py-2">Tags:</td>
                <td className="text-md p-2">{book.tags?.join(', ') || 'No tags'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Button 
        text="Back" 
        textColor="text-white"
        bgColor="bg-amber-500" 
        hoverColor="hover:bg-amber-800 mb-4 ml-16 mt-10 px-4 py-2 rounded"
        onClick={() => navigate('/')} />

      <Button 
        text="Edit" 
        textColor="text-white"
        bgColor="bg-blue-500" 
        hoverColor="hover:bg-blue-800 mb-4 ml-28 mt-10 px-4 py-2 rounded"
        onClick={() => navigate(`/edit?id=${book.id}`)} />
    </div>
  );
}  

export default Details;