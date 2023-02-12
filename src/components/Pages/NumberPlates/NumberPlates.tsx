import React from 'react';

import Clipboard from 'Components/UI/ClipBoard';
import NumberPlateBtn from 'Components/UI/NumberPlateBtn';
import PageLayout from 'Components/Layouts/PageLayout';
import { nrPlates } from 'Store/data';

import './number-plates.scss';

export const NumberPlates: React.FC = () => {
  return (
    <PageLayout>
      <Clipboard />
      <div className="number-plates__container">
        {nrPlates.map((e) => (
          <NumberPlateBtn key={e.shortNr} shortNr={e.shortNr} />
        ))}
      </div>
    </PageLayout>
  );
};
