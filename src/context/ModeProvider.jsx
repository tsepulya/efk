import React, { useContext, useState } from 'react';
import changeCssVar from '../service/changeCSSVar';

export const MODE_PLAY = 'play';
export const MODE_TRAIN = 'train';

const ModeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ModeProvider = ({ children, ...props }) => {
  const [mode, setMode] = useState(MODE_TRAIN);

  const change = (name) => {
    setMode(name);
    changeCssVar(name);
  };

  return (
    <ModeContext.Provider
      value={{
        mode,
        change,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
