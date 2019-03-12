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

export default candidates;