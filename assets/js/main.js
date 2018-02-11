// Updating .overlay on button clicks
$(".end").hide();
$(".start").click(function() {
    $(".menu").hide();
    state = PLAY;
    startGame();
});

$(".play-again").click(function() {
    $(".menu").hide();
    $(".end").hide();
    state = PLAY;
});

// storing canvas height and width
canHeight = window.innerHeight;
canWidth = canHeight * (9/16);
$('.overlay').width(canWidth);
$('.overlay').height(canHeight);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function startGame() {
    food = new component(30, 30, "red", 0, 100, "food");
    player = new component(0, 0, "blue", 0, 0, "player");
    healthBar = new component(BAR_WIDTH, currEnergy, "blue", BAR_X, BAR_Y, "healthBar");
    // bg = new component(0, 0, "blue", canWidth, canHeight, "bg");
    // strength = new component(BAR_WIDTH, currStrength, "red", 40, BAR_Y, "strength");
    pointCounter = new component(0,0, "blue", 150, 550, "pointCounter");
    highScoreBoard = new component(0,0,"blue", 150, 650, "highScoreBoard");
    difficultyLevel = new component(0,0,"blue", 150, 600, "level");
    isChinUp = false;
    chinInterval = 0;

    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        // this.canvas.width = 414;
        // this.canvas.height = 736;
        this.canvas.height = window.innerHeight;
        this.canvas.width = this.canvas.height * (9/16);
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })


    },
    stop : function() {
        clearInterval(this.interval);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
