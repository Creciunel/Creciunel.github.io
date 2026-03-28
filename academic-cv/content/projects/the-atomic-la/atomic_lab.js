const canvas = document.getElementById('atomic-canvas');
const ctx = canvas.getContext('2d');
const atomCountDisplay = document.getElementById('atom-count');
const tempSlider = document.getElementById('temp-slider');
const tempValue = document.getElementById('temp-value');

let atoms = [];
let tempMultiplier = 1;

// Date tehnice elemente
const elementData = {
    'H':  { mass: 1,  radius: 8,  color: '#7dd3fc' },
    'O':  { mass: 16, radius: 14, color: '#f87171' },
    'Zn': { mass: 65, radius: 22, color: '#94a3b8' }
};

// Listener pentru Temperatură
tempSlider.addEventListener('input', (e) => {
    tempMultiplier = parseFloat(e.target.value);
    tempValue.innerText = tempMultiplier + "x";
    // Notă: Nu modificăm vx/vy aici, le folosim în update()
});

class Atom {
    constructor(type) {
        const data = elementData[type];
        this.type = type;
        this.mass = data.mass;
        this.radius = data.radius;
        this.color = data.color;
        
        this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;
        
        // Viteza de bază (Random direction)
        const baseSpeed = type === 'H' ? 2 : 1;
        this.vx = (Math.random() - 0.5) * baseSpeed;
        this.vy = (Math.random() - 0.5) * baseSpeed;
    }

    update() {
        // Mișcarea: Viteza de bază * Factorul de temperatură
        this.x += this.vx * tempMultiplier;
        this.y += this.vy * tempMultiplier;

        // Bounce pereți
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.vx *= -1;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(0,0,0,0.2)';
        ctx.fill();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${this.radius * 0.7}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(this.type, this.x, this.y + this.radius/3);
        ctx.closePath();
    }
}

function handleCollisions() {
    for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
            const a1 = atoms[i];
            const a2 = atoms[j];

            const dx = a2.x - a1.x;
            const dy = a2.y - a1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = a1.radius + a2.radius;

            if (distance < minDistance) {
                // 1. Rezolvare suprapunere (îi separăm imediat)
                const overlap = minDistance - distance;
                const nx = dx / distance;
                const ny = dy / distance;
                
                a1.x -= nx * (overlap / 2);
                a1.y -= ny * (overlap / 2);
                a2.x += nx * (overlap / 2);
                a2.y += ny * (overlap / 2);

                // 2. Coliziune Elastică (Transfer de moment p=mv)
                const v1n = a1.vx * nx + a1.vy * ny;
                const v2n = a2.vx * nx + a2.vy * ny;

                const m1 = a1.mass;
                const m2 = a2.mass;

                const newV1n = (v1n * (m1 - m2) + 2 * m2 * v2n) / (m1 + m2);
                const newV2n = (v2n * (m2 - m1) + 2 * m1 * v1n) / (m1 + m2);

                a1.vx += (newV1n - v1n) * nx;
                a1.vy += (newV1n - v1n) * ny;
                a2.vx += (newV2n - v2n) * nx;
                a2.vy += (newV2n - v2n) * ny;
            }
        }
    }
}

function addAtom(type) {
    atoms.push(new Atom(type));
    atomCountDisplay.innerText = atoms.length;
}

function clearChamber() {
    atoms = [];
    atomCountDisplay.innerText = 0;
}

function animate() {
    // Background curat pentru laborator
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    handleCollisions();
    
    atoms.forEach(atom => {
        atom.update();
        atom.draw();
    });
    
    requestAnimationFrame(animate);
}

animate();