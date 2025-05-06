import { RoverState } from './RoverState';

export class Rover {
    private roverState: RoverState = new RoverState();

    constructor(initialState = '') {
        const defaultPosition = '0';
        const defaultDirection = 'N';

        const splitInitialState = initialState.split(' ');
        if (splitInitialState.length >= 3) {
            const xPosition = splitInitialState[0] ?? defaultPosition;
            const yPosition = splitInitialState[1] ?? defaultPosition;
            const direction = splitInitialState[2] ?? defaultDirection;

            this.roverState.x = parseInt(xPosition, 10);
            this.roverState.y = parseInt(yPosition, 10);
            this.roverState.direction = direction;
        }
    }

    public go(command: string): void {
        for (let i = 0; i < command.length; i++) {
            const c = command[i];
            if (c === 'L') {
                if (this.roverState.direction === 'E') {
                    this.roverState.direction = 'N';
                } else if (this.roverState.direction === 'N') {
                    this.roverState.direction = 'W';
                } else if (this.roverState.direction === 'W') {
                    this.roverState.direction = 'S';
                } else if (this.roverState.direction === 'S') {
                    this.roverState.direction = 'E';
                }
            } else if (c === 'R') {
                if (this.roverState.direction === 'E') {
                    this.roverState.direction = 'S';
                } else if (this.roverState.direction === 'S') {
                    this.roverState.direction = 'W';
                } else if (this.roverState.direction === 'W') {
                    this.roverState.direction = 'N';
                } else if (this.roverState.direction === 'N') {
                    this.roverState.direction = 'E';
                }
            } else if (c === 'M') {
                if (this.roverState.direction === 'E') {
                    this.roverState.x++;
                }
                if (this.roverState.direction === 'S') {
                    this.roverState.y--;
                }
                if (this.roverState.direction === 'W') {
                    this.roverState.x--;
                }
                if (this.roverState.direction === 'N') {
                    this.roverState.y++;
                }
            }
        }
    }

    public get XYD(): string {
        return `${this.roverState.x} ${this.roverState.y} ${this.roverState.direction}`;
    }

    public pos(): string {
        return this.XYD;
    }
}
