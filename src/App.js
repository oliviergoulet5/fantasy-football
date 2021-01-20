import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LoginModal from './components/LoginForm/LoginModal';
import React, { useState } from 'react';

function App() {
  const [loginModalVisible, setLoginModalVisibility] = useState(false);

  return (
    <div className="App">
      { renderLoginModal(loginModalVisible, setLoginModalVisibility) }
      <NavigationBar actions={{setLoginModalVisibility}} />
    </div>
  );
}

export default App;

const renderLoginModal = (value, setVisibility) => {
  if (value)
    return <LoginModal actions={{ setVisibility }} />
}
