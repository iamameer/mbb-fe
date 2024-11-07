import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../../lib/api'; 
import { NewBook } from '../../lib/book.interface';
import Button from '../../components/Button';

const Create = () => {
  const navigate = useNavigate();
  const [newBook, setNewBook] = useState<NewBook>({
    title: '',
    author: '',
    description: '',
    price: 0,
    tags: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const value = field === 'tags' ? e.target.value.split(',').map(tag => tag.trim()) : e.target.value;
    
    setNewBook({
      ...newBook,
      [field]: value,
    });
  };

  const handleCreate = async () => {
    try {
      await createBook(newBook);
      navigate('/');
    } catch (error) {
      console.log('Error creating book:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Book</h1>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Title:</label>
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => handleChange(e, 'title')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Author:</label>
        <input
          type="text"
          value={newBook.author}
          onChange={(e) => handleChange(e, 'author')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Description:</label>
        <textarea
          value={newBook.description}
          onChange={(e) => handleChange(e, 'description')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Price:</label>
        <input
          type="number"
          value={newBook.price}
          onChange={(e) => handleChange(e, 'price')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Tags (Separate by comma):</label>
        <input
          type="text"
          value={newBook.tags?.join(', ') || ''}
          onChange={(e) => handleChange(e, 'tags')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <Button 
        text="Create" 
        textColor="text-white"
        bgColor="bg-blue-500" 
        hoverColor="px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
        onClick={handleCreate} />
      
      <Button 
        text="Cancel" 
        textColor="text-white"
        bgColor="bg-gray-500" 
        hoverColor="px-4 py-2 rounded-md hover:bg-gray-600 mt-4 sm:ml-4 ml-36"
        onClick={() => navigate('/')} />
    </div>
  );
};

export default Create;