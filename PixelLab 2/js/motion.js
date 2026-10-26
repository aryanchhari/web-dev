// MOTION: the browser runs a CSS keyframe animation.
// JavaScript changes its settings. No fake Hz or latency measurements.
let motionPlaying = false;

function updateMotion() {
  let seconds = document.getElementById("lapTime").value;
  let steps = document.getElementById("stepCount").value;
  let trail = document.getElementById("trail").value;
  let runners = document.querySelectorAll(".runner");

  for (let i = 0; i < runners.length; i++) {
    runners[i].style.animationDuration = seconds + "s";
    if (trail === "on") {
      runners[i].style.boxShadow =
        "-12px 0 #b4f56860, -24px 0 #b4f56830, -36px 0 #b4f56815";
    } else {
      runners[i].style.boxShadow = "none";
    }
  }
  document.getElementById("stepRunner").style.animationTimingFunction =
    "steps(" + steps + ", end)";
  document.getElementById("stepLabel").innerHTML = steps + " STEPS / CROSSING";
  let unit = " seconds";
  if (seconds === "1") {
    unit = " second";
  }
  document.getElementById("lapLabel").innerHTML = seconds + unit;
}

function showMotionState() {
  let runners = document.querySelectorAll(".runner");
  let button = document.getElementById("playButton");
  for (let i = 0; i < runners.length; i++) {
    if (motionPlaying === true) {
      runners[i].style.animationPlayState = "running";
    } else {
      runners[i].style.animationPlayState = "paused";
    }
  }
  if (motionPlaying === true) {
    button.innerHTML = "Pause motion Ⅱ";
    button.setAttribute("aria-pressed", "true");
    document.getElementById("motionStatus").innerHTML = "● Running";
  } else {
    button.innerHTML = "Start motion →";
    button.setAttribute("aria-pressed", "false");
    document.getElementById("motionStatus").innerHTML = "● Paused";
  }
}

function toggleMotion() {
  if (motionPlaying === true) {
    motionPlaying = false;
  } else {
    motionPlaying = true;
  }
  showMotionState();
}

function resetMotion() {
  motionPlaying = false;
  document.getElementById("lapTime").value = 3;
  document.getElementById("stepCount").value = "24";
  document.getElementById("trail").value = "off";
  document.getElementById("refreshRate").value = "144";
  updateMotion();
  showMotionState();
  calculateFrameTime();
  // Reset the CSS animation's progress as well as its controls.
  // Changing animation-name briefly restarts the keyframes.
  let runners = document.querySelectorAll(".runner");
  for (let i = 0; i < runners.length; i++) {
    runners[i].style.animationName = "none";
  }
  setTimeout(function () {
    for (let i = 0; i < runners.length; i++) {
      runners[i].style.animationName = "travel";
    }
  }, 30);
}

function calculateFrameTime() {
  let refreshRate = document.getElementById("refreshRate").value;
  let milliseconds = 1000 / refreshRate;
  // toFixed(2) formats a number with two digits after the decimal point.
  document.getElementById("frameTime").innerHTML =
    milliseconds.toFixed(2) + " <span>ms</span>";
  document.getElementById("frameFormula").innerHTML =
    "1000 ÷ " + refreshRate + " Hz";
}

updateMotion();
calculateFrameTime();
