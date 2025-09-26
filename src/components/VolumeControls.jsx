import { Volume2 } from 'lucide-react';

const VolumeControls = () => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <button>
        <Volume2 size={24} className="text-black dark:text-white" />
      </button>
      <input
        type="range"
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        min="0"
        max="100"
      />
    </div>
  );
};

export default VolumeControls;