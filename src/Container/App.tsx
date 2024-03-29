import React from 'react';
import './App.css';
import { VehicleList } from '../Pages/Vehicle';
import VehicleBase from '../Pages/Vehicle/VehicleBase';
import { Header } from '../Layout';

function App() {
  return (
    <div className="App">
      <Header></Header>
   <VehicleBase></VehicleBase>
    </div>
  );
}

export default App;
