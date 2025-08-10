import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TilesGrid from "./components/TilesGrid";
import TileModal from "./components/TileModal";
import Footer from "./components/Footer";

function App() {
  const [activeTile, setActiveTile] = useState(null);

  return (
    <div className="app-bg-3d">
      <Navbar />
      <div className="blobs-bg">
        <img src="/assets/blob1.svg" alt="" className="blob blob1" />
        <img src="/assets/blob2.svg" alt="" className="blob blob2" />
        <img src="/assets/blob3.svg" alt="" className="blob blob3" />
      </div>
      <TilesGrid setActiveTile={setActiveTile} />
      <Footer />
      {activeTile && (
        <TileModal
          tile={activeTile}
          onClose={() => setActiveTile(null)}
        />
      )}
    </div>
  );
}

export default App;