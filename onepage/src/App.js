import React from 'react';
import Header from './components/Header/header';
import One from './components/One/one';
import Two from './components/Two/two';
import Three from './components/Three/three';
import Four from './components/Four/four';
import Footer from './components/Footer/footer';

function App(){
      return (
        <div className="App">
          
          <Header />
          <One/>
          <Two />
          <Three />
          <Four/>
          <Footer/>
        </div>
      );
    }

    export default App;