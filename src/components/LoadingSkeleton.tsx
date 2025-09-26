const LoadingSkeleton = () => {
  return (
    <div className="p-8 min-h-screen">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 animate-pulse">
        {/* Currently Playing Skeleton */}
        <div className="flex-1 flex flex-col items-center space-y-6">
          <div className="w-full aspect-square bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="w-48 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-full flex items-center justify-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
          <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>
        
        {/* Playlist Skeleton */}
        <div className="flex-1 flex flex-col space-y-4">
          <div className="w-36 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="space-y-2">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
                <div className="flex-1 space-y-2">
                  <div className="w-4/5 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="w-3/5 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="w-10 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;