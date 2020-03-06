import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './stores';
import './modules';
import Box from '@material-ui/core/Box';
import ShipmentsContainer from './modules/shipments/ShipmentsContainer'
import ShipmentDetails from './modules/shipments/components/ShipmentDetails'
import './App.css';

function App() {
  return (
    <Provider {...store}>
      <ThemeProvider theme={createMuiTheme()}>
        <Box className="App">
          <Route
            path={['/', '/shipments']}
            exact
            render={ (props) => (
              <ShipmentsContainer {...props} />
            )}
          />
          <Route
            path="/shipments/:id"
            exact
            render={
              (props) => (
                <ShipmentDetails {...props} />
              )
            }
          />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default withRouter(App);
