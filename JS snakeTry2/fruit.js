let fruitW = tW;
let fruitH = tH;

function generateFruitX() {
    let xVal = (Math.floor(Math.random() * (numOfCols - 1)));
    return xVal;
};
function generateFruitY() {
    let yVal = (Math.floor(Math.random() * (numOfRows - 1)));
    return yVal;
};

class Fruit {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.w = fruitW;
        this.h = fruitH;
    }
    show() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.rect(this.x * tW, this.y * tH, this.w, this.h);
        ctx.closePath();
        ctx.fill();
    }
};
fruit.push(new Fruit(generateFruitX(), generateFruitY()))