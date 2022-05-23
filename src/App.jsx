import React from 'react';
import NavBar from './components/NavBar';
import Routes from './containers/Routes';


const App = () => {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section>
        <Routes />
      </section>
    </>
  );
};

export default App;
