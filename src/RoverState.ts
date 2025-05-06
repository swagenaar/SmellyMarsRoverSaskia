import { Rover } from './Rover';

export type Direction = 'N' | 'E' | 'S' | 'W';

export abstract class RoverState {
    protected x = 0;
    protected y = 0;
    protected direction: Direction = 'N';
    protected context: Rover;

    constructor(x = '0', y = '0', direction: Direction = 'N', context: Rover) {
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
        this.direction = direction;
        this.context = context;
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

    public get position() {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}

export class RoverNorthState extends RoverState {
    constructor(x = '0', y = '0', context: Rover) {
        super(x, y, 'N', context);
    }

    public override moveForward() {
        this.y++;
    }

    public override turnRight() {
        this.context.transitionTo(new RoverEastState(this.x.toString(), this.y.toString(), this.context));
    }

    public override turnLeft() {
        this.context.transitionTo(new RoverWestState(this.x.toString(), this.y.toString(), this.context));
    }
}

export class RoverEastState extends RoverState {
    constructor(x = '0', y = '0', context: Rover) {
        super(x, y, 'E', context);
    }

    public override moveForward() {
        this.x++;
    }

    public override turnRight() {
        this.context.transitionTo(new RoverSouthState(this.x.toString(), this.y.toString(), this.context));
    }

    public override turnLeft() {
        this.context.transitionTo(new RoverNorthState(this.x.toString(), this.y.toString(), this.context));
    }
}

export class RoverSouthState extends RoverState {
    constructor(x = '0', y = '0', context: Rover) {
        super(x, y, 'S', context);
    }

    public override moveForward() {
        this.y--;
    }

    public override turnRight() {
        this.context.transitionTo(new RoverWestState(this.x.toString(), this.y.toString(), this.context));
    }

    public override turnLeft() {
        this.context.transitionTo(new RoverEastState(this.x.toString(), this.y.toString(), this.context));
    }
}

export class RoverWestState extends RoverState {
    constructor(x = '0', y = '0', context: Rover) {
        super(x, y, 'W', context);
    }

    public override moveForward() {
        this.x--;
    }

    public override turnRight() {
        this.context.transitionTo(new RoverNorthState(this.x.toString(), this.y.toString(), this.context));
    }

    public override turnLeft() {
        this.context.transitionTo(new RoverSouthState(this.x.toString(), this.y.toString(), this.context));
    }
}
