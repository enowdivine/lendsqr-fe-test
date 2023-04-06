import React from "react";
import MyRouter from "./routers/index";
// Bringing in the React Toastify Container
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <MyRouter />
      {/* USING THE TOASTIFY CONTAINER */}
      <ToastContainer />
    </div>
  );
}

export default App;
