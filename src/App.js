import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import AppBar from "./component/AppBar";
import Home from "./component/Home";
import CreateUpdate from "./component/CreateUpdate";
import Delete from "./component/Delete";

function App() {
  return (
    <>
    <div className="Root">
      <Router>
        <div>
          <AppBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/CreateUpdate" element={<CreateUpdate/>}/>
            <Route path="/Delete" element={<Delete/>}/>
          </Routes>
        </div>
      </Router>
    </div>
      
    </>
  );
}

export default App;
