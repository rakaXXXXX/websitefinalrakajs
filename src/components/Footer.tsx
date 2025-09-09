export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-6 text-center mt-8 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <p className="text-sm font-medium tracking-wide text-gray-800 dark:text-gray-200">
        &copy; {currentYear} Portfolio. All rights reserved.
      </p>
      <p className="text-xs mt-2 text-gray-600 dark:text-gray-400 italic">
        Built with ❤️ using Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
