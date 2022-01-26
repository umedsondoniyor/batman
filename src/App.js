import React from "react";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import { Provider } from "./context";
import "./App.scss";

function App() {
  return (
    <Provider>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Index />
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;
