const { getStartingState, getNextState } = require('./stateFactory');
const renderer = require('./renderer');

const keys = [];
window.addEventListener('keydown', ({ keyCode }) => {
    const index = keys.indexOf(keyCode);
    if (index > -1) return;
    keys.push(keyCode);
});

window.addEventListener('keyup', ({ keyCode }) => {
    const index = keys.indexOf(keyCode);
    if (index < 0) return;
    keys.splice(index, 1);
});

let state = getStartingState();

// load any images - we could loop through the img folder if we needed to
// renderer.loadSprite('frog', './img/frog.png');

let last = (new Date()).getTime();
const update = () => {
    const time = (new Date()).getTime();
    const dt = time - last;

    try {
        // Update the current game state - it should return the new state type and args if we need to change
        const next = state.update(dt, keys);
        if (next) {
            state = getNextState(next);
        }
    } catch (ex) {
        console.error('Error while updating', ex);
    }
    last = time;
    setTimeout(update, 16);
};

const draw = () => {
    renderer.reset();
    try {
        state.draw(renderer);
    } catch (ex) {
        console.error('Error while drawing', ex);
    }
    window.requestAnimationFrame(draw);
};

update();
requestAnimationFrame(draw);
