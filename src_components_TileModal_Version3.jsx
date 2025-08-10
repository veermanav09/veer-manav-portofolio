import React from "react";
import "./TileModal.css";

export default function TileModal({ tile, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glassmorphic" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <span className="modal-emoji">{tile.emoji}</span>
        <h2>{tile.title}</h2>
        <div className="modal-details">{tile.details}</div>
        <img src={tile.blob} alt="" className="modal-blob" />
      </div>
    </div>
  );
}