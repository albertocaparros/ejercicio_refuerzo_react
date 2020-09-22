import React, { useState, useEffect } from 'react';
import { getRemakeData } from './remake.api';
import { RemakeComponent } from './remake.component';

export const RemakeContainer: React.FC = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(getRemakeData());
  }, []);

  return (
    <>
      {info
        ? info.map(tarjeta => {
            return <RemakeComponent {...tarjeta} />;
          })
        : null}
    </>
  );
};
