// Establishes what the canvas is
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576
// Controls
const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    s:{
        pressed: false
    },
    w:{
        pressed: false
    },
    shift:{
        pressed: false
    }
}
// Detects last key that was pressed
let lastkey


// Inplies what a "Player" is
class Player {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.width = 30
        this.height = 30
    }
    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.velocity.x = 0
        this.velocity.y = 0
        if (keys.d.pressed == true) {
            this.velocity.x = 15
        }

        if (keys.a.pressed == true) {
            this.velocity.x = -15
        }

        if (keys.w.pressed == true) {
            this.velocity.y = -15
        }

        if (keys.s.pressed == true) {
            this.velocity.y = 15
        }

    }
}
// Establishes Player
const player = new Player({
    position:{
        x:0,
        y:0
    },
    velocity:{
        x:0,
        y:0
    }
})

// Keyboard Detection
window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = true
            lastkey = "d"
            break;
        case 'a':
            keys.a.pressed = true
            lastkey = "a"
            break;
        case 's':
            keys.s.pressed = true
            lastkey = "s"
            break;
        case 'w':
            keys.w.pressed = true
            lastkey = "w"
            break;
        case 'Shift':
            keys.shift.pressed = true
            lastkey = "shift"
    }
    console.log(event.key)
})
window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
        case 's':
            keys.s.pressed = false
            break;
        case 'w':
            keys.w.pressed = false
            break;
        case 'shift':
            keys.shift.pressed = false
    }

})

// Starts animation loop
function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}
animate()