import * as F from './calculate';
import candidates, { newCandidates, improvedCandidatesList } from './sampleData';

/** ######################## part 1 ######################## */

describe('basic methods', () => {
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

  // .toContain
  test('candidates names array should contain Andrzej Duda', () => {
    const names = ['John Doe', 'Vladimir Putin', 'Barack Obama', 'Andrzej Duda'];
    expect(names).toContain('Andrzej Duda');
  });
});

/** ######################## part 1 challenge ######################## */
describe('basic methods on different data (newCandidates)', () => {
  /**
   *
   *
   *
   * add tests here
   *
   *
   *
   */
  /** additional tests to do */
  // check if winner votesUp is equal 1000 with .toBeFalsy()
  // check if winner votesDown are greater or equal than 1000 with .toBeGreaterThanOrEqual(number)
  // check getFavouriteCandidates() with .toBeUndefined()
  // check getFavouriteCandidates(improvedCandidatesList) with .toHaveLength()
});

/** ######################## part 2 ######################## */

// local data
test('winner method on different data', () => {
  const candidatesList = [{ name: 'Adam', votesDown: 2, votesUp: 3 }];
  expect(F.calculateWinner(candidatesList)).toBe('Adam');
});

describe.skip('tests with beforeEach, beforeAll, afterEach, afterAll', () => {
  beforeEach(() => {
    console.log('initialize test suite...');
  });

  afterEach(() => {
    console.log('clean up...');
  });

  //   beforeAll(() => {
  //     console.log('prepare data...');
  //   });

  //   afterAll(() => {
  //     console.log('finishing all test suits...');
  //   });

  test('some random test 1', () => {
    console.log('################### some random test 1 ###################');
  });

  test('some random test 2', () => {
    console.log('################### some random test 2 ###################');
  });

  test('some random test 3', () => {
    console.log('################### some random test 3 ###################');
  });
});

/** ######################## part 2 challenge ######################## */

describe('tests with random data', () => {
  // tip: random = Math.floor(Math.random() * (1000));
  beforeEach(() => {});

  afterEach(() => {});

  beforeAll(() => {});

  afterAll(() => {});

  // add tests here
});

/** ######################## part 3 ######################## */

describe('more advanced tests', () => {
  // .spyOn
  test('function spy', () => {
    const fnMock = jest.spyOn(F, 'calculateWinner');
    F.calculateWinner(candidates);
    expect(fnMock).toHaveBeenCalled();
  });

  // .each
  test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('%i + %i = %i', (a, b, expected) => {
    expect(a + b).toBe(expected);
  });

  // .each `table`
  test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `('returns $expected when $a is added $b', ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
  });
});

/** ######################## part 3 challenge ######################## */

describe('more advanced tests', () => {
  /**
   *
   *
   *
   * add tests here
   *
   *
   */
  /** additional tests to do */
  // check if spy function have been called only one time with .toHaveBeenCalledTimes(number)
  // check if spy function have been called with proper arguments with .toHaveBeenCalledWith(arg1, arg2, ...)
});