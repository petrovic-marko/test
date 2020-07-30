

let video = document.getElementById("video-bg");

let videoButtonPlay = document.getElementById('video-btn-play');
let videoButtonPause = document.getElementById('video-btn-pause');

videoButtonPause.style.display = 'none';



function videoFunction() {
  if (video.paused) {
    video.play();
    // btn.innerHTML = "Pause";
    videoButtonPlay.style.display = "none";
    videoButtonPause.style.display = "block";
    videoButtonDiv.style.opacity = .3

  } else {
    video.pause();
    // btn.innerHTML = "Play";
    videoButtonPlay.style.display = "block";
    videoButtonPause.style.display = "none";
    videoButtonDiv.style.opacity = .8

  }
}

let videoButtonDiv = document.getElementById('video-btn');
videoButtonDiv.style.transition = "all 1s ease-out"


window.addEventListener('DOMContentLoaded', () => {
  videoButtonDiv.style.opacity = .8;
})
