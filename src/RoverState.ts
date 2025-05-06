export type Direction = 'N' | 'E' | 'S' | 'W';

export class RoverState {
    x = 0;
    y = 0;
    direction: Direction = 'N';

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
}
