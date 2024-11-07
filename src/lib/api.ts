const VITE_BE_API_URL = import.meta.env.VITE_BE_API_URL;

export async function getBookAll() {
  const url = `${VITE_BE_API_URL}/library`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    console.log(response);

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
