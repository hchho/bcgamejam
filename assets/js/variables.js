var food;
var player;
var isChinUp;
var chinInterval;
var currEnergy = -100;
var constEnergyLoss = 0.2;


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

var bg_music = new Audio('Podington_Bear_-_Funk.mp3').play();