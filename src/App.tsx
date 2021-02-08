import NavigationBar from './components/NavigationBar';
import BrowserFilter from './components/BrowserFilters';
import React, { useState } from 'react';

function App() {

  return (
    <div className='h-screen bg-gray-100'>
      <NavigationBar />
      <main className='h-screen'>
        <BrowserFilter />
      </main>
    </div>
  );
}

export default App;

