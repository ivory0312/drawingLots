import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Input from "./Input/Input";
import Choice from "./Choice/Choice";

function App() {
  return (
    <>
      {/* <Input /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/input" element={<Input />} />
        <Route path="/choice" element={<Choice />} />
      </Routes>
    </>
  );
}

export default App;
