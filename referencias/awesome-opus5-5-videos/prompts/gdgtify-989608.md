# Kinetic Typography JFK Speech Film

An Opus 5.5 video by [@Gdgtify](https://x.com/Gdgtify) · [Original post with the video](https://x.com/Gdgtify/status/2105669567036989608)

- **Category:** 3D scenes
- **Author:** [@Gdgtify](https://x.com/Gdgtify)

More Opus 5.5 videos, each next to a live remake: [skillry.dev/ai-videos/opus-5-5](https://skillry.dev/ai-videos/opus-5-5?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos)

## Prompt

```text
Create a 20.00-second kinetic typography film titled “ESCAPE THE ORBIT,” based on John F. Kennedy’s Rice University address, September 12, 1962.

The central experience: a sentence discovers that it can change its own trajectory.

Deliver one complete, self-contained HTML file. Composition: 1080×1080. Target: 60fps. Use Canvas, SVG, or embedded WebGL. Embed required assets and libraries. The film must work without audio.

EXACT DISPLAY TEXT
“We choose to go to the moon”
“[…]”
“not because they are easy,”
“but because they are hard”
Preserve this order. The bracketed ellipsis explicitly indicates omitted speech. Attribution is separate from the excerpt. No additional slogans.
ART DIRECTION
Background: midnight # 080D23.
Primary type: warm white # FFF4DD.
Trajectory: electric coral # FF654F.
Secondary orbital geometry: blue # 6685FF.
Use a broad, confident grotesque for the speech and a sharply drawn italic for the final emphatic word. Avoid the appearance of a spacecraft dashboard. No rockets, astronaut illustrations, starfield wallpaper, lens flares, or decorative telemetry.
The frame should resemble an exceptionally refined astronomical instrument that has become expressive.

CENTRAL VISUAL RULE
The baseline of the sentence is a trajectory.

At first it is trapped in a closed orbit. A rhetorical decision changes that orbit into an open path. The letters remain the same travelers throughout.
Use an abstract orbital metaphor; do not present invented mission data or imply a physically accurate flight simulation.
STORYBOARD
0.00–3.50
The opening excerpt appears across the center, large and horizontal. Reveal it in three meaningful phrase groups.
A single hairline ellipse passes behind the baseline. A small circular lunar mark occupies its distant focus.
Hold the completed phrase motionless for 700ms.

3.50–6.00
The camera pulls back. The previously straight baseline reveals a shallow curvature.

The phrase travels along the ellipse as a coherent unit. Keep its glyphs upright during the initial movement. Only after the reading hold may they progressively adopt the tangent of the path.

The viewer realizes the sentence is circling rather than advancing.
6.00–7.00
Show the bracketed omission in an uncluttered central opening. The orbital movement decelerates.

7.00–10.50
Reveal the next clause on the near side of the orbit. Its final word travels through one smooth, effortless arc and returns toward where it started.

This ease should feel elegant but unproductive. Avoid comic bouncing.

10.50–14.50
Reveal the final clause horizontally before transforming it.
At its emphasis, the ellipse opens at one precise point. The same tracked letter group takes the new tangent and departs.
Perform one deliberate 70-degree camera roll. Counter-rotate the active phrase so it remains readable while the orbital field changes orientation around it.

The trajectory sweeps from lower left to upper right. Acceleration is conveyed by expanding spacing between its trailing marks, not by shaking the camera.

14.50–17.00
The camera matches the departing phrase’s velocity. The phrase becomes visually still while the old orbit recedes beneath it.

The lunar mark enlarges into a restrained crescent through geometric overlap. The crescent brackets the destination without becoming a cartoon illustration.
17.00–20.00
Resolve into a spacious editorial composition containing the selected excerpt in reading order, including its omission marker.

The open trajectory runs through the margins and exits the frame. Hold the entire image completely still for the final 1.2 seconds.

CHOREOGRAPHY
Use only three camera operations: pullback, roll, velocity match.
Give each operation a rhetorical purpose.
Keep the currently read phrase at least 64px high in the 1080px composition.
Motion blur may affect trailing geometry, never the active text.
No word may begin its ornamental travel before its reading hold finishes.

IMPLEMENTATION
Represent the ellipse and departure path analytically. Blend position and tangent continuously at the departure point; no teleportation.
Use arc-length sampling for consistent spacing along curves.
Separate camera transforms from glyph orientation.
Cache glyph rendering and static geometry.
Expose window.ready and window. seek(t). Seeking must pause playback and render any time from 0 through 20 deterministically, including out-of-order calls.
Provide window.frame(n) for n=0…1199 at t=n/60.
Render t=20 as the final held composition.
Use no accumulated physics or runtime randomness.

QUALITY GATE
Inspect frames at 0, 3, 5, 7.5, 10.5, 13, 16, and 19 seconds.
Verify that the same tracked phrase visibly follows its own trajectory.
```
