'use strict';

class Canvas {
    constructor(canvas, parentContainer) {
        this.canvas = canvas
        this.parentContainer = parentContainer;
        this.context = canvas.getContext('2d')
        this.particles = this._makeParticles()
    }

    _makeParticles(){
        return Array.from({ length: 300}, () => new Particle(this.canvas, this.context))
    }

    canvasWindowResize() {
        this.canvas.setAttribute('height', this.parentContainer.clientHeight);
        this.canvas.setAttribute('width', this.parentContainer.clientWidth);
        return this
    }

    _clearCanvas(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animateParticles(){
        setInterval(()=> this._particlesRender(), 100)
    }

    _particlesRender(){
        this._clearCanvas()
        this.particles.forEach((p, i, arr) => {
          p.move();
          if (p.x > this.canvas.width || p.y > this.canvas.height || 1 - p.opacity < 0 ) {
            arr.splice(i, 1);
            arr.push(new Particle(this.canvas, this.context));
          } else {
            p.render();
          }
        });
    }

}


const canvas =  document.querySelector('canvas')
const body = document.querySelector("body");
const canvasSpace = new Canvas(canvas, body)

window.addEventListener("DOMContentLoaded", ()=> {
    canvasSpace.canvasWindowResize().animateParticles()
})

window.addEventListener("resize", ()=> {
    canvasSpace.canvasWindowResize()
})
