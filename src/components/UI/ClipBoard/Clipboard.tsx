import React, { useEffect } from 'react';

import { useDataContext } from 'context/DataContext';
import { ReactComponent as CheckMark } from 'assets/icons/CheckMark.svg';

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
