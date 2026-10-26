// COMPARE LAB: read select values, look up an object, update the page.

function updateScreen(letter, panel, pattern, room, angle) {
  document.getElementById("name" + letter).innerHTML = panel.name;
  document.getElementById("description" + letter).innerHTML = panel.description;
  document.getElementById("light" + letter).innerHTML = panel.light;

  let screen = document.getElementById("screen" + letter);
  let art = document.getElementById("pattern" + letter);
  art.className = "pattern-art " + pattern;

  if (room === "dark") {
    screen.style.backgroundColor = panel.dark;
  } else {
    screen.style.backgroundColor = panel.bright;
  }

  if (angle === "side") {
    art.style.opacity = panel.sideOpacity;
  } else {
    art.style.opacity = 1;
  }
}

function updateComparison() {
  let first = document.getElementById("panelA").value;
  let second = document.getElementById("panelB").value;
  let pattern = document.getElementById("pattern").value;
  let room = document.getElementById("room").value;
  let angle = document.getElementById("angle").value;
  let a = panels[first];
  let b = panels[second];

  updateScreen("A", a, pattern, room, angle);
  updateScreen("B", b, pattern, room, angle);

  let roomName = "Dark room";
  let angleName = "Straight on";
  if (room === "bright") {
    roomName = "Bright room";
  }
  if (angle === "side") {
    angleName = "From the side";
  }
  document.getElementById("conditionLabel").innerHTML =
    roomName + " · " + angleName;

  document.getElementById("tableA").innerHTML = a.name;
  document.getElementById("tableB").innerHTML = b.name;
  let rows = [
    ["Light source", a.source, b.source],
    ["Black levels", a.blacks, b.blacks],
    ["Viewing angles", a.angles, b.angles],
    ["A place to start", a.use, b.use],
    ["Keep in mind", a.caution, b.caution],
  ];
  let table = "";
  for (let i = 0; i < rows.length; i++) {
    table =
      table +
      "<tr><td>" +
      rows[i][0] +
      "</td><td>" +
      rows[i][1] +
      "</td><td>" +
      rows[i][2] +
      "</td></tr>";
  }
  document.getElementById("comparisonRows").innerHTML = table;

  let title = "Two ways to shape the light.";
  let text =
    "Both selected LCD types use a backlight. Their liquid-crystal arrangements give them different general traits.";
  if (first === second) {
    title = "Same type. Same starting point.";
    text =
      "You've selected the same panel type twice. Try another type to explore a different approach. Real monitors using the same type can still perform differently.";
  } else if (first === "3" || second === "3") {
    title = "Light behind. Light within.";
    text =
      "The LCD uses a backlight. OLED pixels create their own light and can stop emitting it individually. Watch the black-level area as you change the scene.";
  }
  if (angle === "side") {
    text =
      text +
      " The drawn off-axis fade is exaggerated; it is not a measured viewing angle.";
  }
  document.getElementById("insightTitle").innerHTML = title;
  document.getElementById("insightText").innerHTML = text;
}

function swapPanels() {
  let oldFirst = document.getElementById("panelA").value;
  document.getElementById("panelA").value =
    document.getElementById("panelB").value;
  document.getElementById("panelB").value = oldFirst;
  updateComparison();
}

function resetComparison() {
  document.getElementById("panelA").value = "0";
  document.getElementById("panelB").value = "3";
  document.getElementById("pattern").value = "spectrum";
  document.getElementById("room").value = "dark";
  document.getElementById("angle").value = "front";
  updateComparison();
}

updateComparison();
