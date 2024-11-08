const VITE_BE_API_URL = import.meta.env.VITE_BE_API_URL;
import { Book, NewBook } from "./book.interface";

export async function getBookAll() {
  const url = `${VITE_BE_API_URL}/library`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`getBookAll failed`, error);
    throw error;
  }
}

export async function getBookByTitle(id?: string) {
  const url = `${VITE_BE_API_URL}/library/id=${id}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`getBooksByTitle failed`, error);
    throw error;
  }
}

export async function updateBook(book: Book) {
  const url = `${VITE_BE_API_URL}/library/id=${book.id}`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`updateBook failed`, error);
    throw error;
  }
}

export async function createBook(newBook: NewBook) {
  const url = `${VITE_BE_API_URL}/library`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`createBook failed`, error);
    throw error;
  }
}

export async function deleteBook(id: string): Promise<void> {
  const url = `${VITE_BE_API_URL}/library/id=${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(`deleteBook failed`, error);
    throw error;
  }
}
