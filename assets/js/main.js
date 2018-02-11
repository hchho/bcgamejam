function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function startGame() {
    food = new component(30, 30, "red", 0, 0, "food");
    player = new component(0, 0, "blue", 414/7, 245, "player");
    healthBar = new component(BAR_WIDTH, currEnergy, "blue", BAR_X, BAR_Y, "healthBar");
    strength = new component(BAR_WIDTH, currStrength, "red", 40, BAR_Y, "strength");
    pointCounter = new component(0,0, "blue", 150, 400, "pointCounter");
    isChinUp = false;
    chinInterval = 0;

    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 414;
        this.canvas.height = 736;
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