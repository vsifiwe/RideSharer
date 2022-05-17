import React from 'react';
import StackNav from './src/navigation/StackNav';
import {AuthProvider} from './src/navigation/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <StackNav />
    </AuthProvider>
  );
};

export default App;
