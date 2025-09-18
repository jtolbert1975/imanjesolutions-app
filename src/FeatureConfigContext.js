import React, { createContext, useEffect, useState } from 'react';

export const FeatureConfigContext = createContext({ enableGpt5Mini: false });

export function FeatureConfigProvider({ children }) {
  const [config, setConfig] = useState({ enableGpt5Mini: false });

  useEffect(() => {
    fetch('/api/config')
      .then((r) => r.json())
      .then((data) => setConfig(data))
      .catch(() => {});
  }, []);

  return (
    <FeatureConfigContext.Provider value={config}>
      {children}
    </FeatureConfigContext.Provider>
  );
}
