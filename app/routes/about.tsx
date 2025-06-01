import type { Route } from "./+types/about";

export function meta() {
  return [
    { title: "About - Test Game" },
    { name: "description", content: "Learn more about our React Router test game application." },
  ];
}

export default function About() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0 max-w-4xl">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
            About Test Game
          </h1>
        </header>
        
        <div className="w-full space-y-8 px-4">
          <section className="rounded-3xl border border-gray-200 p-8 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Welcome to Our Application
            </h2>
            <p className="leading-7 text-gray-700 dark:text-gray-300 mb-4">
              This is a modern React Router application built with cutting-edge web technologies. 
              Our test game platform is designed to showcase the power and flexibility of React Router v7, 
              combined with a beautiful and responsive user interface.
            </p>
            <p className="leading-7 text-gray-700 dark:text-gray-300">
              Whether you're here to explore our gaming features or learn about modern web development 
              practices, we're excited to have you on this journey with us.
            </p>
          </section>

          <section className="rounded-3xl border border-gray-200 p-8 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Frontend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    React 19 with modern hooks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    React Router v7 for navigation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    TypeScript for type safety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Tailwind CSS for styling
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Development</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Vite for fast development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Hot module replacement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Modern ES modules
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Docker ready deployment
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 p-8 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Fast Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimized for speed with modern bundling and code splitting
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Type Safe</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Built with TypeScript for reliable and maintainable code
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 5l3-3" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Modern Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Beautiful, responsive UI with dark mode support
                </p>
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
