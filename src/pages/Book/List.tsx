import React, { useState, useEffect } from 'react';
import Searchbar from '../../components/Searchbar';
import TableView from '../../components/TableView';
import { getBookAll } from '../../lib/api';
import { Book } from '../../lib/book.interface';

const List = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBookAll();
        setBooks(booksData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto m-2 sm:m-10 text-sm sm:text-base">
      <Searchbar onSearch={handleSearch} />
      {filteredBooks.length > 0 ? (
        <TableView books={filteredBooks} />
      ) : (
        <p>Sorry, no books found.</p>
      )}
    </div>
  );
};

export default List;
