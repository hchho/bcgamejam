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
        energy: 30
    },
    {
        type: "steak",
        src: "./assets/Food/steak.png",
        energy: 50
    },
    {
        type: "drumstick",
        src: "./assets/Food/drumstick.png",
        energy: 40
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
        src: "./assets/Teddy/teddydown.svg"
    },
    {
        type: "ted_up",
        src: "./assets/Teddy/teddyup.svg"
    },
    {
        type: "Good_4",
        src: "./assets/Teddy/EatGood.svg"
    },
    {
        type: "Bad_4",
        src: "./assets/Teddy/EatBad.svg"
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

// load background image
var bg = document.getElementById("bg");
