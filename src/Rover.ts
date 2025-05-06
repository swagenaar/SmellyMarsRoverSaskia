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

            this.roverState.xx = parseInt(xPosition, 10);
            this.roverState.yy = parseInt(yPosition, 10);
            this.roverState.dd = direction;
        }
    }

    public go(cms: string): void {
        for (let i = 0; i < cms.length; i++) {
            const c = cms[i];
            if (c === 'L') {
                if (this.roverState.dd === 'E') {
                    this.roverState.dd = 'N';
                } else if (this.roverState.dd === 'N') {
                    this.roverState.dd = 'W';
                } else if (this.roverState.dd === 'W') {
                    this.roverState.dd = 'S';
                } else if (this.roverState.dd === 'S') {
                    this.roverState.dd = 'E';
                }
            } else if (c === 'R') {
                if (this.roverState.dd === 'E') {
                    this.roverState.dd = 'S';
                } else if (this.roverState.dd === 'S') {
                    this.roverState.dd = 'W';
                } else if (this.roverState.dd === 'W') {
                    this.roverState.dd = 'N';
                } else if (this.roverState.dd === 'N') {
                    this.roverState.dd = 'E';
                }
            } else if (c === 'M') {
                if (this.roverState.dd === 'E') {
                    this.roverState.xx++;
                }
                if (this.roverState.dd === 'S') {
                    this.roverState.yy--;
                }
                if (this.roverState.dd === 'W') {
                    this.roverState.xx--;
                }
                if (this.roverState.dd === 'N') {
                    this.roverState.yy++;
                }
            }
        }
    }

    public get XYD(): string {
        return `${this.roverState.xx} ${this.roverState.yy} ${this.roverState.dd}`;
    }

    public pos(): string {
        return this.XYD;
    }
}
