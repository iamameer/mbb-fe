import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders "Add book 📗" button and navigates to /create', () => {
    render(
        <Navbar />
    );

    const addButton = screen.getByText('Add book 📗');
    expect(addButton).toBeInTheDocument();
  });
});