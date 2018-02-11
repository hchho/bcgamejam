var food;
var player;
var isChinUp;
var chinInterval;
var currEnergy = -200;
var constEnergyLoss = 0.05;
var counter = 0;
var highScore = 0;
var level = 1;
var leveler = 5;

var canWidth;
var canHeight;

// health bar
const BAR_WIDTH = 20;
const BAR_X = 10;
const BAR_Y = 210;
const MAX_ENERGY = -200;
const ENERGY_LOSS = 0.15;
const chinUpDist = 100;

// game states
const MAIN_MENU = 0;
const PLAY = 1;
const END = 2;
var state = MAIN_MENU;

var alive = true;

const BUTTON_INTERVAL = 16;

const FOOD_ITEMS = 9;

var bg_music = new Audio('Podington_Bear_-_Funk.mp3');

bg_music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

bg_music.play();