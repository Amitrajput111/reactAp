# 🧮 Calculator Application

A fully functional calculator application built with React 19. Perform basic arithmetic operations with a clean, modern interface.

## 🌐 Live Demo

**[🚀 View Live Application](https://calculator-chi-three-94.vercel.app)**

## ✨ Features

- ➕ **Basic Operations** - Addition, subtraction, multiplication, division
- 🔢 **Number Input** - Support for decimal numbers
- 🧹 **Clear Function** - Reset calculator with one click
- ⚖️ **Calculate** - Evaluate expressions instantly
- 🎨 **Modern UI** - Clean, intuitive design with CSS Modules
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized React rendering

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **Vite 6** - Fast build tool
- **CSS Modules** - Scoped styling
- **ESLint** - Code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Amitrajput111/reactAp.git

# Navigate to project directory
cd Projects/4-calculator-1/calculator

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
calculator/
├── src/
│   ├── components/
│   │   ├── Display.jsx              # Calculator display screen
│   │   ├── Display.module.css       # Display styles
│   │   ├── ButtonsContainer.jsx     # Button grid component
│   │   └── ButtonsContainer.module.css
│   ├── App.jsx                      # Main calculator logic
│   ├── App.module.css               # App styles
│   └── main.jsx                     # Entry point
├── public/                          # Static assets
├── vercel.json                      # Vercel deployment config
└── package.json                     # Dependencies
```

## 🎯 Key Features Implementation

- **State Management**: React `useState` for calculator display value
- **Event Handling**: Button click handlers for all operations
- **Expression Evaluation**: Safe expression evaluation
- **Error Handling**: Graceful error handling for invalid expressions
- **Component Architecture**: Modular button and display components

## 🔧 Supported Operations

- **Numbers**: 0-9
- **Operators**: +, -, *, /
- **Decimal Point**: .
- **Clear**: C (clears all)
- **Equals**: = (calculates result)

## 📦 Deployment

Deployed on Vercel with automatic builds. The `vercel.json` includes proper SPA routing configuration.

## ⚠️ Note

This calculator uses `eval()` for expression evaluation. For production applications, consider using a proper expression parser library for enhanced security.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available for learning purposes.

---

**Built with ❤️ using React + Vite**
