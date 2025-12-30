# Hoisach 2025 Crowdfunding

A modern, full-stack crowdfunding platform built with cutting-edge web technologies. This project showcases a complete crowdfunding solution with a beautiful UI, database management, and real-time updates.

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06b6d4?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-6.7-2d3748?logo=prisma)

## Overview

Hoisach is a next-generation crowdfunding platform designed to connect creators with backers. Whether you're launching a creative project, building a community initiative, or seeking funding for innovation, Hoisach provides a seamless experience for both project creators and supporters.

## ✨ Features

- **Modern UI/UX**: Responsive design with smooth animations and transitions
- **Real-time Updates**: Live project updates and backer notifications
- **Project Management**: Create, manage, and track crowdfunding campaigns
- **User Authentication**: Secure user authentication and account management
- **Payment Integration**: Support for multiple payment methods
- **Progress Tracking**: Visual progress indicators and funding analytics
- **Community Features**: Comments, updates, and backer interactions
- **Dark Mode Support**: Built-in dark mode with `next-themes`
- **Mobile Responsive**: Fully optimized for all device sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager
- A database (configured via Prisma)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mncuchiinhuttt/hoisach2025-crowdfunding.git
   cd hoisach2025-crowdfunding
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL=your_database_url
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 📁 Project Structure

```
hoisach2025-crowdfunding/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   ├── layout/          # Layout components
│   ├── lib/             # Utility functions and helpers
│   └── ...
├── prisma/              # Database schema and migrations
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Project dependencies
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.3**: React framework with server-side rendering
- **React 19**: Modern UI library with latest features
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Advanced animations and transitions
- **GSAP**: Professional animation library

### UI Components & Libraries
- **Radix UI**: Unstyled, accessible components
- **Lucide React**: Modern icon library
- **Phosphor Icons**: Versatile icon set
- **Sonner**: Toast notifications
- **React Day Picker**: Date selection component

### Backend & Database
- **Prisma**: Modern ORM for database management
- **@prisma/client**: Prisma client for database queries

### Development Tools
- **ESLint**: Code linting
- **Next.js built-in optimization**: Font and image optimization
- **Turbopack**: Next.gen bundler for faster builds

## 📝 Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🎨 Customization

### Tailwind CSS
Customize the design system in `tailwind.config.js`:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
      fonts: {
        // Add custom fonts
      }
    }
  }
}
```

### Database Schema
Update your data model in `prisma/schema.prisma` and run migrations:
```bash
npx prisma migrate dev --name your_migration_name
```

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/hoisach

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Authentication (if applicable)
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

## 📦 Dependencies Overview

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.3.2 | React framework |
| react | 19.0.0 | UI library |
| typescript | 5.0 | Type safety |
| tailwindcss | 4.0 | Styling |
| prisma | 6.7.0 | Database ORM |
| framer-motion | 12.12.1 | Animations |
| gsap | 3.13.0 | Advanced animations |
| lucide-react | 0.510.0 | Icons |

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/) and sign in
3. Click "New Project" and import your repository
4. Set environment variables in Vercel dashboard
5. Click "Deploy"

### Deploy on Other Platforms

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
```

**Manual Deployment**
```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/mncuchiinhuttt/hoisach2025-crowdfunding/issues).

## 🔗 Useful Links

- [Live Demo](https://crowdfundinghoisach.testing.mncuchiinhuttt.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---
