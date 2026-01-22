import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
   
   let emptyMessage = foodItems.length === 0 ?<h1>I am still hungry.</h1> : null;
  return (
    <>
      <h1>Healthy Food</h1>
      {emptyMessage}
      <foodItems></foodItems>
    </>
  );
}

export default App;
