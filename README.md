# DeHydra B2B - Next.js Migration

A fully converted, SEO-optimized Next.js 15 application for DeHydra B2B, featuring dynamic blog and product pages with enterprise-grade features.

## 🚀 Features

- **Next.js 15 App Router** - Modern React server components for better performance
- **Full SEO Optimization**
  - Dynamic metadata generation for all pages
  - Schema.org structured data (JSON-LD)
  - Sitemap.xml and robots.txt
  - Open Graph and Twitter card support
  - Canonical URLs
  - Mobile-friendly design
- **Dynamic Pages**
  - Product catalog with dynamic product pages
  - Blog system with article management
  - Automatic SEO meta tags per page
- **Performance Features**
  - Image optimization with next/image
  - CSS with Tailwind CSS v4
  - Motion animations with motion/react
  - Font optimization
  - Code splitting and lazy loading
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Type Safety** - Full TypeScript support

## 📋 Project Structure

```
app/
├── page.tsx              # Home page
├── about/page.tsx        # About page
├── contact/page.tsx      # Contact page
├── process/page.tsx      # Process page
├── quality/page.tsx      # Quality page
├── blog/
│   ├── page.tsx          # Blog listing
│   └── [slug]/page.tsx   # Dynamic blog article
├── products/
│   ├── page.tsx          # Products listing
│   └── [slug]/page.tsx   # Dynamic product detail
├── layout.tsx            # Root layout
├── globals.css           # Global styles
└── sitemap.ts            # Dynamic sitemap

components/
├── Navigation.tsx        # Navigation component
└── Footer.tsx           # Footer component

lib/
├── products.ts          # Product data and utilities
├── blog.ts              # Blog article data
├── metadata.ts          # SEO metadata generators
└── schema.ts            # Schema.org markup generators

public/
└── robots.txt           # SEO robots file
```

## 🛠️ Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dehydra-b2b
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your configuration

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌍 SEO Features

### Metadata
- Automatic meta tag generation per page
- Dynamic Open Graph images
- Twitter Card support
- Mobile viewport optimization
- Language and charset configuration

### Structured Data
- Organization schema (homepage)
- Product schema (product pages)
- Article/BlogPosting schema (blog pages)
- Breadcrumb navigation schema

### Technical SEO
- `sitemap.xml` - Automatically generated at `/sitemap.xml`
- `robots.txt` - Configured for optimal crawling
- Canonical URLs to prevent duplicate content
- Mobile-responsive design
- Fast page load times

## 📦 Managing Content

### Add a New Product
1. Edit `lib/products.ts`
2. Add product to `PRODUCTS` array
3. Product page automatically created at `/products/[slug]`

### Add a New Blog Article
1. Edit `lib/blog.ts`
2. Add article to `ARTICLES` array
3. Blog page automatically created at `/blog/[slug]`

## 🎨 Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **motion/react** - Smooth animations
- **Mobile-first** - Responsive design

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- AWS Amplify
- Netlify
- Self-hosted with `npm run build && npm start`

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Schema.org Docs](https://schema.org/)
