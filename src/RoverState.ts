import { Rover } from './Rover';

export type Direction = 'N' | 'E' | 'S' | 'W';

export abstract class RoverState {
    protected x = 0;
    protected y = 0;
    protected direction: Direction = 'N';
    protected context: Rover;

    protected constructor(x = '0', y = '0', direction: Direction = 'N', context: Rover) {
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
        this.direction = direction;
        this.context = context;
    }

    public abstract moveForward(): void;

    public abstract turnRight(): void;

    public abstract turnLeft(): void;

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
