# URL Shortener with CI/CD

A modern URL shortening service built with Node.js, Express, and MongoDB, featuring continuous integration and deployment through GitHub Actions and Render.

## Features

- Shorten long URLs to compact, shareable links
- Automatic redirection from shortened URLs to original destinations
- RESTful API endpoints
- MongoDB database integration
- Continuous Integration/Continuous Deployment (CI/CD) pipeline

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Dependencies**:
  - dotenv: Environment variable management
  - mongoose: MongoDB object modeling
  - nanoid: Unique ID generation for shortened URLs

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB instance (local or cloud)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SagarKarmoker/url-shortener-ci-cd.git
   cd url-shortener-ci-cd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Shorten URL
- **POST** `/shorten`
  - Request body:
    ```json
    {
      "full": "https://your-long-url.com"
    }
    ```
  - Response:
    ```json
    {
      "short": "generated-short-id"
    }
    ```

### Access Shortened URL
- **GET** `/:short`
  - Redirects to the original URL if found
  - Returns 404 if not found

## Development

- Run in development mode with hot reload:
  ```bash
  npm run dev
  ```

- Start in production mode:
  ```bash
  npm start
  ```

## Deployment

This project is configured for automatic deployment to Render through GitHub Actions. The CI/CD pipeline is triggered on pushes to the main branch.

### Environment Variables

Ensure the following environment variables are set in your Render dashboard:

- `MONGO_URI`: Your MongoDB connection string
- `PORT`: Port for the application to run on (default: 3000)

## License

This project is licensed under the ISC License - see the LICENSE file for details.