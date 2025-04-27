//const API_KEY = '294b857649fb4b32a78965fe8c113b3f';
const API_KEY = '5e5da94937bd4a389134cbfbfc735d3d';
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
        image: item.urlToImage || 'https://img.freepik.com/free-vector/gradient-breaking-news-background_23-2151142406.jpg?t=st=1745767406~exp=1745771006~hmac=fbb5ea226a931bfbf8a57edac1a821d6f646598058a294a6e55ea5ee1192d02a&w=996',
        source: item.source.name || 'Unknown Source', // ✅ include this
        articleUrl: item.url
      }));
    }

    throw new Error('Failed to fetch news');
  } catch (error) {
    console.error(error);
    return [];
  }
};

