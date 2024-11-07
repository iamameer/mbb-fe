import Button from './Button';
import { Book } from '../lib/book.interface';

const BookCards = ({ books }: { books: Book[] }) => {
  return (
    <div className="container mx-auto p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white border border-gray-200 rounded-lg shadow-md p-3 sm:p-4 hover:shadow-2xl"
        >
          <div
            className="mb-2 sm:mb-4 h-10 sm:h-40 bg-gray-200 flex items-center justify-center rounded-md"
            style={{
              backgroundImage: `url(${book.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {!book.image && <span className="text-gray-500">No Image Available</span>}
          </div>

          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{book.title}</h3>
          <span className="block sm:hidden text-md font-bold text-blue-600 mb-2">
            ${book.price.toFixed(2)}
          </span>

          <div className='hidden sm:block'>
            <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Author: {book.author}</p>
            <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2">
              {book.description ? book.description.slice(0, 50) + '...' : 'No description available'}
            </p>
            <p className="hidden sm:block text-md font-bold text-blue-600 mb-2">
              ${book.price.toFixed(2)}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">
              {book.tags ? book.tags.join(', ') : 'No tags'}
            </p>
          </div>

          <div className="flex justify-end space-x-1 sm:space-x-2">
            <Button text="Details" bgColor="bg-blue-500 mx-2" hoverColor="bg-blue-600" />
            <Button text="Delete" bgColor="bg-red-500" hoverColor="bg-red-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCards;
