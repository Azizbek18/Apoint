import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
