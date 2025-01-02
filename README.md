# Candy Store

An e-commerce store built with modern technologies, featuring authentication via Clerk, payment processing using Stripe, and the powerful T3 stack for robust development.

## Features

- **Authentication**: Clerk is integrated for seamless user authentication.
- **Payment Gateway**: Stripe handles secure payments.
- **Frontend Framework**: Next.js with server-side rendering and API routes.
- **Styling**: TailwindCSS for modern, responsive design.
- **Database**: Prisma ORM with a PostgreSQL database.
- **Type Safety**: TypeScript throughout the stack for reliable development.

---

## Technologies Used

- **Frontend**: Next.js, React, TailwindCSS
- **Authentication**: Clerk
- **Payment Gateway**: Stripe
- **Backend**: tRPC, Prisma, TypeScript
- **Database**: PostgreSQL
- **Hosting**: Vercel (for frontend), Stripe Webhooks

---

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (>= 16.x)
- npm or yarn
- PostgreSQL (for database)

### Clone the Repository
```bash
git clone https://github.com/your-username/candy-store.git
cd candy-store
```

### Install Dependencies
```bash
yarn install
# or
npm install
```

### Configure Environment Variables
Create a `.env` file in the root of the project and add the following:
```env
# Clerk Configuration
NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API>
CLERK_API_KEY=<Your Clerk API Key>

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<Your Stripe Publishable Key>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
STRIPE_WEBHOOK_SECRET=<Your Stripe Webhook Secret>

# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/candy_store
```

### Setup Database
Run the following commands to migrate the database schema:
```bash
yarn prisma db push
# or
npx prisma migrate dev --name init
```

### Run the Development Server
Start the application locally:
```bash
yarn dev
# or
npm run dev
```

Visit the application at [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Vercel
1. Connect your repository to Vercel.
2. Add all environment variables in the Vercel dashboard.
3. Deploy the application.

### Stripe Webhooks
Ensure your Stripe webhook endpoint is configured correctly to receive events.
Use the Stripe CLI to forward webhooks to your local server during development:
```bash
stripe listen --forward-to localhost:3000/api/stripe-webhook
```

---

## Project Structure
```plaintext
.
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets
├── src/
│   ├── pages/          # Next.js pages (routes)
│   ├── components/     # React components
│   ├── styles/         # TailwindCSS styles
│   ├── server/         # tRPC routers and backend logic
│   ├── utils/          # Utility functions
│   └── env.mjs         # Environment variable validation
└── .env                # Environment variables
```

---

## Key Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Build the production application.
- `yarn start`: Start the production server.
- `yarn prisma studio`: Open Prisma Studio to manage the database.

---

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

