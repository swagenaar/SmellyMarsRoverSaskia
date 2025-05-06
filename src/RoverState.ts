export type Direction = 'N' | 'E' | 'S' | 'W';

export class RoverState {
    x = 0;
    y = 0;
    direction: Direction = 'N'; // 'char' in C# is effectively a one-character string in TypeScript
}
