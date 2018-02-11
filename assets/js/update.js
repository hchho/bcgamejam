function updateGameArea() {
    if (state == END) {
        $(".end").show();
    }

    if (!alive) {
        state = END;
        isChinUp = false;
        tedImg = document.getElementById("ted_down");
        currEnergy = MAX_ENERGY;
        alive = true;
    }

    if (state == PLAY) {
        myGameArea.clear();
        player.angle = 0;
        player.speed = 0;
        if (food.x >= 480) {
            food.foodNum = getRandomInt(FOOD_ITEMS);
            food.x = 0;
        }

        if(chinInterval > BUTTON_INTERVAL && (myGameArea.keys && myGameArea.keys[38])) {


            if (isChinUp) { // going down
                tedImg = document.getElementById("ted_down");
                isChinUp = false;

            } else { // going up
                tedImg = document.getElementById("ted_up");
                isChinUp = true;
                currEnergy += ENERGY_LOSS;
                grunt.play();
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
        }

        // if (isChinUp && (food.y < 18 && food.y > 13 && food.x > 210 && food.x < 255 )){
        if (isChinUp && (food.y < 18 && food.y > 13 && food.x > canWidth/2 - HIT_RANGE && food.x < canWidth/2 + HIT_RANGE )){
            if (currEnergy - food.energyGain >= MAX_ENERGY) {
                currEnergy -= food.energyGain;
                if (food.energyGain > 0) {
                    eat_good.play();
                    tedImg = document.getElementById("Good_4");
                } else {
                    eat_bad.play();
                    tedImg = document.getElementById("Bad_4");
                }
            } else {
                currEnergy = MAX_ENERGY;
            }
            food.foodNum = getRandomInt(FOOD_ITEMS);
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
