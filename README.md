# React Mini-Projects Portfolio

A collection of React applications built with Vite, showcasing various features and best practices.

## 🚀 Live Projects

*Links will be added after deployment on Vercel*

- **Todo App** - `Projects/1-app` - [Live Demo](#) *(Coming soon)*
- **Bharat Clock** - `Projects/2-bharat-clock` - [Live Demo](#) *(Coming soon)*
- **Calculator** - `Projects/4-calculator-1/calculator` - [Live Demo](#) *(Coming soon)*
- **Food Items (Fragments)** - `18-Fragments/learning-fragments` - [Live Demo](#) *(Coming soon)*
- **Social Media App** - `Projects/7-social-media` - [Live Demo](#) *(Coming soon)*

## 📁 Project Structure

```
first-react-app/
├── Projects/
│   ├── 1-app/              # Todo application with add/delete functionality
│   ├── 2-bharat-clock/      # Live updating clock with React hooks
│   ├── 4-calculator-1/
│   │   └── calculator/     # Full-featured calculator
│   └── 7-social-media/      # Social media UI with Bootstrap
├── 18-Fragments/
│   └── learning-fragments/  # Food items list with React Fragments
└── src/                     # Root app (optional)
```

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **Vite** - Fast build tool and dev server
- **Bootstrap 5** - Modern UI components
- **ESLint** - Code quality and linting

## 🚀 Deployment

All projects are configured for deployment on **Vercel** with proper `vercel.json` configuration files.

### Deploying to Vercel

1. **Connect GitHub to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Authorize Vercel to access your repositories

2. **Deploy Each Project**
   - Click "Add New → Project"
   - Select repository: `Amitrajput111/reactAp`
   - For each project, set the **Root Directory**:
     - Todo App: `Projects/1-app`
     - Clock: `Projects/2-bharat-clock`
     - Calculator: `Projects/4-calculator-1/calculator`
     - Fragments: `18-Fragments/learning-fragments`
     - Social Media: `Projects/7-social-media`
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Configuration**
   - Each project has a `vercel.json` file with proper settings
   - Build command: `npm run build`
   - Output directory: `dist`
   - SPA routing configured for React Router compatibility

## 🏃 Local Development

Each project is independent. To run locally:

```bash
# Navigate to project directory
cd Projects/1-app  # or any other project

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## ✨ Features

### Todo App (`Projects/1-app`)
- Add todos with name and due date
- Delete todos
- State management with React hooks
- Bootstrap styling

### Bharat Clock (`Projects/2-bharat-clock`)
- Live updating time display
- Updates every second using `useEffect` and `setInterval`
- Bootstrap styling

### Calculator (`Projects/4-calculator-1/calculator`)
- Full calculator functionality
- Basic arithmetic operations
- Error handling
- CSS Modules for styling

### Food Items (`18-Fragments/learning-fragments`)
- Add food items on Enter key
- React Fragments usage
- Error message display
- Bootstrap styling

### Social Media App (`Projects/7-social-media`)
- Modern social media UI
- Header, Sidebar, Footer components
- Post creation form
- Bootstrap components
- Responsive layout

## 📝 Notes

- All projects use **React 19** with modern hooks
- Each project is **self-contained** with its own dependencies
- **Production-ready** configurations included
- **ESLint** configured for code quality
- **Vercel** deployment configs included for easy hosting

## 🔧 Troubleshooting

If you encounter build errors on Vercel:

1. Check that the **Root Directory** is set correctly
2. Verify `package.json` has correct build script: `"build": "vite build"`
3. Ensure all dependencies are in `package.json` (not just devDependencies)
4. Check Vercel build logs for specific error messages

## 📄 License

This project is for learning and portfolio purposes.

---

**Built with ❤️ using React + Vite**
