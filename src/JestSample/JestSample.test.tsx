import * as F from './calculate';
import candidates from './sampleData';

// beforeEach(() => {
//     console.log('initialize test suite...');
// });

// afterEach(() => {
//     console.log('clean up...');
// });

// beforeAll(() => {
//     console.log('prepare data...');
// });

// afterAll(() => {
//     console.log('finishing all test suits...');
// });

// describe
describe('all type of votes calculation', () => {
    it('should calculate all votes up', () => {
        expect(F.calculateVotesUp(candidates)).toBe(15213);
    });

    it('should calculate all votes down', () => {
        expect(F.calculateVotesDown(candidates)).toBe(14765);
    });
});

// .toBe
test('winner method', () => {
    expect(F.calculateWinner(candidates)).toBe('Andrzej Duda');
});

// .toEqual (for objects)
test('lowestRatio method', () => {
    expect(F.lowestRatio(candidates)).toEqual({ name: 'Barack Obama', ratio: 2658 });
});

// .not
test('winner should not be John Doe', () => {
    expect(F.calculateWinner(candidates)).not.toBe('John Doe');
});

// .toHaveLength
test('candidates array should have length 4', () => {
    expect(candidates).toHaveLength(4);
});

// local data
test('winner method on different data', () => {
    const candidatesList = [{ name: 'Adam', votesDown: 2, votesUp: 3 }];
    expect(F.calculateWinner(candidatesList)).toBe('Adam');
});

// .toContain
test('candidates names array should contain Andrzej Duda', () => {
    const names = ['John Doe', 'Vladimir Putin', 'Barack Obama', 'Andrzej Duda'];
    expect(names).toContain('Andrzej Duda');
});

// .spyOn
test('function spy', () => {
    const fnMock = jest.spyOn(F, "calculateWinner");
    F.calculateWinner(candidates);
    expect(fnMock).toHaveBeenCalled();
});

// .each
test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    '%i + %i = %i',
    (a, b, expected) => {
        expect(a + b).toBe(expected);
    },
);

// .each `table`
test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
});



/** zadanie 1:
    ustawiać randomowe dane przed każdym testem dla nowego kandydata:
    Donald Trump
    tip: random = Math.floor(Math.random() * (1000));
*/

/** zadanie 2:
    napisać dowolny test wykorzystujący następujace metody:
    .toBeTruthy()
    .toBeUndefined()
    .toBeGreaterThanOrEqual(number)
    .toHaveBeenCalledTimes(number)
    .toHaveBeenCalledWith(arg1, arg2, ...)
*/