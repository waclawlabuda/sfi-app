import React from 'react';
import candidates from './sampleData';
import * as F from './calculate';

const JestSample = () => (
    <>
        <h2>Candidates:</h2>
        <ul className="candidates">
            {candidates.map((candidate, i) => (
                <li key={i}>{candidate.name} | votes up: {candidate.votesUp} | votes down: {candidate.votesDown}</li>
            ))}
        </ul>
        <h3>Summary</h3>
        <div className="summary">
            <div>all votes up: {F.calculateVotesUp(candidates)}</div>
            <div>all votes down: {F.calculateVotesDown(candidates)}</div>
            <div>winner: {F.calculateWinner(candidates)}</div>
            <div>lowest ratio: {F.lowestRatio(candidates).name} ({F.lowestRatio(candidates).ratio})</div>
        </div>
    </>
)


export default JestSample;