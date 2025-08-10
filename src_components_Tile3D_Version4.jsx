import React from "react";
import "./Tile3D.css";

export default function Tile3D({ tile, onClick }) {
  return (
    <div
      className={`tile-3d tile-${tile.color}`}
      onClick={onClick}
      tabIndex={0}
      aria-label={tile.title}
    >
      <div className="tile-3d-content">
        <span className="tile-emoji">{tile.emoji}</span>
        <h2 className="tile-title">{tile.title}</h2>
      </div>
      <div className="tile-3d-bg-blob">
        <img src={tile.blob} alt="" />
      </div>
    </div>
  );
}