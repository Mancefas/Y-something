import React from 'react';

import Clipboard from 'components/UI/ClipBoard';
import NumberPlateBtn from 'components/UI/NumberPlateBtn';
import PageLayout from 'components/Layouts/PageLayout';
import { nrPlates } from 'store/data';

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
