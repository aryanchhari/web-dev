# Pixel Lab

A five-page display playground built from Aryan's original PixelLab homepage.
Plain HTML, CSS and JavaScript. All illustrations are made with CSS.

## Run it locally

1. Pull the latest changes to your web-dev repository.
2. Open the PixelLab 2 folder.
3. Double-click index.html to open it in Chrome on your MacBook Neo.

You can also open the folder in VS Code and use Live Server or Live Preview.
There is no installation, build command, account or server requirement.
Keep JavaScript enabled for the interactive controls. The manufacturer reading
links open online.

The header, main area and footer use a fixed width of 1200px for the MacBook
presentation. There are no phone/tablet layouts, media queries or device-specific
settings. Use the browser at 100% zoom.

## Pages

| File | What it does |
| --- | --- |
| index.html | Compare panel types, patterns, room light and viewing angle. Explore contrast with a black-level slider and live ratio calculation. |
| insidepixel.html | Switch between IPS LCD and OLED; change a pixel's illustrated light level; open the glossary explanations. |
| motion.html | Start/pause a CSS animation; adjust its duration and steps; show an illustrated trail; calculate refresh intervals. |
| challenge.html | Answer eight questions with immediate explanations, score tracking, results and restart. |
| findpanel.html | Answer four questions to get a panel type to explore, an alternative and a checklist. |

Every page has the same navigation and footer. No page is an empty placeholder.

## Where the code lives

- style.css: one shared stylesheet, divided into numbered page sections.
- js/data.js: shared panel descriptions in an array of objects.
- js/compare.js: the comparison controls, table and contrast example.
- js/pixel.js: the pixel diagram and glossary.
- js/motion.js: animation controls and refresh-interval calculator.
- js/challenge.js: question data, answer checking and score logic.
- js/finder.js: the educational matching rule.
- favicon.svg: the small pixel logo in the browser tab.
- PRESENTATION.md: a ten-minute speaking flow, live-demo steps and teacher Q&A.

Each page loads only the scripts it uses, at the end of its body.
The navigation/footer are written into every HTML file so the pages work when
opened directly from a folder. You do not need fetch, imports or a framework.

## How it matches your current learning

The JavaScript uses variables, arrays, objects, functions, if/else, for loops,
DOM selection, innerHTML, input values, inline event handlers, style updates
and one setTimeout. It uses no classes, promises, async/await, modules or API calls.

The CSS uses selectors, spacing, borders, colours, gradients, Flexbox, basic
Grid, positioning, hover transitions and keyframe animation. Colours use names
such as black and white, or rgb() and rgba() values. The existing colour palette
is kept, including the transparent shadows and motion trail.

A few small helpers are useful extensions of what you already know:

- element.className replaces an element's CSS class string.
- form.reset() restores form controls to their original values.
- button.disabled prevents another answer or an early next-question click.
- number.toFixed(2) displays a calculated number with two decimal places.
- CSS steps(24, end) makes an animation jump between 24 positions per crossing.
- CSS calc(100% - 46px) keeps the moving target inside its track.

The controls use their existing classes, visible labels and show/hide logic.
There are no noscript messages, aside tags, ARIA attributes, hidden helper text
or scripted focus changes.

The scripts contain comments at the main steps. Start with compare.js if you
want to trace how selecting an option changes the page.

## Change the project

- Edit the text and layout in each HTML file.
- Change colours, spacing and the fixed desktop width in style.css.
- Edit panel descriptions in js/data.js.
- Edit questions and answers in the questions array in js/challenge.js.
  Answer indexes start at 0. Keep four choices per question.
- Adjust the points in js/finder.js to experiment with the matching rule.
  Points are teaching choices, not scientific measurements or product rankings.

## What the demonstrations mean

The comparison images and pixel levels are exaggerated concept illustrations.
They do not reproduce another screen's measured colours, contrast or brightness.
The LCD comparison assumes conventional backlighting; local dimming and Mini LED
can change performance. Individual monitors vary substantially.

The contrast section uses example white and black luminance values, not panel
specifications. White stays at 200 cd/m²; the black-level slider runs from 0.05
to 1.00 cd/m². The formula is white / black: 200 / 0.20 = 1000:1, while
200 / 0.05 = 4000:1. The scene's grey background illustrates the change; RGB
values are not a calibrated mapping to physical luminance. The two examples
do not represent measurements of the computer running the page.

The motion page compares positions per crossing with continuous CSS motion.
It does not measure or emulate 60/144/240 Hz, FPS, pixel response or input lag.
The optional trail is a drawn effect, not a ghosting measurement. The calculator
only performs 1000 / Hz to show the fixed-refresh interval in milliseconds.

The panel finder uses a simple points system. It does not recommend particular
models or account for prices, all room conditions or individual measurements.
Quiz scores stay in the current page session and reset when you reload it.

## Background reading

Manufacturer references are linked in Inside a Pixel's Reading Room:

- Samsung: https://www.samsung.com/au/monitors/monitor-buying-guide/ip-va-tn-oled/
- LG: https://www.lg.com/hk_en/lg-experience/helpful-hints/monitor-types-explained/
- ASUS: https://www.asus.com/blog/oled-vs-mini-led-vs-lcd/
- Corsair: https://www.corsair.com/us/en/explorer/gamer/monitors/monitor-panel-types-explained-va-tn-ips-oled-qd-oled/
- Dell: https://www.dell.com/en-us/shopping/refresh-rate-monitors

Built as a local learning project on 26 October 2026.
