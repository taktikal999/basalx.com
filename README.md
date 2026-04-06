# BasalX - Innovative Technology Solutions

A modern, professional website for BasalX, a startup technology company specializing in AI-powered solutions and software development.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 and React 18
- 📱 Mobile-first responsive layout
- 🎭 Smooth animations with framer-motion
- 🔒 TypeScript for type safety
- 📊 Easy to customize and extend

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
basalx.com/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   └── components/
│       └── layout/
│           ├── Navbar.tsx
│           ├── Footer.tsx
│           ├── Hero.tsx
│           ├── Features.tsx
│           ├── Stats.tsx
│           ├── Testimonials.tsx
│           └── CTA.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .env.example
```

## Customization

### Brand Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#6366f1',      // Change primary color
  secondary: '#06b6d4',    // Change secondary color
}
```

### Content

Update text and content in the component files:
- Homepage hero: `src/app/page.tsx`
- Company info: Update `Features.tsx`, `Testimonials.tsx`
- Contact info: Update `CTA.tsx`

### Metadata

Update site metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'BasalX - Your Company Tagline',
  description: 'Your company description',
  keywords: ['your', 'keywords', 'here'],
}
```

## Deploy to Vercel

### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Answer prompts:
# - Set up and deploy? Yes
# - Link to existing project? No
# - Project name: basalx
# - In which directory? ./
# - Want to override settings? No
```

### Option 2: Deploy via GitHub

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/basalx.com.git
git push -u origin main
```

2. Import to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework preset: Next.js
   - Click "Deploy"

## Configure Domain (IONOS)

After deploying to Vercel, link your IONOS domain:

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain: `basalx.com` (or www.basalx.com)
4. Vercel will show you DNS records to configure

### Step 2: Configure DNS in IONOS

1. Log into your IONOS account
2. Go to "Domains & SSL" → select your domain
3. Click "DNS" → "Edit DNS Settings"
4. Add/Modify records:

**For root domain (basalx.com):**
- Type: CNAME
- Host: @
- Value: cname.vercel-dns.com
- TTL: 3600 (1 hour)

**For www subdomain:**
- Type: CNAME
- Host: www
- Value: cname.vercel-dns.com
- TTL: 3600

5. Save changes

### Step 3: Verify Setup

- DNS propagation takes 5-30 minutes
- After propagation, visit `https://basalx.com`
- Vercel will automatically provide SSL certificate

## Environment Variables (Optional)

Create `.env.local` for any API integrations:

```env
NEXT_PUBLIC_APP_URL=https://basalx.com
NEXT_PUBLIC_SITE_NAME=BasalX
```

## Custom Build Commands

Add to `package.json` as needed:

```json
{
  "scripts": {
    "lint": "next lint",
    "type-check": "npx tsc --noEmit"
  }
}
```

## Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ using Next.js, Tailwind CSS, and modern web technologies.
