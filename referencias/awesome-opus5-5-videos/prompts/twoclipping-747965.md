# Nightshift Product Launch Video

An Opus 5.5 video by [@twoclipping](https://x.com/twoclipping) · [Original post with the video](https://x.com/twoclipping/status/2105927781678747965)

- **Category:** Motion graphics
- **Author:** [@twoclipping](https://x.com/twoclipping)

More Opus 5.5 videos, each next to a live remake: [skillry.dev/ai-videos/opus-5-5](https://skillry.dev/ai-videos/opus-5-5?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos)

## Prompt

```text
<inputs>
Ask me for: my product's name (nightshift) (one lowercase word, it becomes a black wordmark with a period), the one job a user hands it before bed (book 10 sales calls this week), the three results it reports by morning (200 leads found / 200 emails sent / 10 calls booked), two photos of the same place at night and by day (aligned, so a crossfade reads as a real sunrise), one sunny daytime photo for outside the logo, and a song with a big hit near its start. If I skip any, use the defaults.
</inputs>

<direction>
A 24 second square product launch video, 1440x1440 at 60fps, 2D only, one continuous take that loops. The whole video happens inside the period of the wordmark. Outside it's daytime (the sunny photo behind a black wordmark). Inside it's the night photo under iOS-style glass panels (the blurred photo behind each panel, a tint, a rim light). Nothing cuts: every scene grows out of the last, shapes morph, dots fly, colours change under floods. Every morph glides 0.8s on cubic-bezier(.45,0,.15,1) and the camera zoom rides the same curve. Geist, the real macOS pointer, soft shadows that grow with each shape's height.
Banned: flat or gradient backgrounds made in code, camera zooms into tiny points, hard cuts, crossfades between scenes, bouncy springs, particles, glows, holds longer than 1s, cropped type.
</direction>

<structure>
Beats are the song's. The song enters on its big hit as the first pill appears.
Open: the letters slide into the period and vanish into it while it glides to the middle. The period opens like an iris onto the night inside it, and "you log off at 6", then "[product] doesn't", roll through one mask line over the night photo.
Ask: a glass "Ask [product]" pill springs in. The cursor clicks it, it glides into an input and the job types out.
Find: send shrinks the input to a dot that ripples into a 23x15 grid. A scan line sweeps it, 200 dots light up and a counter counts them.
Write: the lit dots pour into a glass email composer. A second, purple cursor labelled "[product]" types a personal opener and presses Send, and the counter runs to 200/200.
Night: the composer becomes a glass orb with a progress ring. A clock chip swaps 11:42 PM, 3:17 AM, 5:02 AM, 6:59 AM while the sky relights from night to dawn and "while you sleep" rolls in.
Results (beat 20): the orb turns black and goo-splits into the three result pills. The checks pop green.
Morning: the pills merge into a Dynamic Island that grows into a phone lock screen: the day photo, the date, a big 7:00, the bezel growing out of the screen edge. Three glass notifications stack in, and the cursor taps the first, which opens like iOS.
Proof: a week calendar (10 meetings pop in, a hover shows one's time), then a pipeline chart ($48,200 counts up, the line draws, a hover follows it). A black flood from the line's end becomes "Start your night shift →" and the cursor clicks it.
Out: the button shrinks into a dot, the whole scene closes down into it like an iris, and the letters slide back out of the period. The tagline rises. Last frame = first frame.
</structure>

<build>
1. One HTML canvas. Everything is a pure function of time inside seek(t): no timers, no state between frames.
2. One element morphs through every state (size, radius, colour, material) from a table of beat times, so retiming is one edit.
3. Render the inside world into an offscreen canvas and reveal it through the period with a circular mask. Never zoom the camera into the dot.
4. Glass: a pre-blurred copy of the photo clipped to the shape, then a tint and a gradient rim.
5. Goo: blur + alpha threshold on an offscreen layer for the split and the merge.
6. Sound: a downloaded SFX for every event, each placed by its measured peak. The song enters on its hit. Loudnorm to -14 LUFS.
7. Render with Playwright at 60fps with 4 motion-blur subframes. Scan every frame for single-frame jumps and fix each one.
</build>

<gotchas>
A camera zoom into an off-centre dot swings sideways and spikes, so open the dot instead. Ease a closing iris by area, not radius, or its first frames jump. A helper that sets globalAlpha must restore the caller's, or fading cards pop. Counters read the frame's time, not the subframe's, or the digits smear.
</gotchas>

<start>
Ask me for the inputs, then show me the beat map and 6 stills (open, find, write, results, phone, out) before you render.
</start>
```
