# Wisdom Kara's Portfolio

A modern, responsive portfolio website built with cutting-edge web technologies. Showcasing projects, skills, experience, and professional contact information with a sleek, interactive user interface.

**Live Demo:** [https://wisdomkara.github.io/wisdomkara-portfolio/](https://wisdomkara.github.io/wisdomkara-portfolio/)

---

## 🌟 Features

- **Modern Design** - Clean, professional UI built with Tailwind CSS
- **Interactive Components** - Rich UI components from shadcn-ui
- **Responsive Layout** - Fully responsive design that works on all devices
- **Dark/Light Theme** - Theme switching support with React Context
- **Contact Form** - Integrated email functionality with EmailJS
- **Smooth Animations** - Interactive animations with GSAP
- **Fast Performance** - Optimized with Vite for quick load times
- **Type-Safe** - Full TypeScript support for better code quality

---

## 🛠️ Tech Stack

### Frontend Framework

- **[React](https://react.dev/)** - A JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Vite](https://vitejs.dev/)** - Next generation frontend build tool

### UI & Styling

- **[shadcn-ui](https://ui.shadcn.com/)** - High-quality React components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components

### Libraries & Tools

- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[GSAP](https://greensock.com/gsap/)** - Animation library
- **[EmailJS](https://www.emailjs.com/)** - Email service integration
- **[TanStack Query](https://tanstack.com/query/)** - Data fetching
- **[React Hook Form](https://react-hook-form.com/)** - Efficient form handling
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Development Tools

- **[ESLint](https://eslint.org/)** - Code quality tool
- **[PostCSS](https://postcss.org/)** - CSS transformations

---

## 📦 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn-ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Experience.tsx  # Work experience
│   ├── Footer.tsx      # Footer
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── contexts/           # React Context for state management
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── App.tsx             # Main App component
└── main.tsx            # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/wisdomkara/wisdomkara-portfolio.git
   cd wisdomkara-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:8080`

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📝 Available Scripts

- **`npm run dev`** - Start the development server
- **`npm run build`** - Build for production
- **`npm run build:dev`** - Build in development mode
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run deploy`** - Deploy to GitHub Pages

---

## 🚢 Deployment

This portfolio is configured to deploy to GitHub Pages. The deployment process is automated:

```bash
npm run deploy
```

This command will:

1. Build the project for production
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make it accessible at your GitHub Pages URL

---

## 🎨 Customization

### Theme Configuration

- Modify `src/contexts/ThemeContext.tsx` for theme settings
- Adjust Tailwind colors in `tailwind.config.ts`

### Component Styling

- UI components use Tailwind CSS utility classes
- Component styles can be customized in `src/components/`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to the main page in `src/pages/Index.tsx`
3. Style using Tailwind CSS classes

---

## 📧 Contact Form Setup

The contact form uses EmailJS for email delivery:

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Update the EmailJS initialization in `src/App.tsx` with your Public Key
3. Configure your email service in EmailJS dashboard

---

## 🤝 Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome!

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 About

This is a personal portfolio showcasing my work as a developer. For more information or to get in touch, visit the live site or use the contact form.

**GitHub:** [https://github.com/wisdomkara](https://github.com/wisdomkara)

---

**Last Updated:** December 2025
