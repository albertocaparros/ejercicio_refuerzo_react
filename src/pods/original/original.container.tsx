import React, { useState, useEffect } from 'react';
import { getOriginalData } from './original.api';
import { OriginalComponent } from './original.component';

export const OriginalContainer: React.FC = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(getOriginalData());
  }, []);

  return (
    <>
      {info
        ? info.map(tarjeta => {
            return <OriginalComponent key={tarjeta.id} {...tarjeta} />;
          })
        : null}
    </>
  );
};
