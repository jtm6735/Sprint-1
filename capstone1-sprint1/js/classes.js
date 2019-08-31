"use strict";
class Sprite{
    constructor(x,y,fwd,speed,width,height,image,type){
        this.x = x;
        this.y = y;
        this.fwd = fwd;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.image = image;
        this.type = type;
    }

    draw(ctx){
        ctx.save();
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        ctx.restore();
    }
}