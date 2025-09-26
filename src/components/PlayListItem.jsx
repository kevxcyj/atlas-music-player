const PlaylistItem = ({ title, artist, length, isSelected }) => {
  const itemClasses = isSelected
    ? "flex items-center justify-between p-4 rounded-lg bg-bg-light dark:bg-bg-dark text-primary-text dark:text-bg-light shadow-md"
    : "flex items-center justify-between p-4 rounded-lg hover:bg-bg-light dark:hover:bg-bg-dark cursor-pointer transition duration-300 ease-in-out transform hover:scale-105";

  return (
    <div className={itemClasses}>
      <div className="flex-1">
        <h4 className="text-primary-text dark:text-bg-light font-bold text-lg">{title}</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{artist}</p>
      </div>
      <span className="text-primary-text dark:text-bg-light text-sm">{length}</span>
    </div>
  );
};

export default PlaylistItem;