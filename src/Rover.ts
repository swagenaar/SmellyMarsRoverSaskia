import { createRoverState, Direction, RoverState, RoverStateContext } from './RoverState';
import { command, createCommand } from './RoverCommand';

export class Rover implements RoverStateContext {
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

    public go(commands: string): void {
        for (const command of commands) {
            const parsedCommand = createCommand(command);
            parsedCommand.execute(this.roverState);
        }
    }

    public getPosition(): string {
        return this.roverState.position;
    }
}
