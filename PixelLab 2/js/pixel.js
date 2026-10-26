// INSIDE A PIXEL: conditions + range input + style changes.
let pixelType = "ips";

function changePixelType(type) {
  pixelType = type;
  let ipsButton = document.getElementById("ipsButton");
  let oledButton = document.getElementById("oledButton");

  ipsButton.className = "button secondary";
  oledButton.className = "button secondary";
  ipsButton.setAttribute("aria-pressed", "false");
  oledButton.setAttribute("aria-pressed", "false");

  if (type === "ips") {
    ipsButton.className = "button selected";
    ipsButton.setAttribute("aria-pressed", "true");
  } else {
    oledButton.className = "button selected";
    oledButton.setAttribute("aria-pressed", "true");
  }
  updatePixel();
}

function updatePixel() {
  // Multiplication converts the range input's string value to a number.
  let level = document.getElementById("pixelLevel").value * 1;
  document.getElementById("levelLabel").innerHTML = level + "%";
  let opacity = level / 100;
  document.getElementById("redPixel").style.opacity = opacity;
  document.getElementById("greenPixel").style.opacity = opacity;
  document.getElementById("bluePixel").style.opacity = opacity;

  let shade = level * 2.55;
  let title = "Light through a shutter.";
  let explanation =
    "An LCD controls how much light from the backlight passes through. Its pixels do not make their own light.";
  if (pixelType === "ips") {
    document.getElementById("pixelBadge").innerHTML = "IPS LCD";
    document.getElementById("backlightLayer").style.display = "flex";
    document.getElementById("layerArrow").style.display = "inline";
    document.getElementById("layerLabel").innerHTML =
      "LIQUID CRYSTAL + COLOUR FILTERS";
    document.querySelector(".subpixels").style.backgroundColor = "#252a22";
    // A small grey floor illustrates leakage in a conventional LCD.
    shade = 28 + level * 2.27;
    if (level === 0) {
      title = "Black pixel. Backlight still on.";
      explanation =
        "The pixel is trying to block the light. Some can still pass through, so dark areas may look grey. This drawing exaggerates the effect.";
    }
  } else {
    document.getElementById("pixelBadge").innerHTML = "OLED";
    document.getElementById("backlightLayer").style.display = "none";
    document.getElementById("layerArrow").style.display = "none";
    document.getElementById("layerLabel").innerHTML = "SELF-EMISSIVE SUBPIXELS";
    document.querySelector(".subpixels").style.backgroundColor = "#000000";
    title = "The pixel is the light source.";
    explanation =
      "OLED emits light at the pixel. It does not need a separate backlight behind the image.";
    if (level === 0) {
      title = "Off means no emitted light.";
      explanation =
        "At black, this illustrated OLED pixel stops emitting light. What you actually see still depends on your own display and room reflections.";
    }
  }
  document.getElementById("pixelOutput").style.backgroundColor =
    "rgb(" + shade + "," + shade + "," + shade + ")";
  document.getElementById("outputLabel").innerHTML = "LIGHT PIXEL";
  if (level === 0) {
    document.getElementById("outputLabel").innerHTML = "BLACK PIXEL";
  }
  document.getElementById("pixelTitle").innerHTML = title;
  document.getElementById("pixelExplanation").innerHTML = explanation;
}

function turnPixelOff() {
  document.getElementById("pixelLevel").value = 0;
  updatePixel();
}

function toggleTerm(number) {
  let answer = document.getElementById("term" + number);
  let button = document.querySelectorAll(".glossary-row button")[number];
  if (answer.style.display === "block") {
    answer.style.display = "none";
    document.getElementById("termIcon" + number).innerHTML = "+";
    button.setAttribute("aria-expanded", "false");
  } else {
    answer.style.display = "block";
    document.getElementById("termIcon" + number).innerHTML = "−";
    button.setAttribute("aria-expanded", "true");
  }
}

updatePixel();
