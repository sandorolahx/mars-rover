import { injectable } from 'inversify';
import IMarsRoverService from '../di/interfaces/IMarsRoverService';

export enum Direction {
    N = 0,
    E = 1,
    S = 2,
    W = 3
}

interface Position {
    x: number;
    y: number;
    direction: Direction;
}

@injectable()
class MarsRoverService implements IMarsRoverService {
    getPosition(startingPos: string, instructions: string) {
        let x: number = 0;
        let y: number = 0;
        const instructionList = instructions.split('');

        const st = startingPos.split(',');

        let position: Position = {
            x: Number(st[0]),
            y: Number(st[1]),
            direction: this.mapToDirection(st[2])
        } as Position;

        const res = instructionList.reduce((prev, val) => this.getNewPosition(prev, val), position);

        return `${res.x},${res.y},${this.mapDirectionToString(position.direction)}`;

    }

    mapToDirection = (val: string) => {
        switch (val) {
            case 'N':
                return Direction.N;
            case 'E':
                return Direction.E;
            case 'S':
                return Direction.S;
            case 'W':
                return Direction.W;
            default:
                return Direction.N;
        }
    }

    mapDirectionToString = (val: Direction) => {
        switch (val) {
            case Direction.N:
                return 'N';
            case Direction.E:
                return 'E';
            case Direction.S:
                return 'S';
            case Direction.W:
                return 'W';
            default:
                return '';
        }
    }

    getNewPosition = (position: Position, instruction: string): Position => {
        switch (instruction) {
            case 'L':
                const directionLeft = position.direction > 0 ? position.direction - 1 : Direction.W;
                return { ...position, direction: directionLeft } as Position;
            case 'R':
                const directionRigth = position.direction < 3 ? position.direction + 1 : Direction.N;
                return { ...position, direction: directionRigth } as Position;
            case 'M':
                return this.moveToNewPosition(position);
            default:
                return position;
        }
    }

    moveToNewPosition = (position: Position) => {
        switch (position.direction) {
            case Direction.N:
                return { ...position, y: position.y + 1 } as Position;
            case Direction.E:
                return { ...position, x: position.x + 1 } as Position;
            case Direction.S:
                return { ...position, y: position.y - 1 } as Position;
            case Direction.W:
                return { ...position, x: position.x - 1 } as Position;
            default:
                return position;
        }
    }
}

export default MarsRoverService;
