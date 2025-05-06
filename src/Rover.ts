import { Direction, RoverState } from './RoverState';

type command = 'L' | 'R' | 'M';

export class Rover {
    private roverState: RoverState = new RoverState();

    constructor(initialState = '') {
        const defaultPosition = '0';
        const defaultDirection: Direction = 'N';

        const splitInitialState = initialState.split(' ');
        if (splitInitialState.length >= 3) {
            const xPosition = splitInitialState[0] ?? defaultPosition;
            const yPosition = splitInitialState[1] ?? defaultPosition;
            const direction: Direction = (splitInitialState[2] as Direction) ?? defaultDirection;

            this.roverState.x = parseInt(xPosition, 10);
            this.roverState.y = parseInt(yPosition, 10);
            this.roverState.direction = direction;
        }
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
        return `${this.roverState.x} ${this.roverState.y} ${this.roverState.direction}`;
    }
}
