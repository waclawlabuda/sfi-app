import React from 'react';
import testRenderer from 'react-test-renderer';
import TestComponent, { TestComponentProps } from './TestComponent';
import { ShallowWrapper, ReactWrapper, mount, shallow } from 'enzyme';

const setup = (propsOverride?: Partial<TestComponentProps>) => {
    const props = {
        name: 'John Doe',
        age: '36',
        checked: true,
        ...propsOverride,
    }

    const renderer = () => testRenderer.create(
        <TestComponent {...props} />
    );

    return {
        props,
        renderer,
    }
}

describe('TestComponent', () => {
    it('should render properly', () => {
        const { renderer } = setup();
        expect(renderer().toJSON()).toMatchSnapshot();
    });

    it('should not display name if not provided', () => {
        const { renderer } = setup({ name: '' });
        expect(renderer().toJSON()).toMatchSnapshot();
    });

    it('should not display age if not provided', () => {
        const { renderer } = setup({ age: '' });
        expect(renderer().toJSON()).toMatchSnapshot();
    });

    it('should display different text if checkbox was not checked', () => {
        const { renderer } = setup({ checked: false });
        expect(renderer().toJSON()).toMatchSnapshot();
    });
});