import { Rover } from './Rover';

export type Direction = 'N' | 'E' | 'S' | 'W';

export abstract class RoverState {
    protected direction: Direction = 'N';

    public constructor(
        protected x = 0,
        protected y = 0,
        protected context: Rover,
    ) {
        this.x = x;
        this.y = y;
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
    override direction: Direction = 'N';

    public override moveForward() {
        this.y++;
    }

    public override turnRight() {
        this.context.transitionTo(new RoverEastState(this.x, this.y, this.context));
    }

    public override turnLeft() {
        this.context.transitionTo(new RoverWestState(this.x, this.y, this.context));
    }
}

export class RoverEastState extends RoverState {
    override direction: Direction = 'E';

    public override moveForward() {
        this.x++;
    }

    public override turnRight() {
        this.context.transitionTo(new RoverSouthState(this.x, this.y, this.context));
    }

    public override turnLeft() {
        this.context.transitionTo(new RoverNorthState(this.x, this.y, this.context));
    }
}

export class RoverSouthState extends RoverState {
    override direction: Direction = 'S';

    public override moveForward() {
        this.y--;
    }

    public override turnRight() {
        this.context.transitionTo(new RoverWestState(this.x, this.y, this.context));
    }

    public override turnLeft() {
        this.context.transitionTo(new RoverEastState(this.x, this.y, this.context));
    }
}

export class RoverWestState extends RoverState {
    override direction: Direction = 'W';

    public override moveForward() {
        this.x--;
    }

    public override turnRight() {
        this.context.transitionTo(new RoverNorthState(this.x, this.y, this.context));
    }

    public override turnLeft() {
        this.context.transitionTo(new RoverSouthState(this.x, this.y, this.context));
    }
}
