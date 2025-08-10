import React from "react";
import Tile3D from "./Tile3D";
import tilesData from "../data/tilesData";

export default function TilesGrid({ setActiveTile }) {
  return (
    <section className="tiles-grid">
      {tilesData.map(tile => (
        <Tile3D key={tile.id} tile={tile} onClick={() => setActiveTile(tile)} />
      ))}
    </section>
  );
}