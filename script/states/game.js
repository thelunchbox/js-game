const State = require('../state');
const STATES = require('../states');
const GRAVITY = 16.9;

class Game extends State {

    constructor() {
        super();
        this.player = {
            vx: 0,
            vy: 0,
            x: 800,
            y: 0,
        };
    }

    update(dt, keys) {
        if (keys.includes(38)) {
            if (this.player.y === 0) {
                this.player.vy = 100;
            }
        }
        if (keys.includes(37)) {
            this.player.vx = -50;
        }
        if (keys.includes(39)) {
            this.player.vx = 50;
        }

        const seconds = dt / 100;
        this.player.y = Math.max(0, this.player.y + this.player.vy * seconds);
        this.player.vy = this.player.y === 0 ? 0 : this.player.vy - (seconds * GRAVITY);
        const newX = this.player.x + (this.player.vx * seconds);
        this.player.x = Math.max(20, Math.min(1580, newX));
        this.player.vx *= 0.9;

        return super.update(dt, keys);
    }

    draw(renderer) {
        renderer.isolate({
            fillStyle: '#fff',
        }, () => {
            renderer.context.fillRect(this.player.x - 20, 900 - (this.player.y + 40), 40, 40);
        });
    }
}

module.exports = Game;