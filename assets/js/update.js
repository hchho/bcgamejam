function updateGameArea() {
    console.log(state);
    // console.log(isChinUp);
    // console.log(currEnergy);
    if (state == END) {
        // console.log("hel");
        $(".menu").show();
        // $(".menuImg").hide();
        $(".start").hide();
        $(".replay").show();
        // $('body > :not(.replay)').hide();
    }

    if (!alive) {
        console.log("dead");
        state = END;
        isChinUp = false;
        currEnergy = MAX_ENERGY;
        alive = true;
        // state = MAIN_MENU;
    }

    if (state == PLAY) {
        myGameArea.clear();
        player.angle = 0;
        player.speed = 0;
        if (food.x >= 480) {
            food.foodNum = getRandomInt(4);
            food.x = 0;
        }

        if(chinInterval > BUTTON_INTERVAL && (myGameArea.keys && myGameArea.keys[38])) {


            if (isChinUp) { // going down
                // player.y += chinUpDist;
                document.getElementById("ted").src= "assets/Teddy/Ted_0.png"; // change ted image

                isChinUp = false;

            } else { // going up
                // player.y -= chinUpDist;
                document.getElementById("ted").src= "assets/Teddy/Ted_1.png";

                isChinUp = true;
                currEnergy += ENERGY_LOSS;
                var grunt = new Audio('grunt.mp3').play();
            }
            chinInterval = 0;

        }


        if (alive) {
            currEnergy += constEnergyLoss;
            if (isChinUp) {
                currEnergy += ENERGY_LOSS;
            }
        }

        if (currEnergy > 0) {
            currEnergy = 0;
            alive = false;
            // myGameArea.stop();
        }

        if (state == END) {
            console.log("END");
            $(".menu").show();
            $('.replay').show();
            // myGameArea.stop();
        }

        if (isChinUp && (food.y < 18 && food.y > 13 && food.x > 210 && food.x < 255 )){

            if (currEnergy - food.energyGain >= MAX_ENERGY) {
                currEnergy -= food.energyGain;
            } else {
                currEnergy = MAX_ENERGY;
            }
            food.foodNum = getRandomInt(4);
            food.x = 0;
            console.log("score");
        }
        player.update();
        food.newPos();
        food.update();
        healthBar.update();
        chinInterval++;
    }
}
