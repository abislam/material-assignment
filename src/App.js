import React from 'react';
import './App.css';
import SimpleMenu from './components/SimpleMenu';
import SimpleAppBar from './components/SimpleAppBar';
import Checkboxes from './components/Checkboxes';
import SimpleSnackBar from './components/SimpleSnackBar';
import SimpleStepper from './components/SimpleStepper';
import AlertDialog from './components/AlertDialog';
import SimpleTextField from './components/SimpleTextField';


function App() {
  return (
    <div className="App">
      <SimpleAppBar />
      <SimpleMenu />
      <Checkboxes />
      <SimpleSnackBar />
      <SimpleStepper />
      <AlertDialog />
      <SimpleTextField label="name"/>
      <SimpleTextField label="number"/>
    </div>
  );
}

export default App;
