import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LoginModal from './components/LoginModal/LoginModal';
import BrowserFilters from './components/BrowserFilters/BrowserFilters';
import React, { useState } from 'react';

function App() {
  const [loginModalVisible, setLoginModalVisibility] = useState(false);

  return (
    <div className="App">
      { loginModalVisible && <LoginModal setVisibility={ setLoginModalVisibility } /> }
      <NavigationBar setLoginModalVisibility={setLoginModalVisibility} />
      <BrowserFilters />
    </div>
  );
}

export default App;

