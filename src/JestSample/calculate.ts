import { candidate } from './sampleData';

export const calculateVotesUp = (candidates: candidate[]): number => {
    const votesUpSum = candidates.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.votesUp;
    }, 0);

    return votesUpSum;
}

export const calculateVotesDown = (candidates: candidate[]): number => {
    const votesDownSum = candidates.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.votesDown;
    }, 0);

    return votesDownSum;
}

export const calculateWinner = (candidates: candidate[]): string => {
    const winner = candidates.reduce((prev, current) => {
        return (prev.votesUp > current.votesUp) ? prev : current
    }, { name: 'There is no winner', votesDown: 0, votesUp: 0 })

    return winner.name;
}

interface LowestRatio {
    name: string;
    ratio: number;
}

export const lowestRatio = (candidates: candidate[]): LowestRatio => {
    const candidatesRatio: LowestRatio[] = [];

    candidates.map((candidate) => {
        candidatesRatio.push({
            name: candidate.name,
            ratio: candidate.votesUp - candidate.votesDown
        });
    })

    const lowestRatio: LowestRatio = candidatesRatio.reduce((prev, current) => 
        (prev.ratio > current.ratio) ? prev : current,
        { name: 'There is nothinng to calculate', ratio: 0 });

    return lowestRatio;
}

export const getFavouriteCandidates = (candidates?: any) => {
    const favourites = candidates && candidates.filter(candidate => candidate.votesUp > 5000) || [];
    return favourites.length ? favourites : undefined;
}