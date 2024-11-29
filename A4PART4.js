// Constants 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Helper function to generate random numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Parent Shape class
class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

// Ball class (inherits from Shape)
class Ball extends Shape {
    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY); // Call to Shape constructor
        this.color = color;
        this.size = size;
    }

    // Draw the ball
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Update ball's position and detect boundaries
    update() {
        if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
            this.velX = -this.velX;
        }

        if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
        // Commit 5: Defined EvilCircle class (inherits from Shape) and added collision detection
class EvilCircle extends Shape {
    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY); // Call to Shape constructor
        this.color = color;
        this.size = size;
    }

    // Draw the EvilCircle
    draw() {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // Check bounds for EvilCircle and make sure it stays within the canvas
    checkBounds() {
        if ((this.x + this.size) >= width) {
            this.x = width - this.size;
        }

        if ((this.x - this.size) <= 0) {
            this.x = this.size;
        }

        if ((this.y + this.size) >= height) {
            this.y = height - this.size;
        }

        if ((this.y - this.size) <= 0) {
            this.y = this.size;
        }
    }

    // Collision detection for EvilCircle with other Balls
    collisionDetect() {
        for (let i = 0; i < balls.length; i++) {
            const dx = this.x - balls[i].x;
            const dy = this.y - balls[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[i].size) {
                balls[i].color = this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
            }
        }
    }
}

    }
}
