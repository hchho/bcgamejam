function component(width, height, color, x, y, type) {
                this.type = type;
                this.width = width;
                this.height = height;
                this.speed = 3;
                this.angle = 0;
                var bouncer = 0;
                this.x = x;
                this.y = y;
                this.foodNum = getRandomInt(FOOD_ITEMS);
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
                          ctx.drawImage(bg, 0, 0, canWidth, canHeight);
                          ctx.drawImage(tedImg, 0, 0, canWidth, canHeight);
                      } else if (type == "healthBar") {
                          if (currEnergy > MAX_ENERGY / 2) {
                              color = "red";
                          } else {
                              color = "blue";
                          }
                          ctx.fillStyle = color;
                          ctx.strokeRect(this.x, this.y, BAR_WIDTH, MAX_ENERGY);
                          ctx.fillRect(this.x, this.y, BAR_WIDTH, currEnergy);
                      } else if (type == "pointCounter") {
                          ctx.font ="24px Krungthep";
                          ctx.fillText("Points: " + counter, x, y);
                      } else if (type == "highScoreBoard") {
                          ctx.font ="24px Krungthep";
                          // ctx.fillText("High Score: " + highScore, x, y);
                      } else if (type =="level") {
                          ctx.font = "24px Krungthep";
                          // ctx.fillText("Level: " + level, x, y);
                      }


                    ctx.restore();
                }
                this.newPos = function(time) {
                    var rand = Math.random(0, 1) * 50;
                  if (state == PLAY) {
                    bouncer++;
                    this.y += 3 * Math.sin(bouncer / 4) * 4;
                    this.x += this.speed * Math.cos(this.angle);
                  }

                }
            }
