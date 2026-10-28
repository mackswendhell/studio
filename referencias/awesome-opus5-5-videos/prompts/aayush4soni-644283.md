# Opus 5.5 video by @aayush4soni

[▶ Watch the original and a live remake on Skillry](https://skillry.dev/ai-videos/opus-5-5/aayush4soni-644283?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos) · [Original post](https://x.com/aayush4soni/status/2104181266459644283)

- **Category:** 3D scenes
- **Remake built with:** Three.js · Canvas
- **Author:** [@aayush4soni](https://x.com/aayush4soni)

> The author didn't publish the full prompt. Below is the text of their original post.

## Prompt

```text
My family is planning to build a house, and all we had was the floor plan. I wanted to see how it would really look once it's built: which colors, layout and design would suit it best.

So I gave the plan to Claude Opus 5.5 and asked it to create a 3D view of the house.

It's one of the most useful things I've created recently. We can now walk through the house before a single brick is laid, and when we want to try a different color or layout, I just ask for the change.

In the video: the hall, room, and the terrace at dusk, all at eye height.

How it worked:

• I gave it the 5-page floor-plan PDF and one reference image for the front of the house.
• It read the drawings and rebuilt every floor: walls, doors, windows and stairs.
• Where a printed size didn't match the drawn wall, it flagged it (15 places) instead of quietly guessing.
• It furnished every room itself: 500+ pieces of furniture, decor and lighting.
• Everything runs in a web browser with three.js. No Blender, no game engine. You can walk through it like a game, in daylight or evening light, and the lamps actually light the rooms.
• It treated it like a real software project: ~37k lines of JavaScript, 185 unit tests, 56 browser tests, and deterministic video capture (render the same frame twice, get identical pixels).
• It even tracked down a bug of its own: a room's lighting changed depending on which room you walked in from.
• It split the work across sub-agents. Start to finish took about two days.

My part was the decisions: what each room is for, the style, and the changes I wanted.
```
