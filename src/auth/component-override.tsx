import * as React from 'react';
import { FC } from 'react';

const ComponentOverride: FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <header
        style={{
          backgroundColor: ' #222',
          height: '150px',
          padding: '20px',
          color: ' white',
        }}
      >
        <h1 style={{ fontSize: '1.5rem' }}>successful</h1>
      </header>
    </div>
  );
};

export default ComponentOverride;
