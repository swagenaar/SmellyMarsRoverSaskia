import { createRoverState, Direction, RoverState } from './RoverState';

type command = 'L' | 'R' | 'M';

export class Rover {
    private roverState: RoverState;

    constructor(initialState = '') {
        const splitInitialState = initialState.split(' ');
        const xPosition = parseInt(splitInitialState[0] ?? '0', 10);
        const yPosition = parseInt(splitInitialState[1] ?? '0', 10);
        const direction = splitInitialState[2] as Direction;

        this.roverState = createRoverState(xPosition, yPosition, this, direction);
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
