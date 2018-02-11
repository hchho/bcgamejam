function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 3;
    this.angle = 0;
    this.x = x;
    this.y = y;
    this.foodNum = getRandomInt(4);
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
            if(type == "food") {
                this.energyGain = objects[this.foodNum].energy;
                ctx.translate(this.x, this.y);
                var img = document.getElementById(objects[this.foodNum].type);
                ctx.drawImage(img, 10, 10);
            } else if (type == "player") {
                ctx.translate(this.x, this.y);
            //   var tedImg = document.getElementById("ted");
                ctx.drawImage(tedImg, 0, 0, tedImg.width, tedImg.height);
            } else if (type == "healthBar") {
                ctx.fillStyle = color;
                ctx.strokeRect(this.x, this.y, BAR_WIDTH, MAX_ENERGY);
                ctx.fillRect(this.x, this.y, BAR_WIDTH, currEnergy);
            } else if(type == "pointCounter") {
                ctx.font="40px Arial";
                ctx.fillText("Points: " + counter, x, y);
            } else if (type == "strength") {
                ctx.fillStyle = color;
                ctx.strokeRect(this.x, this.y, BAR_WIDTH, MAX_ENERGY);
            ctx.fillRect(this.x, this.y, BAR_WIDTH, currStrength);
            }


        ctx.restore();
    }
    this.newPos = function(time) {
        if (state == PLAY) {
        this.y += this.speed * Math.sin(this.angle)
        this.x += this.speed * Math.cos(this.angle);
        }

    }
}