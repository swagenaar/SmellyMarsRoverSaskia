export type Direction = 'N' | 'E' | 'S' | 'W';

export class RoverState {
    constructor(
        public x = 0,
        public y = 0,
        public direction: Direction = 'N',
    ) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public moveForward() {
        if (this.direction === 'E') {
            this.x++;
        }
        if (this.direction === 'S') {
            this.y--;
        }
        if (this.direction === 'W') {
            this.x--;
        }
        if (this.direction === 'N') {
            this.y++;
        }
    }

    public turnRight() {
        switch (this.direction) {
            case 'E':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'N';
                break;
            case 'N':
                this.direction = 'E';
                break;
        }
    }

    public turnLeft() {
        switch (this.direction) {
            case 'E':
                this.direction = 'N';
                break;
            case 'N':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'E';
                break;
        }
    }
}
