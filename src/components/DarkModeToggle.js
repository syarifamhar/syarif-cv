import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="mt-6 p-2 rounded-full bg-brown-200 dark:bg-brown-700 text-brown-900 dark:text-brown-100 shadow transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
} 