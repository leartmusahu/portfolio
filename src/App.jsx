import { useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${lightMode ? "light" : ""}`}>
      <div
        className={`overflow-x-hidden text-stone-300 antialiased ${
          lightMode
            ? "absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] text-neutral-700"
            : "absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white"
        }`}
      >
        <div className="container mx-auto px-8">
          <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
          <Hero lightMode={lightMode} />
          <Technologies />
          <Experience />
          <Projects />
          <Contact lightMode={lightMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
