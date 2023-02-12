import React, { useEffect } from 'react';

import { useDataContext } from 'Context/DataContext';
import { ReactComponent as CheckMark } from 'Assets/Icons/CheckMark.svg';

import './clipboard.scss';

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

  return (
    <div className={`clipboard${showClipboard ? '__show' : ''}`}>
      <CheckMark />
    </div>
  );
};
