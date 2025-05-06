import { Direction, RoverEastState, RoverNorthState, RoverSouthState, RoverState, RoverWestState } from './RoverState';

type command = 'L' | 'R' | 'M';

export class Rover {
    private roverState: RoverState;

    constructor(initialState = '') {
        const splitInitialState = initialState.split(' ');
        const xPosition = splitInitialState[0];
        const yPosition = splitInitialState[1];
        const direction = splitInitialState[2];

        switch (direction) {
            case 'E':
                this.roverState = new RoverEastState(xPosition, yPosition, this);
                break;
            case 'S':
                this.roverState = new RoverSouthState(xPosition, yPosition, this);
                break;
            case 'W':
                this.roverState = new RoverWestState(xPosition, yPosition, this);
                break;
            case 'N':
                this.roverState = new RoverNorthState(xPosition, yPosition, this);
                break;
            default:
                this.roverState = new RoverNorthState(xPosition, yPosition, this);
        }
    }

    public transitionTo(state: RoverState): void {
        this.roverState = state;
    }

    public go(commands: command[]): void {
        for (const command of commands) {
            switch (command) {
                case 'L':
                    this.roverState.turnLeft();
                    break;
                case 'R':
                    this.roverState.turnRight();
                    break;
                case 'M':
                    this.roverState.moveForward();
                    break;
            }
        }
    }

    public getPosition(): string {
        return this.roverState.position;
    }
}
