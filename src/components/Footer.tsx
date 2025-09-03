export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-4 bg-gray-100 dark:bg-gray-900 text-center mt-8 text-gray-900 dark:text-white">
      <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
    </footer>
  );
}
