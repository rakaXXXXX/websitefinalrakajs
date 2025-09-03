export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-6 text-center mt-8 border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm font-medium tracking-wide opacity-80">
        &copy; {currentYear} Portfolio. All rights reserved.
      </p>
      <p className="text-xs mt-2 opacity-60 italic">
        Built with ❤️ using Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
