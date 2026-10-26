// PANEL FINDER: four inputs, a small points system, and a loop to find the top result.
// Array positions match data.js: 0 = IPS, 1 = VA, 2 = TN, 3 = OLED.
function findPanel(event) {
  event.preventDefault();
  let use = document.getElementById("mainUse").value;
  let room = document.getElementById("roomType").value;
  let staticUse = document.getElementById("staticUse").value;
  let priority = document.getElementById("priority").value;
  let points = [0, 0, 0, 0];

  if (use === "work") {
    points[0] = points[0] + 5;
    points[1] = points[1] + 2;
  } else if (use === "competitive") {
    points[0] = points[0] + 2;
    points[2] = points[2] + 5;
    points[3] = points[3] + 4;
  } else if (use === "movies") {
    points[1] = points[1] + 4;
    points[3] = points[3] + 5;
  } else {
    points[0] = points[0] + 4;
    points[1] = points[1] + 2;
    points[3] = points[3] + 2;
  }

  if (room === "dark") {
    points[1] = points[1] + 2;
    points[3] = points[3] + 3;
  } else if (room === "bright") {
    points[0] = points[0] + 2;
    points[1] = points[1] + 1;
  } else {
    points[0] = points[0] + 1;
    points[3] = points[3] + 1;
  }

  if (staticUse === "often") {
    points[0] = points[0] + 4;
    points[1] = points[1] + 3;
    points[2] = points[2] + 1;
    points[3] = points[3] - 5;
  } else if (staticUse === "sometimes") {
    points[0] = points[0] + 2;
    points[1] = points[1] + 1;
  } else {
    points[3] = points[3] + 2;
  }

  if (priority === "contrast") {
    points[1] = points[1] + 4;
    points[3] = points[3] + 4;
  } else if (priority === "speed") {
    points[2] = points[2] + 4;
    points[3] = points[3] + 4;
    points[0] = points[0] + 1;
  } else if (priority === "angles") {
    points[0] = points[0] + 4;
    points[3] = points[3] + 3;
  } else {
    points[0] = points[0] + 4;
    points[1] = points[1] + 1;
  }

  let best = 0;
  for (let i = 1; i < points.length; i++) {
    if (points[i] > points[best]) {
      best = i;
    }
  }
  let second = 0;
  if (best === 0) {
    second = 1;
  }
  for (let i = 0; i < points.length; i++) {
    if (i !== best && points[i] > points[second]) {
      second = i;
    }
  }

  let match = panels[best];
  document.getElementById("finderEmpty").style.display = "none";
  document.getElementById("finderAnswer").style.display = "block";
  document.getElementById("matchName").innerHTML = match.name;
  document.getElementById("matchSummary").innerHTML = match.description;
  document.getElementById("matchReason").innerHTML = match.reason;
  let checks = "";
  for (let i = 0; i < match.checks.length; i++) {
    checks = checks + "<li>" + match.checks[i] + "</li>";
  }
  document.getElementById("matchChecks").innerHTML = checks;
  document.getElementById("alternativeName").innerHTML =
    panels[second].name + " — " + panels[second].description;
  document.getElementById("matchName").focus();
}

function resetFinder() {
  document.querySelector(".finder-form").reset();
  document.getElementById("finderEmpty").style.display = "block";
  document.getElementById("finderAnswer").style.display = "none";
}
