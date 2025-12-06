"use client";

import Link from "next/link";

export default function HomeComponent() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Push links to the right */}
            <div className="ml-auto flex space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                FAQ
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content / Hero Section */}
      <main className="grow flex items-center justify-center">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Welcome to your Authentication App!!
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Build stunning web applications with Next.js and .
            </p>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Get Started
                </div>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                  Browse templates
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          &copy; 2024 Authentication App. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
