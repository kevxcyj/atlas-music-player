export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-4 text-center text-sm text-atlas-secondary border-t border-gray-200 dark:border-gray-800 mt-auto">
      &copy; {year} Atlas Music Player
    </footer>
  );
}
