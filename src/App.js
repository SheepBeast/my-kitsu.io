import React, { Component } from "react";
import "./App.css";

import Container from "./Container";

import Index from "./pages/Index";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Index />
        </Container>
      </div>
    );
  }
}
