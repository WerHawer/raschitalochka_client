import React from 'react';
import Modal from 'components/Modal/ModalContainer';
import AddModals from 'components/AddModals/AddModals';
import Media from 'react-media';

const App = ({ modal }) => {
  const isAuth = false;

  return (
    <>
      <Media query="(min-width: 768px)" render={() => <>{modal && <Modal />}</>} />

      <h1>App</h1>
      <Media
        query="(max-width: 767px)"
        render={() => <>{(modal === 'cost' || modal === 'income') && <AddModals variant={modal} />}</>}
      />
    </>
  );
};

export default App;
