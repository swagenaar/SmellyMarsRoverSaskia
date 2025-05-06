import { RoverState } from './RoverState';

export class Rover {
    private roverState: RoverState = new RoverState();

    constructor(initialState = '') {
        const splitInitialState = initialState.split(' ');
        if (splitInitialState.length >= 3) {
            this.roverState.xx = parseInt(splitInitialState[0], 10);
            this.roverState.yy = parseInt(splitInitialState[1], 10);
            this.roverState.dd = splitInitialState[2][0];
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
