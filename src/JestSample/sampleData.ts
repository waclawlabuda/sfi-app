export interface candidate {
    name: string;
    votesUp: number;
    votesDown: number;
}

const candidates: candidate[] = [
    {
        name: 'John Doe',
        votesUp: 2512,
        votesDown: 7456,
    },
    {
        name: 'Vladimir Putin',
        votesUp: 3436,
        votesDown: 1234,
    },
    {
        name: 'Barack Obama',
        votesUp: 4167,
        votesDown: 1509,
    },
    {
        name: 'Andrzej Duda',
        votesUp: 5098,
        votesDown: 4566,
    },
];

export const newCandidates: candidate[] = [
    {
        name: 'John Snow',
        votesUp: 4444,
        votesDown: 3333,
    },
    {
        name: '	Jaime Lannister',
        votesUp: 1234,
        votesDown: 4321,
    },
    {
        name: 'Daenerys Targaryen',
        votesUp: 8907,
        votesDown: 4567,
    },
    {
        name: 'Robb Stark',
        votesUp: 8301,
        votesDown: 1001,
    },
];

export const improvedCandidatesList = [
    ...newCandidates,
    undefined,
    undefined,
];

export default candidates;