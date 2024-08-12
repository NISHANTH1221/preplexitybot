---

# Web Scraping and Summarization Tool

This project is a web application built with React and Tailwind CSS. It utilizes Selenium WebDriver for web scraping and the GROQ API for generating summaries of recent news. Users can enter a topic they want to search for, and the application automates a Chrome session to search Google, scrape the first link in the news tab, and then forwards the content to an AI for summarization. The summarized result is displayed on the frontend.

## Features

- **Search Integration:** Enter a topic to search for on Google.
- **Automated Web Scraping:** Selenium WebDriver opens a Chrome session, performs a Google search, and scrapes the first result.
- **AI Summarization:** The scraped content is sent to the GROQ API for summarization.
- **Responsive UI:** Built with React and styled using Tailwind CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [ChromeDriver](https://sites.google.com/chromium.org/driver/) (compatible with your Chrome version)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd <repository-directory>
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**
   - Navigate to the `backend` directory.
   - Install the required npm packages:
     ```bash
     npm install
     ```

4. **Configure Environment Variables:**
   - Create a `.env` file in the `frontend` directory and add your VITE_BACKEND_URL.
   - Create a `.env` file in the `backend` directory and add your GROQ_API_KEY.

5. **Start the development servers:**
   - Start the Express server:
     ```bash
     cd backend
     npm start
     ```
   - Start the React development server:
     ```bash
     cd ../frontend
     npm run dev
     ```

## Usage

1. Open your web browser and navigate to `http://localhost:5173`.
2. Enter the topic you want to search for in the input field.
3. Click the search button. Selenium WebDriver will perform the search, scrape the first link, and the content will be summarized using the GROQ API.
4. The summarized result will be displayed on the frontend.

## Project Structure

- `frontend/` - Contains the React application and Tailwind CSS styling.
- `backend/` - Contains the Express.js server and the Selenium WebDriver script for scraping and summarizing content.

## Contributing

Feel free to submit issues and pull requests. Contributions to improve the functionality or fix bugs are welcome.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/) for the UI framework.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Selenium WebDriver](https://www.selenium.dev/) for web scraping.
- [GROQ API](https://groq.com/) for summarizing content.

---

Let me know if there’s anything else you’d like to adjust!