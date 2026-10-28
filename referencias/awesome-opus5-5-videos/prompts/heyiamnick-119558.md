# Opus 5.5 video by @heyiamnick

[▶ Watch the original and a live remake on Skillry](https://skillry.dev/ai-videos/opus-5-5/heyiamnick-119558?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos) · [Original post](https://x.com/heyiamnick/status/2109174851412119558)

- **Category:** Motion graphics
- **Remake built with:** Canvas
- **Author:** [@heyiamnick](https://x.com/heyiamnick)

## Prompt

```text
<direction>
Build a 30-second looping motion design showreel that introduces CLAUDE, a motion designer.
Concept, in one line: one pencil line gets promoted three times (graphite on paper, wire on a blueprint, light on black) and never leaves the screen.

Every shot is made out of the previous one: shapes, type and colour transform into the next scene. No cuts, no fades.

Typeface: Geist only. Weight 900 for big words, 600 to 800 for small labels (24 to 28 px, tracked 0.14 to 0.3 em).
Palette: paper cream #EDE6D5, blueprint blue #1B3ED2, hologram cyan #45F0DD, plus black #07080A, graphite #16161A and white. Each stage's accent is the next stage's colour: blue pencil on paper, cyan on the blueprint, white on the hologram.
Camera: locked and front-on for the whole film, like a drafting table. Objects turn; the camera never moves.
Empty border: nothing at rest within 150 px of the sides or 90 px of the top and bottom. Things travelling through may cross it.

Three inks. The same geometry is drawn in whichever ink is on screen:
- PAPER: a cream paper background (use my paper image if I give one, otherwise flat cream with fine drawn grain) with a 60 px blue grid at about 13% and every fifth line at 26%. Lines are pencil: resampled and pushed off true by slow sine waves whose phase changes 8 times a second, stroked twice (full width at 90%, half width at 40% with more wobble), with paper tooth knocked out of the strokes, then multiplied onto the paper. Fills are diagonal hatching drawn on one line at a time. Big type is hatching cut to the letter shapes, with a doubled outline.
- BLUEPRINT: flat blue with the same grid in white. Clean white lines 3 to 4 px, hidden edges dashed and thinner, fills are fine clean hatching.
- HOLOGRAM: black with the same grid in cyan. Cyan lines with a white core 30% of the line width. Fills are horizontal scan lines on an 8 px pitch whose thickness follows how lit the surface is. No blur halo anywhere: it reads as light through line density only.

Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM, 60 beats, 15 bars of 2 seconds. Something happens on every beat. Moves start 0.05 s before their beat so they land on it.
Easing: a critically damped spring, 1 - (1 + w t) e^(-w t) with w between 12 and 40, so nothing ever passes its target; exponential ease-in and ease-out for wipes, presses and exits.
Scene changes: paper to blueprint by a shape that floods the frame with a hard edge; blueprint to hologram and hologram to paper by one horizontal scan line.
The last frame is the first frame, so it loops.
Two corner labels stay on all film: top left "FIG. 07 — GEAR" (bar number and name), bottom right "BEAT 27 / 60". Bar names: DRAFT, TYPE, CURVE, MORPH, TILE, SOLID, GEAR, PANEL, DATA, LIGHT, WAVE, GLOBE, DRUM, FORM, END.
</structure>
<mascot>

The creative director: a small box character. Body 76 x 54 units with rounded corners, two short arm stubs (24 x 16) at mid height, four straight legs (11 x 33), two tall rounded-rectangle eyes (8 x 14). Draw it about 250 px wide. Its right arm is raised 58 degrees holding a pencil.
On paper: graphite outline with sparse blue hatching and graphite eyes. In the hologram: cyan outline with scan-line fill and white eyes. It is never a fourth colour.
It runs with alternate leg pairs lifting, six steps a second, leaning 7 degrees into the run.
</mascot>
<storyboard>

Bar 1, HOOK, 0-2 s, paper.
Frame 0: CLAUDE in Geist 900, fitted to 1500 px wide, centred, pencil-hatched. INTRODUCING small above it, A MOTION DESIGNER small below. A pencil rail 1620 px wide sits 96 px above the letters. The mascot stands on the rail at x = 1560 with CREATIVE DIRECTOR lettered to its left.

0.0: the small lines un-type; the mascot runs off the right edge, accelerating.

0.36 to 0.5: the rail drops, accelerating, to 26 px below the baseline and presses the letters flat into itself.

1.0: the line rises to the middle, shortens to 1320 px and splits into two rails 140 px apart; 41 blue ruler ticks sweep along the top rail.

1.5: the rails open to 300 px; a blue height dimension draws at the right with a live number.

Bar 2, KINETIC TYPE, 2-4 s, paper. Words sit between the rails and are clipped to that slot; the rails move to fit each word.

2.0: INTRODUCING rises through the baseline letter by letter, then lifts out through the top.

2.5: A MOTION whips in from the left (1400 px in 0.2 s).

3.0: the rails clap shut on it and reopen, stretching DESIGNER out of the line; its letters then fly out sideways.

3.5: CLAUDE in blue pencil, letters dropping from above one every 0.05 s. At 4.0 the rails close and crush it into one line 1476 px long.

Bar 3, CURVES, 4-6 s, paper.

4.1: the line gets pen-tool handles (430 px long at 58 degrees, small squares at the ends, circles on the handle tips, the label EASE) and bends into an S.

4.5: the handles swing to the mirror angle; eight blue copies fan out 34 px apart, joined at both ends like a leaf.

5.0: handles retract; the ribbon becomes travelling sine waves (amplitude 92 px, 2.75 cycles, each line a little out of phase).

5.5: it gathers back into one flat line.

Bar 4, SHAPE MORPH, 6-8 s, paper.

6.1: the line curls into a circle of radius 235 (curvature grows, length stays). 6.5: triangle, turning 120 degrees as it changes. 7.0: square. 7.5: hexagon, point up, radius 270. Blue hatching builds inside, then cross-hatching.

Bar 5, TILING, 8-10 s, paper.

8.0: the hexagon shrinks to radius 96 and six more slide out around it. 8.5: twelve more, a honeycomb of

19. 9.0: dense hatching sweeps across until every cell is solid blue. 9.6 to 10.0: the centre cell's shape grows past the frame with a hard edge; inside it is the blueprint, with the honeycomb in white line.

Bar 6, 2D TO 3D, 10-12 s, blueprint.

10.0: three lines draw inside every hexagon, plus three dashed hidden ones: each is a cube seen corner-on. 

10.5: the eighteen outer cubes slide into the centre one, which grows to radius 270. 11.0: it turns a quarter and perspective switches on. 11.5: it faces front.

Bar 7, MECHANISM, 12-14 s, blueprint.

12.0: the cube flattens and its front square grows teeth: a 16-tooth gear, pitch radius 208. From 12.25 the train steps 45 degrees on every eighth note. 12.5: a 10-tooth gear grows out to the upper right, meshing. 13.0: a 12-tooth gear to the upper left. Each has a dashed pitch circle, a hub and a label (16T, 10T, 12T). 13.5: the small gears retract; the gear becomes a square again and the cube gets its depth back.
Bar 8, UNFOLD, 14-16 s, blueprint.

14.0: the cube unfolds on its hinges into a cross of six squares. 14.5: the squares slide and stretch into six panels: a header strip, a tall sidebar, a wide chart, two tiles, a timeline strip.

15.0: they fill in. Header: "CLAUDE — MOTION REEL", a BARS / RING switch, a LIGHT toggle. Chart: 30 bars, one per second of this film, heights 42 30 36 44 50 46 52 62 50 56 62 72 60 66 58 76 56 62 68 74 70 78 86 94 100 93 97 90 80 50. Timeline: the 15 bar names, a keyframe diamond on each.
15.5: counters roll up: 120 BPM, 60 BEATS, 1800 FRAMES, 0 CUTS.
Bar 9, DATA, 16-18 s, blueprint.

16.0: a graph line draws across the bar tops; a cyan playhead lands on the timeline at the real time. The current second's bar is solid cyan, earlier ones hatched, later ones outlined. A cursor arrives.
16.5: it clicks RING: the chart's baseline bends round into a circle of radius 110 with the ba
```
