import React from 'react';

import Clipboard from '../../UI/ClipBoard';
import { nrPlates } from '../../../store/data';

import './number-plates.scss';
import NumberPlateBtn from '../../UI/NumberPlateBtn';

export const NumberPlates: React.FC = () => {
  return (
    <>
      <Clipboard />
      <div className="number-plates__container">
        {nrPlates.map((e) => (
          <NumberPlateBtn key={e.shortNr} shortNr={e.shortNr} />
        ))}
      </div>
    </>
  );
};
