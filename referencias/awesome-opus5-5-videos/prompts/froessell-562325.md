# Opus 5.5 video by @froessell

[▶ Watch the original and a live remake on Skillry](https://skillry.dev/ai-videos/opus-5-5/froessell-562325?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos) · [Original post](https://x.com/froessell/status/2103789415323562325)

- **Category:** Games & interactive
- **Remake built with:** Three.js · Canvas · Physics · Playable
- **Author:** [@froessell](https://x.com/froessell)

## Prompt

```text
PRD — Police Chase Arcade Game

Working title: Heatwave
Platform: iOS + Android
Engine: Unity
Genre: Top-down 3D arcade chase / survival
Orientation: Portrait
Input: One-thumb touch controls
Business model: TBD — design MVP around gameplay first
Primary goal: Build a genuinely fun playable prototype before adding progression or monetization.
⸻
Product vision
A fast, chaotic mobile arcade game where the player is constantly being pursued by increasingly aggressive police.
The player cannot directly attack.
Instead, they survive by driving aggressively, drifting around obstacles, making sudden turns and tricking pursuing police into crashing into obstacles and each other.
The fantasy is:
You’re not stronger than the police. You’re harder to catch.

Runs should produce constant near-misses, chain collisions and moments where the player escapes a seemingly impossible situation.

Think:

easy controls + aggressive pursuit + physics chaos + escalating pressure.

⸻

Core gameplay loop

START RUN
↓
DRIVE / DRIFT
↓
POLICE PURSUE
↓
BAIT POLICE
↓
DODGE
↓
POLICE CRASH
↓
GAIN SCORE
↓
WANTED LEVEL INCREASES
↓
MORE / HARDER POLICE
↓
SURVIVE
↓
EVENTUALLY GET CAUGHT
↓
SCORE / RESTART

Target run duration:

2–5 minutes.

Restart should take less than 2 seconds.

⸻

Design principles

3.1 One-thumb playable

The player should be able to understand the controls within seconds.
No accelerator.
No brake pedal.
No virtual steering wheel.
The vehicle moves automatically.
The player controls only direction.

(I moved away from this after testing it the first time and added the onscreen joystick)

3.2 Arcade physics, not simulation
Vehicles should:
drift
slide
bounce
spin
collide dramatically
recover quickly
Fun takes priority over physical accuracy.

3.3 Pursuers are weapons
Police are effectively the player’s offensive mechanic.
The player should learn:
“If I turn here, that cop is going straight into that wall.”
3.4 Chaos should remain readable

Even with 10+ vehicles on screen, the player must immediately understand:
where they are
where they’re moving

where police are coming from

what can kill them

3.5 Failure should feel fair

Death should generally result from a mistake the player understands rather than unpredictable physics.

⸻

MVP scope

Do not build progression, upgrades, missions or monetization for the first milestone.

The first version contains:

1 player vehicle

1 arena

1 police vehicle

1 elite police variant

5 wanted levels

physics collisions

environmental obstacles
scoring
player health
police destruction
basic VFX
basic audio

game-over screen

instant restart

That’s enough to determine whether the game deserves further development.

⸻

Player vehicle

Movement

Player vehicle uses a Rigidbody-based arcade controller.

Do not rely heavily on realistic WheelColliders.
Core variables should be exposed in the Unity Inspector:
Acceleration
Maximum Speed
Turn Speed
Turn Curve
Lateral Grip
Drift Factor
Vehicle Mass
Collision Force
Drag
Angular Drag
Recovery Speed
These need to be extremely easy to tune.

⸻

Controls

Recommended first implementation:

Drag steering

Player touches anywhere on the lower portion of the screen.

Dragging horizontally controls steering.

← drag          turn left
→ drag          turn right
Vehicle accelerates automatically.
Steering should be relative rather than absolute.
The player should be able to lift their finger without immediately losing control.
Alternative to prototype
Test:
Hold left/right side of screen = steer left/right.
Don’t commit until both have been tested on a physical phone.
⸻
Drift system
Drifting should happen naturally when turning at speed.
No dedicated drift button.
At low speed:
high traction

At high speed:

reduced lateral traction

This produces controlled sliding.

Long drifts can optionally award score.

Example:

DRIFT
+120
LONG DRIFT
+340

But drift scoring is secondary to police destruction.

⸻
Police AI
Police should feel:
aggressive, predictable and slightly stupid.
They should not simply follow the player’s current position.
Instead, calculate an interception target based on player velocity.
Conceptually:
target =
playerPosition
+
playerVelocity * predictionTime
Police therefore try to cut the player off.
⸻
Police intelligence

Police intentionally have limited obstacle avoidance.

This is important.

Perfect navigation would make the game less fun.

Police should:

pursue aggressively

attempt interception

avoid obvious static obstacles

poorly account for other police
overshoot turns

collide with each other

occasionally take dangerous routes

This creates opportunities for the player.

⸻

Police destruction

Police can be destroyed by:

high-speed obstacle collisions

hitting another police vehicle

chain collisions

environmental hazards

The player does not have weapons.

Example scoring:

COP SMASHED
+250
DOUBLE SMASH
+600
TRIPLE SMASH
+1,000
PILEUP!
+2,000

Chain collisions should be heavily rewarded.

⸻

Wanted system

Wanted level controls difficulty.

★☆☆☆☆
★★☆☆☆
★★★☆☆
★★★★☆
★★★★★

Wanted level increases based primarily on survival time and score.
Level 1
2 police.
Slow and forgiving.

Level 2

3–4 police.

Slightly faster.

Level 3

5–6 police.

More aggressive interception.

Level 4

7–9 police.

Elite police introduced.
Level 5
Maximum chaos.
10+ police depending on device performance.

Elite units appear frequently.

The game should eventually become effectively impossible.

That’s intentional.

⸻

Elite police

The MVP only needs one special police type.

Interceptor

Visually distinct vehicle.
Characteristics:
faster than standard police
lower mass
aggressive prediction
sharp steering
easier to destroy in collisions

This creates a glass-cannon pursuer.

⸻

Player health

Use a simple health bar.

Example:
HULL
██████░░░░
Minor impacts:
small damage.

Heavy impacts:

large damage.

Extremely high-speed impacts:
potential instant destruction.
Police contact alone shouldn’t immediately kill the player.
This allows chaotic scrambles.
⸻
Arena
First arena should be compact.
Something roughly equivalent to:

ROCK

┌─────────────┐
│             │
│   ROCK      │
│             │
│       ███   │
│             │
│ ROCK        │
│         ROCK│
└─────────────┘

Obstacles need enough space between them for high-speed movement.

Avoid procedural generation initially.

Hand-design one good arena.
⸻
Environment
For the first visual theme, I’d use something other than water so we’re not cloning the reference too closely.
My preference:

Desert outlaw chase

Player is an outlaw escaping through a stylized desert environment.

Environment contains:

rock formations

cacti

barriers

abandoned vehicles

ramps

fences

small buildings

dust

destructible props

It also fits the chunky visual language you’re already exploring with Bolt Pit.

⸻

Camera

Top-down perspective camera.

Not completely vertical.

Something approximately:

55–70° downward angle.

Camera follows player with smoothing.

Camera should look slightly ahead in the player’s travel direction.

At high speed:

camera pulls back slightly.

At low speed:

camera moves closer.

⸻
Camera juice
Small camera effects make a large difference.
Light collision
Tiny shake.

Heavy collision

Strong short shake.

Police destruction

Shake + tiny freeze frame.

Example:

50–100 ms hit stop.
Large pileup

Slight zoom impulse + shake + particles.

Don’t overdo continuous shaking.

⸻

Visual style

Chunky stylized 3D.

Characteristics:

simplified geometry

exaggerated proportions

bright readable vehicles

soft lighting

minimal textures

strong silhouettes

exaggerated particles
Avoid realistic vehicle proportions.
Cars should feel almost toy-like.
⸻
VFX
Minimum MVP effects:
Player
dust trail
tire/skid marks
drift smoke

impact sparks

Police

siren lights

smoke when damaged

destruction explosion

debris

Environment

dust

destructible objects

impact particles

⸻
Collision feedback
Every significant collision should combine:
physics + particles + audio + camera response.
Major police destruction:
IMPACT
→ physics impulse
→ vehicle fragments/debris
→ sparks
→ smoke
→ camera shake
→ hit stop
→ sound
→ score popup
This interaction is one of the game’s main sources of satisfaction.
⸻
Score system

Score comes from:

ActionExample
Surviving+10/sec
Police destroyed+250
Driftvariable
Near miss+100
Double collision+600
Triple collision+1,000
Large pileup+2,000

Exact values should remain configurable.

⸻

Near misses

Optional for MVP but potentially valuable.

Detect when a police vehicle passes extremely close to the player at high relative velocity.

Display:

CLOSE CALL! +100

This rewards risky driving.

⸻

UI

During gameplay keep UI extremely minimal.

SCORE                          COINS
13,590                          14
★★★☆☆
WANTED
GAME
HULL
████████░░

No minimap initially.

Off-screen police can use subtle edge indicators.

⸻

Game over

When hull reaches zero:

brief slow motion.

Player crashes.

Then:

BUSTED
SCORE
24,850
BEST
31,220
[ AGAIN ]

Tapping anywhere could restart.

Avoid unnecessary menus between runs.

⸻

Audio

The soundscape should sell speed and collisions.

Required:

engine

tire squeal

police sirens
impact
metal crunch
debris
destruction
UI score sounds
wanted level increase

Sirens should become increasingly chaotic as wanted level increases.

⸻

Technical architecture

Suggested Unity structure:

GameManager
Player
├── PlayerController
├── VehiclePhysics
├── PlayerHealth
└── PlayerEffects
Police
├── PoliceController
├── PoliceAI
├── VehiclePhysics
├── PoliceHealth
└── PoliceEffects
Systems
├── SpawnManager
├── WantedManager
├── ScoreManager
├── AudioManager
├── CameraManager
└── PoolManager
UI
├── HUD
├── WantedUI
├── ScoreUI
├── HealthUI
└── GameOverUI

Avoid building an elaborate framework.

⸻
Object pooling
Police, particles and debris should use object pooling.
Avoid frequent:

Instantiate()
Destroy()

during gameplay.
Mobile performance should be considered from the beginning.
⸻
Performance target

Target:

60 FPS
on a mid-range modern iPhone/Android device.
Initial limits:

~12 active vehicles

~100 simple debris/particles

simple shadows

limited real-time lights

Performance should be tested on device early.

⸻
Development milestones
Milestone 1 — Greybox driving
Build:
empty arena
cube player
touch steering
acceleration
drifting

camera

Success criterion:

Driving around an empty arena feels satisfying.

Do not continue until it does.

⸻
Milestone 2 — The chase
Add:
one police vehicle
pursuit AI
interception
collisions
Success criterion:

Dodging one police car is entertaining.

⸻

Milestone 3 — Emergent chaos

Add:

multiple police

police-police collisions

obstacles

destruction

scoring

Success criterion:

Player can intentionally cause:

police → police
and
police → environment
collisions.
This is the critical milestone.
⸻
Milestone 4 — Escalation

Add:

wanted levels

spawning

difficulty scaling

interceptor

Now a run has an arc:

calm
↓
pressure
↓
chaos
↓
panic
↓
death

⸻

Milestone 5 — Juice
Add:
particles
camera shake
hit stop
skid marks

dust

sirens

collision sounds

score popups

⸻

Milestone 6 — Mobile build

Build for real devices.
Test:
controls
performance
readability
battery/thermal behaviour
different screen ratios
⸻
Milestone 7 — Decide whether to continue

At this point, stop development temporarily.

Don’t immediately build a garage and 37 unlockable cars.

Put the build in front of people.

The important questions are:

Do people immediately understand it?
Do they restart after dying?
Do they intentionally try to make cops crash?
Does “one more run” happen naturally?
If not, work on the core loop rather than adding content.
⸻
Phase 2 — only after validation
If the prototype works, then expand into:
Cars
↓
Coins
↓
Unlocks
↓
Challenges
↓
New arenas
↓
Special police
↓
Upgrades
↓
Daily challenges
↓
Leaderboards
Potential environments:
desert
city
docks
snow
industrial yard
airport
construction site
military base
And then there’s room for ridiculous police units: SUVs, armored vans, helicopters dropping roadblocks, etc.

I have opened a @[Unity CLI installation] project which we can work in. The art style of the game should be fun and cartoony and the action also over the top.
I have imported the Topdown engine into the project as well that we can use:
https://topdown-engine.moremountains.com/

I want the game to be optimized for mobile, but should work on desktop while testing.
```
