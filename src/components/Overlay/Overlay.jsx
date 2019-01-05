import React from 'react';

import classes from './Overlay.module.css';

const Overlay = ({ children }) => {
  return <div className={classes.Overlay}>{children}</div>;
};

export default Overlay;
