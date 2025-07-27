import React from "react";

import Course from "./components/Course";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="inter flex flex-col">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <Course />
    </div>
  );
};

export default App;
