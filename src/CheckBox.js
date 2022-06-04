import React, { useState } from 'react';

const CheckBox = ({ onChange, label, value }) => {
  return (
    <div style={{ display: 'flex', paddingBottom: '1rem' }}>
      <label style={{ flex: '1' }}> {label} </label>
      <input
        style={{ flex: '1' }}
        type="checkbox"
        onChange={onChange}
        checked={value}
        value={value}
      />
    </div>
  );
};

export default CheckBox;
