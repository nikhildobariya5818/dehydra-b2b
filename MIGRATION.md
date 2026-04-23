# Vite to Next.js 15 Migration Guide

This document details the complete migration from Vite to Next.js 15 with full SEO optimization and dynamic content management.

## 📊 Migration Summary

**Before (Vite):**
- Client-side routing with React Router
- Hardcoded data in component files
- Manual meta tag management
- Limited SEO capabilities
- Image optimization not built-in

**After (Next.js 15):**
- Server-side rendering with App Router
- Centralized data management (lib/products.ts, lib/blog.ts)
- Automatic metadata generation
- Full SEO with schema.org markup
- Built-in image optimization
- Dynamic sitemap and robots.txt

## 🔄 What Changed

### 1. Project Structure

```
BEFORE (Vite):
src/
├── main.tsx
├── App.tsx (with React Router)
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Products.tsx
│   └── ...
├── components/
├── data/products.ts
├── index.css
└── vite-env.d.ts

AFTER (Next.js):
app/
├── page.tsx (Home)
├── about/page.tsx
├── blog/
│   ├── page.tsx (List)
│   └── [slug]/page.tsx (Detail)
├── products/
│   ├── page.tsx (List)
│   └── [slug]/page.tsx (Detail)
├── layout.tsx
├── globals.css
└── sitemap.ts

lib/
├── products.ts
├── blog.ts
├── metadata.ts
└── schema.ts
```

### 2. Routing Changes

**Vite (React Router):**
```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products/:slug" element={<ProductDetail />} />
  </Routes>
</BrowserRouter>
```

**Next.js (File-based routing):**
- `app/page.tsx` = `/`
- `app/about/page.tsx` = `/about`
- `app/products/[slug]/page.tsx` = `/products/:slug`

No routing code needed - file structure defines routes!

### 3. Navigation Changes

**Before (Vite):**
```tsx
<Link to="/about">About</Link>
```

**After (Next.js):**
```tsx
import Link from 'next/link'
<Link href="/about">About</Link>
```

### 4. Data Management

**Before (Vite):**
```tsx
// Hardcoded in Blog.tsx
const ARTICLES = [
  { id: 1, title: '...', content: '...' }
]
```

**After (Next.js):**
```tsx
// Centralized in lib/blog.ts
export const ARTICLES = [
  { id: 1, slug: 'article-1', title: '...', content: '...' }
]

// Used in app/blog/[slug]/page.tsx
import { ARTICLES } from '@/lib/blog'
export async function generateStaticParams() {
  return ARTICLES.map(article => ({ slug: article.slug }))
}
```

### 5. SEO & Metadata

**Before (Vite):**
Manual meta tags in HTML:
```html
<meta name="description" content="..." />
<meta property="og:title" content="..." />
```

**After (Next.js):**
Automatic per-page metadata:
```tsx
import { generateArticleMetadata } from '@/lib/metadata'

export const metadata = generateArticleMetadata(article)
```

Generated sitemap:
```tsx
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://site.com/', lastModified: new Date() },
    // ... auto-generated for all products and articles
  ]
}
```

### 6. Dependencies

**Before (Vite):**
```json
{
  "vite": "^6.2.0",
  "react-router-dom": "^7.14.2",
  "@vitejs/plugin-react": "^5.0.4"
}
```

**After (Next.js):**
```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

Removed: React Router (Next.js has built-in routing)
Removed: Vite (Next.js handles bundling)

## 🎯 Key Improvements

### Performance
- ✅ Server-side rendering (SSR) by default
- ✅ Automatic code splitting
- ✅ Image optimization with `next/image`
- ✅ Prefetching of linked pages
- ✅ Built-in caching strategies

### SEO
- ✅ Dynamic metadata per page
- ✅ Schema.org structured data
- ✅ Automatic sitemap generation
- ✅ Open Graph image support
- ✅ Canonical URL support
- ✅ Mobile viewport optimization

### Developer Experience
- ✅ File-based routing (no config needed)
- ✅ API routes in same app (app/api/)
- ✅ Automatic TypeScript support
- ✅ Hot module replacement (HMR)
- ✅ Better error messages

### Maintainability
- ✅ Centralized data management
- ✅ Reusable metadata generators
- ✅ Consistent page patterns
- ✅ Type-safe metadata

## 📝 Content Management

### Products
**File:** `lib/products.ts`

All products are managed in one place. Adding a product:
1. Add to `PRODUCTS` array
2. Include `slug` for URL generation
3. Product page auto-creates at `/products/[slug]`

**Dynamic page routing:**
```tsx
// app/products/[slug]/page.tsx
export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}
```

### Blog Articles
**File:** `lib/blog.ts`

Articles managed centrally with automatic page generation at `/blog/[slug]`

Features:
- Auto-calculated reading time
- Category support
- Author attribution
- Published date tracking

## 🔧 Configuration Files

**Created:**
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS v4
- `postcss.config.js` - PostCSS plugins
- `lib/metadata.ts` - SEO metadata helpers
- `lib/schema.ts` - Schema.org generators

**Modified:**
- `tsconfig.json` - Updated for Next.js
- `package.json` - Removed Vite, added Next.js
- `.env.example` - New environment variables

**Removed:**
- `vite.config.ts`
- `tsconfig.node.json`
- `src/` directory

## 🚀 Deployment Changes

**Vite (Static Build):**
```bash
npm run build  # Creates dist/ folder
# Served as static files
```

**Next.js (Dynamic Build):**
```bash
npm run build  # Creates .next/ folder
npm start     # Node.js server runs
```

**Vercel Deployment:**
- Vite: Static site deployment
- Next.js: Serverless functions + static assets
- Better caching, faster deployments

## 🔐 Environment Variables

**Before:**
- Limited to `VITE_` prefix
- Client-side only

**After:**
- `NEXT_PUBLIC_` for client-side
- Server-side vars available in API routes
- Better security for sensitive data

## 📚 File Migration Mapping

| Vite File | Next.js Location | Notes |
|-----------|------------------|-------|
| src/main.tsx | - | Removed (not needed) |
| src/App.tsx | app/layout.tsx | Root layout |
| src/pages/Home.tsx | app/page.tsx | Home page |
| src/pages/About.tsx | app/about/page.tsx | About page |
| src/pages/Blog.tsx | app/blog/page.tsx | Blog listing |
| src/pages/ProductDetail.tsx | app/products/[slug]/page.tsx | Dynamic route |
| src/components/Layout.tsx | Split into app/layout.tsx + Navigation/Footer | Root layout components |
| src/data/products.ts | lib/products.ts | Product data |
| src/index.css | app/globals.css | Global styles |

## ✅ Testing Checklist

- [x] Home page displays correctly
- [x] Navigation between pages works
- [x] Product pages render dynamically
- [x] Blog articles display with metadata
- [x] SEO meta tags present
- [x] Sitemap.xml generates
- [x] robots.txt accessible
- [x] Images load correctly
- [x] Responsive design works
- [x] TypeScript compilation passes

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Change port in next.config.ts or use:
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Missing Environment Variables
```bash
# Copy and configure:
cp .env.example .env.local
```

## 📞 Support

For questions about this migration, refer to:
1. Next.js official documentation
2. Check lib/ files for data structure examples
3. Review app/ directory for page patterns
