# sqrAI-terminal

SQRAI-terminal is a web application that allows users to scrape data from X accounts, manage the scraped data then use it to train agent bot. Also, users can train agent bot with github repos, files, links. The application is built using Next.js, React, and integrates with Solana for authentication.

## Features

- Scrape data from X accounts
- Manage scraped data
- Real-time logs display
- Train agent bot with github repos, document files or news/article links
- Solana wallet authentication
- Twitter OAuth integration
- Auto post to social (twitter, discord)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm or npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/sqrDAO/sqrAI-terminal.git
    cd sqrAI-terminal
    ```

2. Install dependencies:

    ```sh
    pnpm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```env
    API_URL=http://your-api-url
    NEXT_PUBLIC_SCRAPE_API=http://your-scrape-api-url
    TWITTER_CLIENT_ID=your-twitter-client-id # Need to set up twitter app in developer portal to get this
    TWITTER_CLIENT_SECRET=your-twitter-client-secret # Need to set up twitter app in developer portal to get this
    NEXTAUTH_URL=http://localhost:3000
    POSTGRES_URL=your-postgres-connection-string
    NEXT_PUBLIC_AGENTID=your-agent-id # Just for dev environment, it should be get from api
    ```

4. Set up PostgreSQL:

    Ensure you have a PostgreSQL database running and update the `POSTGRES_URL` in your `.env` file with the connection string.

5. Run the development server:

    ```sh
    pnpm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app`: Contains the Next.js app pages and components.
- `lib`: Contains utility functions and database connection setup.
- `api`: Contains API routes for authentication and other backend functionalities.
- `public`: Contains static assets.
- `styles/`: Contains global styles.
- `components/`: Contains core components.
- `hooks/`: Contains custom hooks.

## Authentication

### Solana Wallet Authentication

The application uses Solana wallet authentication. Users can sign in using their Solana wallet by providing their public key, signature, and a message.

### Twitter OAuth2

The application integrates with Twitter OAuth2 for connect to your twitter account, so the agent bot can use auto post feature. Ensure you have set up your Twitter app correctly in the Twitter Developer Portal and updated the environment variables.

## Deployment

To deploy the application, you can use platforms like Vercel, Netlify, or any other hosting provider that supports Next.js.

1. Build the application:

    ```sh
    pnpm run build
    # or
    yarn build
    ```

2. Start the application:

    ```sh
    pnpm start
    # or
    yarn start
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
