class Lightning extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 8;
      
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            
        ];
    }

    chooseCell(character2,character4) {
        
        this.getNewCoordinates()
        return super.chooseCell(character2,character4);
    }
    mul() {
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            var newligh = new Lightning(newCell[0], newCell[1], this.index);
            lightningArr.push(newligh);
            matrix[newCell[1]][newCell[0]] = 5;
        }
    }

    eat() {
        let foods = this.chooseCell(2,4)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 100) {
                this.mul()
            }
        }
        else {
            this.move()
        }
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in animalArr) {
                if (newX == animalArr[i].x && newY == animalArr[i].y) {
                    animalArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 100) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in LightningArr) {
            if (this.x == LightningArr[i].x && this.y == LightningArr[i].y) {
                LightningArr.splice(i, 1);
                break;
            }
        }
    }
}