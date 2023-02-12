import React from 'react';

import './page-layout.scss';

interface propTypes {
  children: React.ReactNode;
}

export const PageLayout: React.FC<propTypes> = ({ children }) => {
  return <div className="page-layout">{children}</div>;
};
