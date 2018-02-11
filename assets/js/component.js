function component(width, height, color, x, y, type) {
                this.type = type;
                this.width = width;
                this.height = height;
                this.speed = 3;
                this.angle = 0;
                var bouncer = 0;
                this.x = x;
                this.y = y;
                this.foodNum = getRandomInt(4);
                //update every 20 milliseconds
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
                          // var teddyImg = document.getElementById("teddy");
                          ctx.drawImage(tedImg, 0, -1, tedImg.width/4, tedImg.height/4);
                          // ctx.drawImage(tedImg, -60, -246, tedImg.width/2, tedImg.height/2);
                      } else if (type == "healthBar") {
                          ctx.fillStyle = color;
                          ctx.strokeRect(this.x, this.y, BAR_WIDTH, MAX_ENERGY);
                          ctx.fillRect(this.x, this.y, BAR_WIDTH, currEnergy);
                      }


                    ctx.restore();
                }
                this.newPos = function(time) {
                    var rand = Math.random(0, 1) * 50;
                  if (state == PLAY) {
                    bouncer++;
                    this.y = this.speed * Math.sin(bouncer / 4) * 5;
                    this.x += this.speed * Math.cos(this.angle);
                  }

                }
            }
