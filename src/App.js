import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
    console.log("oke");
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-800 ">
        <Navbar eve={changeMode} />
        <Hero />
        <About />
        <Service />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
