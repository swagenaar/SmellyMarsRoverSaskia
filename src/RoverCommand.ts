import { RoverState } from './RoverState';

export type command = 'L' | 'R' | 'M';

export function createCommand(command: command): RoverCommand {
    switch (command) {
        case 'L':
            return new TurnLeftCommand();
        case 'R':
            return new TurnRightCommand();
        case 'M':
            return new MoveForwardCommand();
        default:
            throw new Error(`Unknown command: ${command}`);
    }
}

export interface RoverCommand {
    execute(roverState: RoverState): void;
}

class TurnLeftCommand implements RoverCommand {
    execute(roverState: RoverState): void {
        roverState.turnLeft();
    }
}

class TurnRightCommand implements RoverCommand {
    execute(roverState: RoverState): void {
        roverState.turnRight();
    }
}

class MoveForwardCommand implements RoverCommand {
    execute(roverState: RoverState): void {
        roverState.moveForward();
    }
}
