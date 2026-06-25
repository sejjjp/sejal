import React from 'react';

export function Header() {
  return (
    <header className="px-12 py-8 flex justify-between items-center">
      <div className="text-xl text-gray-900">
        Sejal Kautkar
      </div>
      <nav className="flex gap-12">
        <a href="#behance" className="text-gray-700 hover:text-gray-900 transition-colors">
          Behance
        </a>
        <a href="#linkedin" className="text-gray-700 hover:text-gray-900 transition-colors">
          LinkedIn
        </a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}
