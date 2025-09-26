import placeholder from '../assets/placeholder.svg';

const CoverArt = () => {
  return (
    <div className="w-full aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden dark:bg-gray-800">
      <img src={placeholder} alt="Cover Art" className="object-cover w-full h-full" />
    </div>
  );
};

export default CoverArt;