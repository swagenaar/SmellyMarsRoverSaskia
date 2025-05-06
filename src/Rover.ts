import { Direction, RoverState } from './RoverState';

type command = 'L' | 'R' | 'M';

export class Rover {
    private roverState: RoverState;

    constructor(initialState = '') {
        const splitInitialState = initialState.split(' ');
        const xPosition = splitInitialState[0];
        const yPosition = splitInitialState[1];
        const direction: Direction = splitInitialState[2] as Direction;

        this.roverState = new RoverState(xPosition, yPosition, direction);
    }

    public go(commands: command[]): void {
        for (const command of commands) {
            if (command === 'L') {
                this.roverState.turnLeft();
            } else if (command === 'R') {
                this.roverState.turnRight();
            } else if (command === 'M') {
                this.roverState.moveForward();
            }
        }
    }

    public getPosition(): string {
        return this.roverState.position;
    }
}
