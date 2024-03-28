export const utilityFetchMoviews = async () => {
  try {
    const response = await fetch('http://localhost:8080/films');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.films;
  }
  catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}