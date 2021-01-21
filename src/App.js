import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LoginModal from './components/LoginForm/LoginModal';
import BrowserFilters from './components/BrowserFilters/BrowserFilters';
import React, { useState } from 'react';

function App() {
  const [loginModalVisible, setLoginModalVisibility] = useState(false);

  return (
    <div className="App">
      { renderLoginModal(loginModalVisible, setLoginModalVisibility) }
      <NavigationBar actions={{setLoginModalVisibility}} />
      <BrowserFilters />
    </div>
  );
}

export default App;

const renderLoginModal = (value, setVisibility) => {
  if (value)
    return <LoginModal actions={{ setVisibility }} />
}
