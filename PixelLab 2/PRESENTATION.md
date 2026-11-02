# Pixel Lab: ten-minute presentation cues

Use the headings and demo actions as memory prompts. Explain each idea in your
own words. The ten minutes below cover the presentation; take questions after it.

## The route to remember

Welcome → Why this topic → The problem → Compare → Contrast → Pixels → Motion
→ Challenge → Find my panel → How the code works → Thank you and questions.

## Timing and live-demo plan

| Time | Focus | What to show |
| --- | --- | --- |
| 0:00–0:45 | Greeting, name and topic | Compare Lab homepage |
| 0:45–1:30 | Why this project and who it helps | Keep the homepage visible |
| 1:30–3:00 | Compare Lab: four panel types | IPS against OLED; Night lights; side angle; swap |
| 3:00–4:15 | Contrast and black levels | Scroll to Same white. Different blacks. Move its slider |
| 4:15–5:30 | Inside a Pixel | Set the pixel to black; switch IPS to OLED |
| 5:30–6:45 | Motion and refresh interval | Start motion; choose 8 steps; calculate 60 Hz and 144 Hz |
| 6:45–7:30 | Challenge | Answer two questions and show feedback |
| 7:30–8:30 | Find my Panel | Show the work preset, then a movie-focused example |
| 8:30–9:30 | HTML, CSS and JavaScript | Explain the input → function → calculation → DOM sequence |
| 9:30–10:00 | What users learn and invitation for questions | Return to Compare Lab |

## 0:00–0:45 — Open professionally

An optional opening to adapt:

> Good morning, respected teacher and everyone. I'm Aryan, and today I'm
> presenting Pixel Lab, an interactive website about display technology. We use
> screens for studying, working, watching films and gaming, but the technology
> behind those screens can be confusing. My project makes those differences
> easier to understand through comparisons, interactive examples and a short quiz.

Use “Good afternoon” if appropriate. Look at the audience while introducing
yourself, then turn to the website when you begin the demonstration.

## 0:45–1:30 — Why this topic, and what problem it addresses

Remember three cues: **personal interest, learning by interacting, informed choices**.

- You wanted a distinctive project with a clear educational purpose.
- The interaction is part of the explanation: changing a control helps the user
  understand a term rather than only read its definition.
- People may compare price, size and resolution without understanding panel
  types, black levels, viewing angles or motion performance.
- Pixel Lab helps users understand those terms and relate them to their needs.

An anchor sentence:

> I chose a subject where a small interaction can make a technical idea easier
> to understand. The aim is to help someone know what to look for in a screen.

Keep this about your project's purpose and audience. There is no need to compare
it with anyone else's project.

## 1:30–3:00 — Compare Lab

**Show:** leave Display A on IPS LCD and Display B on OLED. Choose Night lights,
then change the viewing angle. Briefly swap the displays and reset.

**Explain:**

- A panel is the part of a display that controls or produces the image's light.
- IPS, VA and TN are LCD panel technologies. They use a backlight and control
  how much of its light passes through.
- OLED pixels produce their own light, so individual pixels can stop emitting it.
- IPS is known for wide viewing angles; VA often offers stronger native LCD
  contrast; TN has more restricted viewing angles; OLED combines deep blacks
  with fast pixel transitions.
- Night scenes make black-level differences easier to discuss. A cinema scene
  with stars is a useful example.
- The table puts the light source, black levels, angles, uses and tradeoffs
  alongside each other.

**Small technical point:** selecting an option calls `updateComparison()`. It
reads the inputs, looks up objects in `panels`, and updates the two screens and
the table without reloading the page.

Transition: **“Black level is important because it changes contrast. Let me show that.”**

## 3:00–4:15 — Contrast

**Show:** scroll to **Same white. Different blacks.** Start at the default value,
raise the slider to its maximum, then lower it all the way. Press Reset contrast.

**Explain:**

- Contrast describes the separation between white and black light output.
- The contrast ratio is **white level ÷ black level**.
- In these examples the white level stays at **200 cd/m²**. This unit describes
  luminance; it is also called a nit.
- At black **0.20**, the calculation is **200 ÷ 0.20 = 1000:1**.
- At black **1.00**, it becomes **200:1** and the dark scene looks more washed out.
- At black **0.05**, it becomes **4000:1**. The white moon stays the same while
  the background becomes darker.
- Conventional IPS and TN use backlights; VA generally blocks more unwanted
  light in the black state. OLED can stop light emission at individual pixels.

**Memorable example:** a white moon against a grey sky looks less striking than
the same white moon against a deep black sky.

Use the numbers as example calculations. They are not specifications assigned
to every panel type. The slider changes the webpage's scene, not the monitor's
hardware settings.

## 4:15–5:30 — Inside a Pixel

**Show:** click Set pixel to black while IPS is selected. Point to the backlight.
Switch to OLED and point out that the separate backlight disappears. Increase
the slider again. Open one glossary entry if time allows.

**Explain:**

- A picture is built from pixels. Red, green and blue subpixels combine to
  produce colours.
- The LCD example controls light arriving from behind it. At black, some
  unwanted light can still pass through.
- In OLED, each pixel is a light source. A black pixel stops emitting light.
- Mini LED is a backlight technology for LCDs, rather than another name for OLED.

**Small technical point:** `changePixelType()` changes the selected button and
calls `updatePixel()`. The function updates labels, opacity, background colour
and the backlight's `display` value.

Transition: **“So far we've looked at a still image. Next is what happens when it moves.”**

## 5:30–6:45 — Motion Test

**Show:** start motion, choose 8 steps and compare the two tracks. Briefly turn
the trail on, then off. Pause. In the calculator, choose 60 Hz, then 144 Hz.

**Explain:**

- The top track jumps between positions; the lower track moves with continuous
  interpolation. Fewer positions make those jumps more obvious.
- CSS `@keyframes` defines the start and end positions. `steps()` divides the
  top animation into discrete positions.
- JavaScript changes duration and play state. It is not calculating every
  animation frame in a loop.
- Refresh rate is how many times a display refreshes per second.
- The interval is **1000 ÷ Hz**: **60 Hz ≈ 16.67 ms**, **144 Hz ≈ 6.94 ms**.
- Pixel response time is how quickly a pixel changes between levels or colours.
  It is a different concept from refresh interval.

Keep the animation controls and refresh calculator distinct in your explanation.
Eight animation steps do not mean the monitor is running at 8 Hz.

## 6:45–7:30 — Challenge

**Show:** answer one question correctly and one incorrectly, then show the
explanation and the running score. Do not spend the presentation answering all eight.

- The quiz helps users check what they understood from the other pages.
- Questions, options, correct answers and explanations are stored in an array.
- A condition checks the selected answer, updates the score and applies the
  correct or wrong CSS class.
- Answer buttons become disabled after a choice, so repeated clicks cannot add
  points. The next button stays disabled until the user answers.
- At the end, the result is shown. Restart resets the question position and score.

## 7:30–8:30 — Find my Panel

**Show:** submit the default work-focused choices to get IPS LCD. Then choose:
Movies and story-driven games → Usually dark → Mostly moving content →
Deep blacks and dark-scene contrast. Submit to get OLED.

- The form connects the user's activity, room, static content and priority to
  a panel type to explore.
- Each answer adds or subtracts points in an array for IPS, VA, TN and OLED.
- A loop finds the highest score. A second comparison finds an alternative.
- The result includes an explanation and things to check before choosing.

**Small technical point:** `event.preventDefault()` keeps form submission from
reloading the page, so JavaScript can show the result in the same screen.

## 8:30–9:30 — How the website works

Use three cues: **structure, appearance, behaviour**.

| Technology | Its role here | Example |
| --- | --- | --- |
| HTML | Content and controls | Labels, select menus, sliders, buttons, tables and forms |
| CSS | Layout and visual appearance | Fixed 1200px desktop layout, Flexbox, Grid, RGB colours and keyframes |
| JavaScript | Input handling, calculations and updates | Contrast, comparison, quiz scores and the matching rule |

Trace one interaction using the actual code:

1. Moving the contrast slider triggers `oninput="updateContrast()"`.
2. The input value `20` is divided by `100`, giving a black level of `0.20`.
3. JavaScript calculates `200 / 0.20`, giving `1000`.
4. `getElementById()` selects the result elements.
5. `innerHTML` updates the displayed values; `.style.backgroundColor` changes
   the scene's background.

This is a DOM update: JavaScript changes parts of the loaded HTML document.
The project uses plain local HTML, CSS and JavaScript. Shared panel data sits
in `data.js`; each page loads only the scripts it needs. There is no database,
account system or backend. Quiz scores are variables in the current page.

## 9:30–10:00 — Close and invite questions

Return to Compare Lab. An optional closing:

> Pixel Lab makes display terminology easier to understand through comparison,
> interaction and a short knowledge check. The project also demonstrates how
> HTML, CSS and JavaScript can work together to create a useful learning tool.
> Thank you for your time. I'd be happy to answer any questions.

Pause and look toward your teacher. Let the question finish before answering.

## Teacher Q&A — short answers to practise

| Possible question | Answer cue |
| --- | --- |
| What problem does the project solve? | It helps users understand display terms and relate panel characteristics to their activities. |
| Why did you choose this subject? | Personal interest and the chance to teach a useful technical topic through interaction. |
| What is contrast? | White light output divided by black light output. With equal whites, lower black output gives higher contrast. |
| Why does OLED show deeper blacks? | Individual pixels can stop emitting light, without a separate backlight behind them. |
| Is OLED always the best choice? | The use case matters. It has strong blacks and fast transitions, while repeated static content needs burn-in care. |
| Is 144 Hz the same as a 1 ms response time? | No. 144 Hz is refresh frequency; 1 ms describes a pixel transition measurement. The refresh interval at 144 Hz is about 6.94 ms. |
| Is FPS the same as Hz? | FPS is the rate at which frames are produced; Hz is the display's refresh frequency. |
| Do 24 CSS steps mean 24 Hz? | No. They are positions per animation crossing. Animation duration determines how quickly those positions are traversed. |
| Does the contrast slider measure the computer's screen? | It calculates an example ratio and changes a CSS scene. It does not measure or alter the panel's hardware. |
| Why can the contrast calculation never divide by zero? | The input minimum is 5, and the code divides by 100. The smallest black value is therefore 0.05. |
| Is Find my Panel AI? | It is a rule-based points system using conditions and a loop. |
| How are tied matching scores handled? | The loop replaces the best result only for a greater score, so the earlier panel in the array wins a tie. |
| How do you stop repeated scoring? | The answered flag blocks repeated answers, and the answer buttons are disabled after a selection. |
| Why does the form use preventDefault()? | It prevents the browser's usual submission reload so the result can appear on the same page. |
| Why is data.js loaded first? | Compare Lab and the finder need the panels array to exist before their scripts run. |
| What do RGB and RGBA mean? | RGB sets red, green and blue channels from 0 to 255. RGBA adds an alpha value for transparency, from 0 to 1. |
| Why use Flexbox and Grid? | Flexbox arranges items along an axis, such as the navigation. Grid creates rows and columns, such as the paired screens. |
| Where are the pictures stored? | The main visuals are CSS gradients, shapes and HTML elements. The browser-tab icon is a small SVG file. |
| Why is the layout fixed? | This version is designed for a desktop presentation on the MacBook. Its main width is set in the shared CSS file. |
| What does reset do? | It restores the input values and runs the update function; the quiz also resets its score and position. |
| Are the results saved? | They stay in page variables and reset after reloading. |
| What could you improve next? | Add more explanations and compare categories such as resolution, HDR and colour gamut. |

If asked to explain a function, point to an input, the function it calls and
the visible output. Use the contrast function because its calculation is short.

## Rehearsal checklist

- Open `index.html` in Chrome at 100% zoom and maximise the window.
- Practise the route once with a timer. Keep the greeting and closing brief.
- Remember four anchors: **light source, black level, motion, user need**.
- Keep the mouse still while speaking; change a control when it supports your point.
- If time runs short, answer one quiz question and skip the optional glossary demo.
- For an unfamiliar question, say what you know and avoid inventing a value.

## Technical background reading

- [Samsung: IPS, OLED, VA and TN](https://www.samsung.com/au/monitors/monitor-buying-guide/ip-va-tn-oled/)
- [EIZO: OLED, backlights and black levels](https://www.eizo.com/library/basics/oled/)
- [EIZO: LCD motion, response time and contrast](https://www.eizo.com/library/basics/response_time_figures/)
- [LG: luminance and contrast ratio](https://www.lg.com/uk/lg-experience/lg-lab/the-secret-of-the-picture-quality-of-lg-tv/lgsubscribe/)
