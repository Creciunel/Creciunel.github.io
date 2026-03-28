const canvas = document.getElementById('atomic-canvas');
const ctx = canvas.getContext('2d');
const atomCountDisplay = document.getElementById('atom-count');

let atoms = [];

// Proprietățile elementelor (Baza de date a laboratorului)
const elementData = {
    'H':  { mass: 1,  radius: 8,  color: '#7dd3fc', name: 'Hydrogen' },
    'O':  { mass: 16, radius: 15, color: '#f87171', name: 'Oxygen' },
    'Zn': { mass: 65, radius: 25, color: '#94a3b8', name: 'Zinc' }
};

class Atom {
    constructor(type) {
        const data = elementData[type];
        this.type = type;
        this.mass = data.mass;
        this.radius = data.radius;
        this.color = data.color;
        
        // Poziție inițială random
        this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;
        
        // Viteza (Gaze vs Solide)
        const speedMultiplier = type === 'H' ? 4 : (type === 'O' ? 2 : 0.5);
        this.vx = (Math.random() - 0.5) * speedMultiplier;
        this.vy = (Math.random() - 0.5) * speedMultiplier;
    }

    update() {
        // Mișcare
        this.x += this.vx;
        this.y += this.vy;

        // Coliziune cu pereții (Bounce)
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.vx *= -1;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Simbolul chimic
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${this.radius * 0.8}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(this.type, this.x, this.y + this.radius/3);
        ctx.closePath();
    }
}

function addAtom(type) {
    atoms.push(new Atom(type));
    updateUI();
}

function clearChamber() {
    atoms = [];
    updateUI();
}

function updateUI() {
    atomCountDisplay.innerText = atoms.length;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    atoms.forEach(atom => {
        atom.update();
        atom.draw();
    });
    
    requestAnimationFrame(animate);
}

// Pornim simularea
animate();