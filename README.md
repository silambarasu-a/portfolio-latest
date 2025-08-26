# Modern Portfolio Website

A minimal, responsive portfolio website built with Next.js 15, MongoDB, and Tailwind CSS. Features include smooth animations, working contact form, and SEO optimization.

## 🚀 Features

- **Modern Design**: Clean, minimal design with smooth animations using Framer Motion
- **Fully Responsive**: Mobile-first design that works on all devices
- **Contact Form**: Working contact form that saves submissions to MongoDB
- **SEO Optimized**: Meta tags, sitemap, and structured data for better search rankings
- **Fast Loading**: Built with Next.js 15 and optimized for performance
- **TypeScript**: Fully typed for better development experience

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Database**: MongoDB with Mongoose
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   # Or use MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

4. **Start MongoDB** (if using local MongoDB)
   ```bash
   # Start MongoDB service
   sudo service mongod start
   # Or if using Homebrew on macOS:
   brew services start mongodb-community
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── about/
│   │   ├── layout.tsx       # About page metadata
│   │   └── page.tsx         # About page component
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Contact form API endpoint
│   ├── contact/
│   │   ├── layout.tsx       # Contact page metadata
│   │   └── page.tsx         # Contact page component
│   ├── projects/
│   │   ├── layout.tsx       # Projects page metadata
│   │   └── page.tsx         # Projects page component
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── robots.txt           # SEO robots file
│   └── sitemap.ts           # Dynamic sitemap
├── components/
│   ├── Footer.tsx           # Footer component
│   └── Navigation.tsx       # Navigation component
├── lib/
│   └── mongodb.ts           # MongoDB connection utility
├── models/
│   └── Contact.ts           # Contact form data model
└── public/                  # Static assets
```

## 🎨 Customization

### 1. Personal Information
Update the following files with your information:
- `app/layout.tsx` - Meta tags and site title
- `app/page.tsx` - Hero section content
- `app/about/page.tsx` - About page content
- `app/projects/page.tsx` - Project showcase
- `components/Footer.tsx` - Social links and contact info
- `components/Navigation.tsx` - Logo/brand name

### 2. Styling
- Modify `app/globals.css` for global styles
- Update Tailwind classes in components for design changes
- Customize colors in Tailwind config (if needed)

### 3. Content
- Add your projects to the `projects` array in `app/projects/page.tsx`
- Update skills and experience in `app/about/page.tsx`
- Modify contact information in `app/contact/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your `MONGODB_URI` environment variable in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS
- DigitalOcean
- Railway

## 📧 Contact Form Setup

The contact form saves submissions to MongoDB. To set up:

1. **Local MongoDB**: Install MongoDB locally and use `mongodb://localhost:27017/portfolio`
2. **MongoDB Atlas**: Create a free cluster and use the connection string
3. **Environment Variable**: Add `MONGODB_URI` to your `.env.local` file

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Mobile Responsiveness

The portfolio is built with a mobile-first approach:
- Responsive navigation with mobile menu
- Flexible grid layouts
- Touch-friendly interactive elements
- Optimized images and content

## 🎯 SEO Features

- Meta tags for all pages
- Open Graph and Twitter Card tags
- Dynamic sitemap generation
- Robots.txt file
- Structured data ready
- Fast loading times

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons
