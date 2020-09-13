import React from 'react';

import Select from './components/Select/Select';

const App = () => {
  const isAuth = false;

  return (
    <>
      <Select name={'years'} />
      <Select name={'month'} />

      <h1>App</h1>
    </>
  );
};

export default App;
