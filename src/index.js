import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

const CustomApp = () => (
    <MuiThemeProvider>
      <MainApp />
    </MuiThemeProvider>
  );

ReactDOM.render(<CustomApp />, document.getElementById('root'));
registerServiceWorker();
