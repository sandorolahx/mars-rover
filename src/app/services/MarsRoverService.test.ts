import MarsRoverService, { Direction } from './MarsRoverService';

describe('MarsRoverService', () => {
  let marsRoverService: MarsRoverService;

  beforeEach(() => {
    marsRoverService = new MarsRoverService();
  });

  describe('getPosition', () => {
    it('should return the correct position', () => {
      const startingPos = '0,0,N';
      const instructions = 'LMLMLMLMM';
      const expectedPosition = '0,2,N';

      const result = marsRoverService.getPosition(startingPos, instructions);

      expect(result).toEqual(expectedPosition);
    });

    it('should handle different starting positions and instructions', () => {
      const startingPos = '1,2,E';
      const instructions = 'MMRMMRMRRM';
      const expectedPosition = '3,3,S';

      const result = marsRoverService.getPosition(startingPos, instructions);

      expect(result).toEqual(expectedPosition);
    });
  });

  describe('mapToDirection', () => {
    it('should map "N" to Direction.N', () => {
      const result = marsRoverService.mapToDirection('N');

      expect(result).toEqual(Direction.N);
    });

    it('should map "E" to Direction.E', () => {
      const result = marsRoverService.mapToDirection('E');

      expect(result).toEqual(Direction.E);
    });
  });

  describe('mapDirectionToString', () => {
    it('should map Direction.N to "N"', () => {
      const result = marsRoverService.mapDirectionToString(Direction.N);

      expect(result).toEqual('N');
    });

    it('should map Direction.E to "E"', () => {
      const result = marsRoverService.mapDirectionToString(Direction.E);

      expect(result).toEqual('E');
    });
  });

  describe('getNewPosition', () => {
    it('should return the new position after rotating left (L)', () => {
      const position = { x: 0, y: 0, direction: Direction.N };
      const instruction = 'L';
      const expectedPosition = { x: 0, y: 0, direction: Direction.W };

      const result = marsRoverService.getNewPosition(position, instruction);

      expect(result).toEqual(expectedPosition);
    });

    it('should return the new position after rotating right (R)', () => {
      const position = { x: 0, y: 0, direction: Direction.N };
      const instruction = 'R';
      const expectedPosition = { x: 0, y: 0, direction: Direction.E };

      const result = marsRoverService.getNewPosition(position, instruction);

      expect(result).toEqual(expectedPosition);
    });

    it('should return the new position after moving forward (M)', () => {
      const position = { x: 0, y: 0, direction: Direction.N };
      const instruction = 'M';
      const expectedPosition = { x: 0, y: 1, direction: Direction.N };

      const result = marsRoverService.getNewPosition(position, instruction);

      expect(result).toEqual(expectedPosition);
    });
  });

  describe('moveToNewPosition', () => {
    it('should return the new position after moving north', () => {
      const position = { x: 0, y: 0, direction: Direction.N };
      const expectedPosition = { x: 0, y: 1, direction: Direction.N };

      const result = marsRoverService.moveToNewPosition(position);

      expect(result).toEqual(expectedPosition);
    });

    it('should return the new position after moving east', () => {
      const position = { x: 0, y: 0, direction: Direction.E };
      const expectedPosition = { x: 1, y: 0, direction: Direction.E };

      const result = marsRoverService.moveToNewPosition(position);

      expect(result).toEqual(expectedPosition);
    });

    it('should return the new position after moving south', () => {
      const position = { x: 0, y: 0, direction: Direction.S };
      const expectedPosition = { x: 0, y: -1, direction: Direction.S };

      const result = marsRoverService.moveToNewPosition(position);

      expect(result).toEqual(expectedPosition);
    });

    it('should return the new position after moving west', () => {
      const position = { x: 0, y: 0, direction: Direction.W };
      const expectedPosition = { x: -1, y: 0, direction: Direction.W };

      const result = marsRoverService.moveToNewPosition(position);

      expect(result).toEqual(expectedPosition);
    });
  });
});
