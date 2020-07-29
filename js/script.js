let video = document.getElementById("video-bg");
let btn = document.getElementById("video-btn");

let videoButtonPlay = document.getElementById('video-btn-play');
let videoButtonPause = document.getElementById('video-btn-pause');

videoButtonPause.style.display = 'none';

function videoFunction() {
  if (video.paused) {
    video.play();
    // btn.innerHTML = "Pause";
    videoButtonPlay.style.display = "none";
    videoButtonPause.style.display = "block";
  } else {
    video.pause();
    // btn.innerHTML = "Play";
    videoButtonPlay.style.display = "block";
    videoButtonPause.style.display = "none";
  }
}
