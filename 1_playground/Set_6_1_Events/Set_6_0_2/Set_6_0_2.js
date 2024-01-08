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
// video play and also trigger listener for box and consecuently 
// the display none, so if we show again the video is being played. 
// 

// Fixing the problem with stopPropagation
// if we add the call to the stopPropagation() API for the event
// the event is not propagated to the box and not hidden.




