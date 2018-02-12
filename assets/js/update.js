function updateGameArea() {
    // console.log("leveler: " + leveler);
    // console.log("level: " + level);
    if (state == END) {
        $(".end").show();
        $('.high-score').text("HIGH SCORE");
        $('.score').text(highScore);
    }

    if (!alive) {
        constEnergyLoss = 0.05;
        leveler = 5;
        level = 1;
        state = END;
        isChinUp = false;
        tedImg = document.getElementById("ted_down");
        currEnergy = MAX_ENERGY;
        alive = true;
        // chinInterval = 0;
    }

    if (state == PLAY) {
        myGameArea.clear();
        player.angle = 0;
        player.speed = 0;
        if (food.x >= 480) {
            food.foodNum = getRandomInt(FOOD_ITEMS);
            food.x = 0;
        }

        if(chinInterval > BUTTON_INTERVAL
            && ((myGameArea.keys && myGameArea.keys[32]) || myGameArea.touch)) {
            if (isChinUp) { // going down
                tedImg = document.getElementById("ted_down");
                isChinUp = false;

            } else { // going up
                tedImg = document.getElementById("ted_up");
                isChinUp = true;
                counter++;

                //increases difficulty based on counter
                if(counter == leveler) {
                    leveler += 5;
                    food.speed += 0.25;
                    level++;
                    constEnergyLoss += 0.08;
                }



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
            if (counter >= highScore) {
                highScore = counter;
            }
            food.speed = 3;
            counter = 0;
            alive = false;
//            myGameArea.stop();
        }

        if (state == END) {
            // console.log("END");

            $(".menu").show();
            $('.replay').show();
            // myGameArea.stop();
        }


        // if (isChinUp && (food.y < 18 && food.y > 13 && food.x > 210 && food.x < 255 )){
        if (isChinUp && (food.x > canWidth/2 - HIT_RANGE && food.x < canWidth/2 - 35 )){
            if (currEnergy - food.energyGain >= MAX_ENERGY) {
                currEnergy -= food.energyGain;
                if (food.energyGain > 0) {
                    eat_good.play();
                    eat_bad.pause();
                    eat_bad.currentTime = 0;
                    grunt.pause();
                    grunt.currentTime = 0;
                    tedImg = document.getElementById("Good_4");
                } else {
                    eat_bad.play();
                    eat_good.pause();
                    eat_good.currentTime = 0;
                    grunt.pause();
                    grunt.currentTime = 0;
                    tedImg = document.getElementById("Bad_4");
                }
            } else {
                currEnergy = MAX_ENERGY;
            }
            food.foodNum = getRandomInt(FOOD_ITEMS);
            food.x = -10;
        }

        if (currEnergy > MAX_ENERGY / 2) {
            just_do_it.play();
        }
        if (just_do_it.currentTime >= 3.30) {
            just_do_it.pause();
            just_do_it.currentTime = 0;
        }
        player.update();
        food.newPos();
        food.update();
        healthBar.update();
        pointCounter.update();
        highScoreBoard.update();
        difficultyLevel.update();
        chinInterval++;
    }
}
