
import React from 'react';
import AllRoutes from './components/Routes/AllRoutes';
import { BrowserRouter } from "react-router-dom";
import { generalContext, StateAndEndpointHOC } from './components/contexts/MainContext';
import './App.css'

function App(props) {
  const value = React.useMemo(() => props, [props]);
  return (
    <div className="App">
      <BrowserRouter>
        <generalContext.Provider value={value}>
          <AllRoutes />
        </generalContext.Provider>
      </BrowserRouter>
    </div>
  );
}
// eslint-disable-next-line import/no-anonymous-default-export
export default () => <StateAndEndpointHOC app={App} />;
