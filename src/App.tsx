import React, { Component } from "react";
import "./App.css";
import DynamicTable from "./components/DynamicTable";
// import table from './components/tabelData';

export class App extends Component {
  render() {
    return (
      <div>
        <DynamicTable  />
      </div>
    );
  }
}

export default App;
