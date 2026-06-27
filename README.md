# Godavari Enterprises

Production-oriented React + Vite storefront and Express/MongoDB admin API for a premium apparel business.

## Local setup

1. Install Node.js 20+ and MongoDB 7+.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and replace `JWT_SECRET`.
4. Run `node server/seed.js` to create the initial administrator.
5. Run `npm start` for the API and web app together.

Storefront: `http://localhost:5173`  
Admin: `http://localhost:5173/admin/login`  
API health: `http://localhost:5000/api/health`

Demo UI login: `admin@godavari.in` / `admin123`. The production login endpoint uses bcrypt hashes and JWT; replace the seed password immediately.

## Architecture

- `src/components`: reusable storefront UI and layout
- `src/pages`: storefront and admin routes
- `src/context`: theme, wishlist, and bag state
- `server/models`: User, Product, Order, Inquiry, and Settings schemas
- `server/routes`: public catalog/enquiry/order endpoints and protected admin endpoints
- `server/middleware`: JWT authentication and role checks

## Deployment

Build the frontend with `npm run build` and deploy `dist/` to Vercel, Netlify, Cloudflare Pages, or an Nginx static host with SPA fallback to `index.html`. Deploy `server/` to Render, Railway, Fly.io, or a Node host. Set `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL`, and `PORT`; use MongoDB Atlas for managed production data. Serve both tiers over HTTPS and set the frontend API origin or reverse-proxy `/api` to the backend.

Before launch, connect a media provider such as Cloudinary/S3 to the supplied multi-image product API flow, change the seed credentials, configure a transactional email provider, replace demonstration contact details, and run Lighthouse against the production CDN.
