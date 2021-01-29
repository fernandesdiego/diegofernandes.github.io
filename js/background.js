const canvas = document.getElementById('bgcanvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const wave = {
    length: 0.01,
    amplitude: 200,
    frequency: 0.01
}


let increment = wave.frequency;

function animate() {
    requestAnimationFrame(animate);
    // c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = '#7d57c505';
    // c.fillStyle = 'rgba(75,75,0,0.01)';

    c.fillRect(0, 0, canvas.width, canvas.height);

    c.beginPath()

    c.moveTo(0, canvas.height / 2);

    for (let i = 0; i < canvas.width; i++) {
        c.lineTo(i, (canvas.height / 2) + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
    }

    c.strokeStyle = 'hsl(0,50%,50%)';
    c.stroke();
    increment += wave.frequency;

}

animate();