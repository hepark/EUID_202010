import React from 'react';
import App from 'app/App';

function bootstrap(useStrictMode = false) {
  return useStrictMode ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  );
}

export default bootstrap;
