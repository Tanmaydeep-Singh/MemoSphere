import { useState } from "react";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-background text-text"} transition-all`}>
      <header className="bg-primary py-4 text-center text-white">
        <h1 className="text-4xl font-semibold">Welcome to My Homepage</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mt-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/80"
        >
          Toggle Dark Mode
        </button>
      </header>

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-primary">About Me</h2>
          <p className="mt-4 text-lg text-gray-700">
            Hello! I m a web developer who loves working with Next.js, TypeScript, and Tailwind CSS.
            I enjoy building beautiful and functional websites with clean, maintainable code.
          </p>
        </div>
      </main>

      <footer className="bg-primary text-center py-4 text-white">
        <p className="text-sm">&copy; 2025 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
