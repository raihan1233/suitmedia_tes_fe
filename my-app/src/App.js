import React from 'react';
import FormUser from './components/FormUser';
import ImageSlider from './components/ImageSlider';
import Navbars from './components/Navbars';
import './App.css'
import OurValues from './components/OurValues';
import Footers from './components/Footers';

const App = () => {

  return (
    <div>
      <Navbars />
      <ImageSlider />
      <div style={{ margin: "5rem 0" }}>
        <OurValues />
      </div>
      <FormUser />
      <div style={{ marginTop: "6rem" }}>
        <Footers />
      </div>
    </div>
  );
};

export default App;