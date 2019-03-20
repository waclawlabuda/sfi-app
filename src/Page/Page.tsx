import React from 'react';
import EnzymeSample, { EnzymeSampleState } from '../EnzymeSample/EnzymeSample';
import TestComponent from '../EnzymeSample/Challenge/TestComponent';
import { BrowserRouter, Route, Link } from 'react-router-dom';

interface PageProps {

}

interface PageState {

}

const API = 'http://localhost:3030';

type CandidateState = Pick<EnzymeSampleState, 'name' | 'age' | 'checked'>;

class Candidate extends React.Component<{ id: number }, CandidateState> {
    state: CandidateState = {
        age: '',
        name: '',
        checked: false,
    };

    componentDidMount() {
        this.getCandidate(this.props.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.getCandidate(this.props.id);
        }
    }

    getCandidate = async (id: number) => {
        try {
            const res = await fetch(`${API}/candidates/${id}`);
            const data = await res.json();
            this.setState({ ...data });
        } catch (e) {
            console.error('Nie pobrano');
        }
    }

    render() {
        return (<TestComponent
            name={this.state.name}
            age={this.state.age}
            checked={this.state.checked}
        />);
    }
}

class AllCandidates extends React.Component<any, any> {
    componentDidMount() {
        this.getCandidates();
    }

    getCandidates = async () => {
        try {
            const res = await fetch(`${API}/candidates`);
            const data = await res.json();
            this.setState({ candidates: [...data] });
        } catch (e) {
            console.error('Nie pobrano');
        }
    }

    render() {
        return this.state && this.state.candidates && this.state.candidates.map((candidate) => (
            <div>
                <b>{candidate.name}</b> - age: {candidate.age} years <Link to={`/candidate/${candidate.id}`}>[link]</Link>
            </div>
        ));
    }
}

class Page extends React.Component<PageProps, PageState> {
    onAddFactory = (history) => async (data) => {
        try {
            const res = await fetch(`${API}/candidates`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const entry = await res.json();
            history.push(`/candidate/${entry.id}`);
        } catch (e) {
            console.error('Submitting failed ;(');
        }
    }

    render() {
        return <>
            <BrowserRouter>
                <nav style={{ position: 'fixed', top: 0, width: '100%' }}>
                    <Link to={'/'}>List of candidates</Link>
                    <Link to={'/add'}>+ Add</Link>
                </nav>
                <Route path={'/add'} render={({ match, history }) => (
                    <EnzymeSample onSubmit={this.onAddFactory(history)} />
                )}
                />
                <Route path={'/candidate/:id'} render={({ match }) => (
                    <Candidate id={match.params.id} />
                )} />
                <Route path={'/'} exact={true} render={({ match }) => (
                    <AllCandidates />
                )}
                />
            </BrowserRouter>
        </>;
    }
}

export default Page;
