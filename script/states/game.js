const State = require('../state');
const STATES = require('../states');

class Game extends State {

    update(dt, keys) {
        if (keys.length > 0) {
            this.next = STATES.GAME;
        }
        return super.update(dt, keys);
    }

    draw(renderer) {
        renderer.isolate({
            font: '72pt Consolas',
            fillStyle: '#fff',
            strokeStyle: '#000',
            lineWidth: 10,
            lineJoin: 'round',
            textAlign: 'center',
            textBaseline: 'middle',
        }, () => {
            renderer.strokeAndFillText('this is game', renderer.center.x, renderer.center.y);
        });
    }
}

module.exports = Game;