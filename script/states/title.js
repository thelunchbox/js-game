const State = require('../state');
const STATES = require('../states');

class Title extends State {

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
            strokeStyle: '#e00',
            lineWidth: 10,
            lineJoin: 'round',
            textAlign: 'center',
            textBaseline: 'middle',
        }, () => {
            renderer.strokeAndFillText('js13k', renderer.center.x, renderer.center.y);
        });
    }
}

module.exports = Title;