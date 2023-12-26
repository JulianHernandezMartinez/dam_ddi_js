'use strict'

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#video_player_example


const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.style="display:block;");
video.addEventListener("click", (event) => {
  event.stopPropagation(); // to make the propagation stops
  video.play()});
box.addEventListener("click", () => box.style="display:none;");

// by clicking the video when displayed, the click triggers the
// vide play and also trigger the display none, so if we show again 
// the video is being played. (it is called propagation)

// Fixing the problem with stopPropagation




