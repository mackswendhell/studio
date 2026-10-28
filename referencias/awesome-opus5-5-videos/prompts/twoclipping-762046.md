# Product Launch Motion Design Template

An Opus 5.5 video by [@twoclipping](https://x.com/twoclipping) · [Original post with the video](https://x.com/twoclipping/status/2104674464868762046)

- **Category:** 3D scenes
- **Author:** [@twoclipping](https://x.com/twoclipping)

More Opus 5.5 videos, each next to a live remake: [skillry.dev/ai-videos/opus-5-5](https://skillry.dev/ai-videos/opus-5-5?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos)

## Prompt

```text
<inputs>
Ask me for: the one question a user asks my product and its one-line answer, two album covers, a royalty-free song around 110 BPM with a quiet intro and a hard drop (Mixkit, free for commercial use), and my logo for the ending. If I skip any, use the defaults: "is this all code?" / "yes. every frame.", two atmospheric photos, Mixkit "Head Bang".
</inputs>

<direction>
A 22 second square loop, 1440x1440 at 60fps, 2D only, one continuous take. Nothing ever cuts: every scene grows out of the last, and every gesture physically carries the camera into the next world. Every morph glides for 0.8s on cubic-bezier(.45,0,.15,1) and the camera zoom rides the same curve, so shapes change so smoothly you barely notice. Content dissolves in the back half of each glide. One gesture per scene.
Look: a warm light stage (#f3f3f0 to #e3e3de), black UI, the app world dark (#121212) tinted from the current album cover, one green accent (#1ed760). Geist for UI, the real macOS pointer, soft layered shadows that grow with the shape's height.
Banned: hard cuts, bouncy springs, particles, glows, zooming in and straight back out, holds longer than 1s, anything that looks like a template.
</direction>

<structure>
Beats are the song's, and the press lands on its drop.
Generate: the cursor clicks, the pill glides into a spinner, then a check.
Chat: the check splits into three typing dots (goo). The left dot flies up into the question bubble and types it, the right one flies down into the reply. Both contract back into dots while gliding in and pour into the middle one.
Play: the middle dot bends into a play triangle, point by point. The cursor presses it on the drop: a white button pops in under the click and the dark app floods out around it, so the leftover white becomes the play button. The camera pulls back to reveal the full now-playing screen: big cover, title, heart (liked, fills green), progress, controls, volume.
Swipe: the cursor drags the cover sideways, the next track slides in, and the whole app retints from the new cover.
Drag: the camera glides to the volume. The cursor drags it to max and keeps pulling: the bar rubber-bands and drags the camera sideways out of the app, tracking the knob across a dark dotted canvas.
Chart: the line lands and bends up into a green chart while the number counts up. The volume knob becomes its last point.
Dive: the cursor clicks that point and the camera dives into it until the light stage fills the frame.
Ending: an "Ask [my product]" button grows out of the light, thins into a line, and the line fans out into my logo (default: the Claude spark, six copies rotating into twelve rays in Claude orange). It folds back into the line, which thickens into Generate. Last frame = first frame.
</structure>
```
