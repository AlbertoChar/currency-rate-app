# currency-rate-node
Node.js server built with TypeScript to provide backend functionality for a currency conversion application.


# Currency Converter Node Server

This project is a **Node.js** server built with **TypeScript** for managing currency conversions. It provides real-time exchange rates, currency conversion functionality, and historical exchange rates for the past seven Mondays. The server interacts with the [Frankfurter API](https://www.frankfurter.app/) to fetch and process currency data.

## Features

- Fetch current exchange rates.
- Perform currency conversions between any two supported currencies.
- Retrieve historical exchange rates for a base currency over the past seven Mondays.
- RESTful API endpoints for integration with front-end applications.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- TypeScript globally installed (`npm install -g typescript`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/currency-converter-node.git
   cd currency-converter-node
Install dependencies:
npm install

Start the server:
For development (hot-reload):
npm run dev

For production:
npm run build
npm start


## Folder Structure
src/
   controllers/        # Route controllers
   handlers/           # Business logic and API orchestration
   services/           # Utility and reusable logic (e.g., date calculations)
   routes/             # API route definitions
   app.ts              # Main application entry point


## Scripts
npm run dev: Run the server in development mode with hot-reloading.

npm run build: Compile the TypeScript code to JavaScript.

npm start: Start the compiled JavaScript server in production.



## API Endpoints
Base URL
http://localhost:3000/api

# Endpoints
Get Current Exchange Rates

GET /rates
Response: JSON object containing the latest currency rates.

Convert Currency
POST /convert
Body:
{
  "amount": 100,
  "from": "USD",
  "to": "EUR"
}
Response: JSON object containing the converted amount.

Get Historical Rates
GET /historical
Query Parameters:
base: The base currency (e.g., USD).
Response: JSON object with historical rates for the past 7 Mondays.


## Technologies Used
Node.js: Backend runtime.
TypeScript: Strongly-typed JavaScript for improved development.
Express.js: Web framework for building RESTful APIs.
Axios: HTTP client for interacting with the Frankfurter API.
Cors: Middleware for enabling Cross-Origin Resource Sharing.
