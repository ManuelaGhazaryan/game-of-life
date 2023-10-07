var matrix = [];
var n = 40;
var m = 52;
var side = 60;

for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}

function characters(index, count) {
    for (let i = 0; i < count; i++) {
        var w = Math.floor(random(0, n));
        var v = Math.floor(random(0, m))
        matrix[w][v] = index
    }
}

var grassArr = [];
var grassEaterArr = [];
var PredatorArr = [];
var animalArr = []
var LightningArr = []
function setup() {
    characters(1, 400)
    characters(2, 70)
    characters(3, 40)
    characters(4, 80)
    characters(5, 50)


    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3)
                PredatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                var ani = new Animal(x, y, 4)
                animalArr.push(ani)
            }
            else if (matrix[y][x] == 5) {
                var lig = new Lightning(x, y, 5)
                LightningArr.push(lig)
            }
        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("navy")
            }
            else if (matrix[y][x] == 4) {
                fill("peru")
            }
            else if (matrix[y][x] == 5) {
                fill("black")
            }

            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in PredatorArr) {
        PredatorArr[i].eat();
    }
    for (var i in animalArr) {
        animalArr[i].eat();
    }
    for (var i in LightningArr) {
        LightningArr[i].eat();
    }
}
