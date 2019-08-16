const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const resizeCanvas = function () {
    const normalRatio = canvas.width / canvas.height;
    const newRatio = window.innerWidth / window.innerHeight;
    let scale = 1;
    if (newRatio < normalRatio) {
        // tall and skinny
        scale = window.innerWidth / canvas.width;
    } else if (newRatio >= normalRatio) {
        // short and fat
        scale = window.innerHeight / canvas.height;
    }
    canvas.style.transform = 'translate(-50%, -50%) scale(' + scale + ', ' + scale + ')';
}

window.addEventListener('resize', event => {
    resizeCanvas();
});

setTimeout(resizeCanvas, 10);

function reset() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
}

function applySettings(settings) {
    const props = Object.keys(settings);
    props.forEach(prop => {
        context[prop] = settings[prop];
    });
}

function isolate(settings, actions) {
    context.save();
    context.beginPath();
    applySettings(settings);
    actions();
    context.closePath();
    context.restore();
}

function strokeAndFillText(...args) {
    context.strokeText(...args);
    context.fillText(...args);
}

module.exports = {
    canvas,
    center: {
        x: 800,
        y: 450,
    },
    context,
    reset,
    applySettings,
    isolate,
    strokeAndFillText,
};