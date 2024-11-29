// Constants 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Helper function to generate random numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Parent Shape Class
class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

// Ball Class (inherits from Shape)
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
    }
}

// EvilCircle Class (inherits from Shape)
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
                // Change the color of the ball and EvilCircle upon collision
                balls[i].color = this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

                // Optional: You can also move the ball out of the EvilCircle
                balls[i].x = random(balls[i].size, width - balls[i].size);
                balls[i].y = random(balls[i].size, height - balls[i].size);
            }
        }
    }
}

// Create random Balls
const balls = [];
while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
        random(size, width - size),
        random(size, height - size),
        random(-7, 7),
        random(-7, 7),
        `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
        size
    );
    balls.push(ball);
}

// Create an EvilCircle at the center of the canvas
const evilCircle = new EvilCircle(
    width / 2, // Center horizontally
    height / 2, // Center vertically
    random(-7, 7),
    random(-7, 7),
    'white',
    20 // Size of the EvilCircle
);

// Loop function for animation
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    // Update and draw all balls
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
    }

    // Draw EvilCircle, check its bounds, and detect collisions
    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    // Request next frame
    requestAnimationFrame(loop);
}

// Start the animation loop
loop();
