## NewsRadar

NewsRadar is a sleek and user-friendly news aggregation platform that allows users to stay informed by exploring real-time news articles across multiple categories. With a focus on readability and accessibility, users can view top headlines, search for articles, filter by news categories, and save articles they want to revisit later.

## Features

- **Real-Time News Feed**: View top headlines and breaking news from various trusted sources.
- **Search**: Search for articles by keyword to quickly find stories that match your interests.
- **Category Filters**: Filter news articles by categories like technology, politics, health, and more.
- **Source & Region Filters**: Narrow your news feed by your preferred news source or region.
- **Bookmarking**: Save articles you want to read later with a simple bookmarking feature.
- **Responsive & Clean UI**: A modern, intuitive user interface designed for easy reading and browsing.

## User Stories

1. **View Top Headlines by Category**  
   As a user, I can view top headlines by category so that I can stay updated on topics that interest me.

2. **Search for Articles**  
   As a user, I can search for news articles by keyword so that I can quickly find relevant stories.

3. **Filter by Source or Region**  
   As a user, I can filter news by source or region so that I can access content from preferred outlets or locations.

4. **Bookmark Articles**  
   As a user, I can bookmark/save articles so that I can read them later at my convenience.

5. **Clean and Readable UI**  
   As a user, I can enjoy a clean and readable UI so that I can comfortably browse and digest news content.

## How It Works

NewsRadar aggregates news from various reliable sources through the **News API**. The platform fetches real-time headlines and categorizes them for easy browsing. Users can filter articles based on specific categories like tech, politics, health, and more. Additionally, users can search articles by keywords or filter them based on preferred sources or regions.

### Technologies Used
- **Frontend**: React.js
- **Backend**: News API (for fetching real-time headlines)
- **Styling**: Tailwind CSS for a responsive, clean layout
- **State Management**: React's `useState` and `useEffect` hooks

## Setup Instructions

To get started with NewsRadar locally:

### Prerequisites
- Node.js installed on your local machine
- A code editor (like Visual Studio Code)

### Clone the Repository
```bash
git clone https://github.com/your-username/news-radar.git
cd news-radar
```
### Install Dependencies
```bash
npm install
```
### Set Up News API Key
- Visit [NewsAPI](https://newsdata.io/?gad_source=1&gbraid=0AAAAA9oRX_JreJhflMT-DQhmYCW4I4iNx&gclid=CjwKCAjwq7fABhB2EiwAwk-YbMMuaWZFpYi0GH3aXwOp1VtpCUa0-3oOEw4_zb16EC9YsCg-0t17CxoC0mIQAvD_BwE) and sign up for an API key.

### Run the Development Server
```bash
npm run dev
```
## Contribution
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## Author
[Ken Tuei](https://github.com/KenTuei)

## License
This project is licensed under the MIT License.