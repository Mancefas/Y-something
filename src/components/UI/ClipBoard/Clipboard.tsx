import React, { useEffect } from 'react';

import { useDataContext } from 'Context/DataContext';

import CheckMark from './CheckMark';

export const Clipboard: React.FC = () => {
  const { showClipboard, setShowClipboard } = useDataContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClipboard(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [showClipboard]);

  return <>{showClipboard && <CheckMark />}</>;
};
