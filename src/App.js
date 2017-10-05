import React, {Component} from 'react';
import './App.css';

// App components:
import AppBarComposition from './components/AppBar.js';

// Optional plugins:

class MainApp extends Component {

  render(){
    return(
      <div>

        <AppBarComposition />

      </div>
    );
  }
}
export default MainApp;