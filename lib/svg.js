// Defines svg as a class that has a constructor with 3 methods for setting and rendering the shape and text elemnets in the svg string
class svg {
    constructor() {
        this.textForLogo = '';
        this.shapeOfLogo = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeOfLogo}${this.textForLogo}</svg>`;
    }
    // I think version 1 or 1.1 are the ones they want us to use
    setTextForLogo(text, color) {
        this.textForLogo = `<text x="50%" y="50%" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeOfLogo(shape){
        this.shapeOfLogo = shape.render()
    };
};

module.exports = svg