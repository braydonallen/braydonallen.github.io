// setup variables
const walkAcceleration = 2.5; // how much is added to the speed each frame
const gravity = 1; // how much is subtracted from speedY each frame
const friction = 1.5; // how much the player is slowed each frame
const maxSpeed = 8; // maximum horizontal speed, not vertical
const playerJumpStrength = 20; // this is subtracted from the speedY each jump
let playTimer = 0;
const projectileSpeed = 10 + (playTimer/1000);

/////////////////////////////////////////////////
//////////ONLY CHANGE ABOVE THIS POINT///////////
/////////////////////////////////////////////////

// Base game variables
const frameRate = 60;
const playerScale = 0.8; //makes the player just a bit smaller. Doesn't affect the hitbox, just the image

// Player variables
const player = {
  x: 50,
  y: 100,
  speedX: 0,
  speedY: 0,
  width: undefined,
  height: undefined,
  onGround: false,
  facingRight: true,
  deadAndDeathAnimationDone: false,
};

let hitDx;
let hitDy;
let hitBoxWidth = 50 * playerScale;
let hitBoxHeight = 105 * playerScale;
let firstTimeSetup = true;

const keyPress = {
  any: false,
  up: false,
  left: false,
  down: false,
  right: false,
  space: false,
};

// Player animation variables
const animationTypes = {
  duck: "duck",
  flyingJump: "flying-jump",
  frontDeath: "front-death",
  frontIdle: "front-idle",
  jump: "jump",
  lazer: "lazer",
  run: "run",
  stop: "stop",
  walk: "walk",
};
let currentAnimationType = animationTypes.run;
let frameIndex = 0;
let jumpTimer = 0;
let duckTimer = 0;
let DUCK_COUNTER_IDLE_VALUE = 14;
let debugVar = false;

let spriteHeight = 0;
let spriteWidth = 0;
let spriteX = 0;
let spriteY = 0;
let offsetX = 0;
let offsetY = 0;

// Platform, cannon, projectile, and collectable variables
let platforms = [];
let cannons = [];
const cannonWidth = 200;
const cannonHeight = 200;
let projectiles = [];
const defaultProjectileWidth = 50;
const defaultProjectileHeight = defaultProjectileWidth;
const collectableWidth = 40;
const collectableHeight = 40;
let collectables = [];

// canvas and context variables; must be initialized later
let canvas;
let ctx;

// setup function variable
let setup;

let halleImage;
let animationDetails = {};

var collectableList = {
  wood: { image: "images/collectables/wood.png"},
  stone: { image: "images/collectables/stone.png"},
  coal: { image: "images/collectables/coal.png"},
  copper: { image: "images/collectables/copper.png"},
  iron: { image: "images/collectables/iron.png"},
  redstone: { image: "images/collectables/redstone.png"},
  lapiz: { image: "images/collectables/lapiz.png"},
  gold: { image: "images/collectables/gold.png"},
  diamond: { image: "images/collectables/diamond.png"},
  emerald: { image: "images/collectables/emerald.png"},
  netherite: { image: "images/collectables/netherite.png"},
};
