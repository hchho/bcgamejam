var food;
var player;
var isChinUp;
var chinInterval;
var currEnergy = -100;
var constEnergyLoss = 0.2;

var canWidth;
var canHeight;

// health bar
const BAR_WIDTH = 20;
const BAR_X = 10;
const BAR_Y = 110;
const MAX_ENERGY = -100;
const ENERGY_LOSS = 0.25;
const chinUpDist = 100;

// game states
const MAIN_MENU = 0;
const PLAY = 1;
const END = 2;
var state = MAIN_MENU;

var alive = true;

const BUTTON_INTERVAL = 16;

const FOOD_ITEMS = 9;

const HIT_RANGE = 60;

var bg_music = new Audio('assets/sounds/Podington_Bear_-_Funk.mp3');

bg_music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

bg_music.play();