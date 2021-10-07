'use strict';



class Particle {
    constructor(canvas, context){
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.radius = Math.floor(Math.random() * 2.25)
        this.area = this.radius ** 2 * Math.PI
        this.velocity = Math.random() + 0.1
        this.canvas = canvas
        this.context = context;
        this.opacity = Math.random() 

    }

    move() {
        this.x += Math.sin(this.area) * this.velocity
        this.y += Math.cos(this.area) * this.velocity
        this.opacity += Math.random() / 500
      
        return this
    }

    render() {
        this.context.beginPath();
        this.context.arc(this.x,this.y,this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = `rgba(255,255,255,${1 - this.opacity})`;
        this.context.fill();
        this.context.closePath();    
    }

}
