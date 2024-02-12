# Airbnb Clone

This project is a responsive online homestay marketplace developed using Next.js, TypeScript, MongoDB, and Prisma. It integrates Tailwind CSS for modern design, NextAuth for secure authentication, and optimizes code for better quality and early error detection.

## Features

- **Tailwind Design**: Utilizes Tailwind CSS for modern and customizable design.
- **Full Responsiveness**: Ensures seamless user experience across various devices.
- **Credential Authentication**: Implements secure authentication using email/password.
- **Google Authentication**: Offers authentication via Google accounts.
- **Image Upload using Cloudinary CDN**: Enables users to upload images with Cloudinary as the content delivery network.
- **Client Form Validation and Handling using react-hook-form**: Validates and handles forms efficiently on the client-side.
- **Server Error Handling using react-toast**: Handles errors gracefully on the server side.
- **Calendars with react-date-range**: Integrates calendars for date selection.
- **Page Loading State**: Displays loading state during page loading.
- **Page Empty State**: Handles empty states gracefully.
- **Booking / Reservation System**: Implements a system for booking and reservations.
- **Guest Reservation Cancellation**: Allows guests to cancel their reservations.
- **Creation and Deletion of Properties**: Facilitates property creation and deletion.
- **Pricing Calculation**: Calculates pricing based on various factors.
- **Advanced Search Algorithm**: Utilizes an advanced search algorithm for filtering properties based on category, date range, map location, number of guests, rooms, and bathrooms. Filters out properties with reservations in the desired date range.
- **Favorites System**: Implements a favorites system for users.
- **POST and DELETE Routes in Route Handlers**: Demonstrates writing POST and DELETE routes in route handlers (app/api).




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
