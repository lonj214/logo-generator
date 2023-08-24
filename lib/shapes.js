class shape {
    constructor() {
        this.color = '';
    }
    setColor(shapeColor) {
        this.color = shapeColor;
    }
}
// the shape class uses constructor to define what a shape is and it takes in setColor function

class circle extends shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}"/>`;
    }
}

class triangle extends shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}

class square extends shape {
    render() {
        return `<rect x="130" y="130" width="160" height="160" fill="${this.color}"/>`;
    }
}

module.exports = {circle, triangle, square};