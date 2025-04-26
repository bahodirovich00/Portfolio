import { useEffect, useState } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold mb-4 text-primary-950 dark:text-white">
          <span className="text-accent-950">{'<'}</span>
          Developer
          <span className="text-accent-950">{'/>'}</span>
        </div>
        <div className="w-64 h-0.5 bg-gray-200 dark:bg-primary-800 overflow-hidden rounded-full">
          <div className="loading-bar h-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loading;