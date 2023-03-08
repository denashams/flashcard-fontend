import React from "react";
import "./AudioCard.css";
import music from "../../assets/music.mp3";
import grabar from "../../assets/grabar.jpg"


export default function AudioCard() {
  
  return (
    <div className="audio-container">
      <img src={grabar} alt="Oleg Grabar" />
      <h3>عنوان پادکست</h3>
      <audio src={music} controls></audio>
     
    </div>
  );
}
