var objects = [
    {
        type: "apple",
        src: "./assets/Food/apple.png",
        energy: 15
    },
    {
        type: "carrot",
        src: "./assets/Food/carrot.png",
        energy: 10
    },
    {
        type: "fish",
        src: "./assets/Food/fish.png",
        energy: 20
    },
    {
        type: "steak",
        src: "./assets/Food/steak.png",
        energy: 25
    },
    {
        type: "drumstick",
        src: "./assets/Food/drumstick.png",
        energy: 20
    },
    {
        type: "chips",
        src: "./assets/Food/chips.png",
        energy: -15
    },
    {
        type: "chocolate",
        src: "./assets/Food/chocolate.png",
        energy: -20
    },
    {
        type: "doughnut",
        src: "./assets/Food/doughnut.png",
        energy: -25
    },
    {
        type: "hotdog",
        src: "./assets/Food/hotdog.png",
        energy: -15
    },
    {
        type: "pizza",
        src: "./assets/Food/pizza.png",
        energy: -15
    },
    {
        type: "ted_down",
        src: "./assets/Teddy/Ted_0.png"
    },
    {
        type: "ted_up",
        src: "./assets/Teddy/Ted_1.png"
    },
    {
        type: "bg",
        src: "./assets/Background/ingame_bg.png"
    },
]

objects.forEach(function(item) {
    var i = document.createElement("IMG");
    i.setAttribute("src", item.src);
    i.setAttribute("id", item.type);
    document.body.appendChild(i);
});

// load teddy image
var tedImg = document.getElementById("ted_down");

var loadEatingTed = function(status) {
    let path = "./assets/Teddy/Eating";
    for (i = 1; i < 5; i++) {
        var i = document.createElement("IMG");
        i.setAttribute("src", path + status + "_" + i + ".png");
        i.setAttribute("id", status + "_" + i);
        document.body.appendChild(i);
    }
}

loadEatingTed("Good");
loadEatingTed("Bad");

// load background image
var bg = document.getElementById("bg");