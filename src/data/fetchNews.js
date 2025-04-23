const API_KEY = '294b857649fb4b32a78965fe8c113b3f'; // replace this with your real API key
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${API_KEY}`;

export const fetchNews = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    if (data.status === 'ok') {
      return data.articles.map((item, index) => ({
        id: index + 1,
        title: item.title,
        summary: item.description || 'No summary available.',
        image: item.urlToImage || 'https://via.placeholder.com/400x200',
      }));
    }

    throw new Error('Failed to fetch news');
  } catch (error) {
    console.error(error);
    return [];
  }
};
