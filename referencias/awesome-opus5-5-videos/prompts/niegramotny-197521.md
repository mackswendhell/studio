# Opus 5.5 video by @_nieGRAMotny_

[▶ Watch the original and a live remake on Skillry](https://skillry.dev/ai-videos/opus-5-5/niegramotny-197521?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos) · [Original post](https://x.com/_nieGRAMotny_/status/2103128800909197521)

- **Category:** Games & interactive
- **Remake built with:** Three.js · GLSL · Canvas · Physics
- **Author:** [@_nieGRAMotny_](https://x.com/_nieGRAMotny_)

## Prompt

```text
Build a racing game inspired by Ignition (1997): angled top-down camera, arcade-leaning
physics, vehicles with very distinct personalities. This must be an original game,
not a copy. Use an original name, an original track, and zero original assets.

## Stack
- Vite + TypeScript (strict), Three.js for rendering, no UI framework
  (HUD in plain DOM/CSS).
- Low-poly graphics generated in code (BoxGeometry, CylinderGeometry, etc.),
  no external models or textures. Solid colors and simple materials.
- Custom simplified 2.5D physics (movement on the XZ plane, height from terrain).
  No physics engine.

## Architecture
- src/game/ (game loop with fixed timestep), src/vehicles/, src/track/, src/ai/,
  src/render/, src/ui/
- Vehicles are data-driven: mass, power, top speed, grip, steering, collision
  resistance, and boost parameters (strength, duration, recharge time).
  One Vehicle class, different configurations.
- Any vehicle can be controlled by either the player or the AI
  (shared control interface: throttle, brake, steer, boost).
- Track as data: centerline spline + width + list of zones
  (ice, shortcut, obstacle). Generate the road mesh and AI waypoints from it.

## Vehicles (original names, no brands)
Four vehicles. The player picks one on the selection screen; the remaining 3
are driven by the AI.
- 90s-style police sedan (black and white, light bar): heavy, stable,
  pushes hard in collisions.
- Muscle car convertible: fastest on straights, oversteers in corners.
- Red monster truck: slow, but ignores bumps and rams everything else.
- Postal delivery van: slow, high center of gravity, sways in corners.
The handling differences must be clearly noticeable. All four must be playable
and competitive. Slower vehicles compensate with e.g. collision resistance,
terrain handling, or a stronger or more frequent boost.

## Boost
- Every vehicle has a boost: a short, pronounced acceleration beyond its
  normal top speed.
- Boost charges automatically from 0 to 100%. It can only be used at 100%.
  After use, the meter drops to 0 and starts charging again.
- Strength, duration and recharge time are unique to each vehicle
  (e.g. muscle car: short and very strong; van: weaker but recharges fast;
  monster truck: long but slow to recharge).
- Visual effect while boosting: exhaust flame or trail, slight camera
  pull-back.
- The AI also uses boost, sensibly: on straights, not before sharp corners
  or on ice.

## Track
A mountain town with a Canadian feel, winter turning into spring thaw:
- closed loop, roughly 60–90 seconds per lap
- a waterfall visible from the track and a wooden bridge over a river
- a railroad crossing with a train passing periodically
  (collision = strong knockback, not game over)
- ice patches with reduced grip
- one shortcut (tight, risky); decorations: spruce trees, wooden houses, snow
- barriers or natural obstacles so vehicles can't get stuck off the track.
  Failsafe: if a vehicle (including bots) is stuck for more than ~4 s,
  automatically return it to the track at the last checkpoint.

## Gameplay
- 3 laps, standing grid start, 3-2-1 countdown
- AI follows waypoints with a driving style that depends on the vehicle,
  light rubber-banding, avoids obstacles, no teleporting (except the
  failsafe track return described above)
- Sliding comes purely from physics (grip, speed, ice), no handbrake
- Camera: top-down at ~50°, follows the player with a slight look-ahead
  in the direction of travel
- Controls: arrows/WASD (throttle, brake/reverse, steering), space = boost
- Screens: start → vehicle selection (model preview + stat bars, including
  boost) → race → results → restart (with option to change vehicle)

## HUD
- Position, lap, lap time, best lap, minimap.
- Boost meter styled as a car battery: rectangular casing with two terminals
  (+/−) on top, fill level rises as it charges. Color shifts from red through
  yellow to green. At 100% the battery clearly signals readiness (pulsing or
  glow, "BOOST" label or lightning bolt icon). While boosting, the meter
  drains quickly.

## Out of scope for v1
Sound, options menu, multiple tracks, multiplayer, save state.

## Workflow
1. First propose a plan and file structure, then implement in stages:
   (a) game loop + one vehicle on a flat plane, including boost,
   (b) track, (c) remaining vehicles and AI, (d) obstacles and train,
   (e) vehicle selection, HUD with battery meter, and screens.
2. After each stage run `npm run build` and fix type errors.
3. Add unit tests (Vitest) for vehicle physics, boost logic (charging,
   lockout below 100%, reset after use), and lap/position logic.
4. Finally: a README describing the controls and how to add a new track
   or vehicle.

## Acceptance criteria
`npm install && npm run dev` launches the game. You can pick any of the 4
vehicles and complete 3 laps against 3 bots. Each vehicle handles differently
and has a noticeably different boost. Boost only works with a full battery,
and bots use it too. The train and ice work. Results show the correct order.
Stable 60 FPS on an average laptop.
```
