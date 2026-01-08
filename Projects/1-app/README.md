# 📝 Todo Application

A modern, responsive Todo application built with React 19 and Bootstrap 5. Manage your tasks efficiently with an intuitive interface.

## 🌐 Live Demo

**[🚀 View Live Application](https://1-app-theta.vercel.app)**

## ✨ Features

- ✅ **Add Todos** - Create new tasks with custom names and due dates
- 🗑️ **Delete Todos** - Remove completed or unwanted tasks
- 📅 **Due Date Management** - Set and track due dates for each task
- 🎨 **Modern UI** - Beautiful Bootstrap 5 styling
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 📱 **Responsive Design** - Works seamlessly on all devices

## 🛠️ Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite 6** - Lightning-fast build tool
- **Bootstrap 5.3** - Professional UI components
- **ESLint** - Code quality assurance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Amitrajput111/reactAp.git

# Navigate to project directory
cd Projects/1-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
1-app/
├── src/
│   ├── components/
│   │   ├── AddTodo.jsx          # Todo input form
│   │   ├── TodoItems.jsx         # Todo list container
│   │   ├── TodoItem.jsx          # Individual todo item
│   │   └── AppName.jsx           # App header
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
├── public/                       # Static assets
├── vercel.json                   # Vercel deployment config
└── package.json                  # Dependencies
```

## 🎯 Key Features Implementation

- **State Management**: Uses React `useState` hook for managing todo list
- **Component Architecture**: Modular component structure for maintainability
- **Form Handling**: Controlled components for input management
- **Event Handling**: Delete functionality with proper event propagation

## 📦 Deployment

This project is configured for automatic deployment on Vercel. The `vercel.json` file includes:

- Build command: `npm run build`
- Output directory: `dist`
- SPA routing configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available for learning purposes.

---

**Built with ❤️ using React + Vite**

