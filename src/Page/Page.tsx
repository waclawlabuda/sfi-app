import React from 'react';
import EnzymeSample from '../EnzymeSample/EnzymeSample';
import TestComponent from '../EnzymeSample/Challenge/TestComponent';
import { BrowserRouter, Route, Link } from 'react-router-dom';

interface PageProps {

}

interface PageState {

}

class Page extends React.Component<PageProps, PageState> {
    render() {
        return <>
            <BrowserRouter>
                <nav style={{ position: 'fixed', top: 0, width: '100%' }}>
                    <Link to={'/'}>List of candidates</Link>
                    <Link to={'/add'}>+ Add</Link>
                </nav>
                <Route path={'/add'} render={({ match }) => (
                    <EnzymeSample onSubmit={() => console.log('submitted!')} />
                )}
                />
                <Route path={'/single/:id'} render={({ match }) => (
                    <TestComponent
                        name={'John Doe'}
                        age={'36'}
                        checked={true}
                    />
                )} />
                <Route path={'/'} exact={true} render={({ match }) => (
                    'Everything!'
                )}
                />
            </BrowserRouter>
        </>;
    }
}

export default Page;
