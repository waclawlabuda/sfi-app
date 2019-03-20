import React from 'react';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import testRenderer from 'react-test-renderer';
import EnzymeSample, { EnzymeSampleProps, EnzymeSampleState } from '../EnzymeSample';

// ######################### beforeEach #########################
describe('EnzymeSample', () => {
    let component: ReactWrapper<EnzymeSampleProps, EnzymeSampleState>;
    let mockFn;

    beforeEach(() => {
        mockFn = jest.fn();

        component = mount(<EnzymeSample onSubmit={mockFn} />);
    });

    it('should display heading', () => {
        const heading = component.find('h2');
        expect(heading).toHaveLength(1);
        expect(heading.text()).toEqual('Some random heading');
    });

    it('should display form', () => {
        const form = component.find('form');
        expect(form).toHaveLength(1);
    });
});

// ######################### setup() #########################

const setup = (propsOverride?: Partial<EnzymeSampleProps>) => {
    const props = {
        onSubmit: jest.fn(),
        ...propsOverride,
    }

    const component: ShallowWrapper = shallow(<EnzymeSample {...props} />);

    return {
        props,
        component,
    }
}

describe('EnzymeSample', () => {
    it('should display heading', () => {
        const { component } = setup();

        const heading = component.find('h2');
        expect(heading).toHaveLength(1);
        expect(heading.text()).toEqual('Some random heading');
    });

    it('should display form', () => {
        const { component } = setup();

        const form = component.find('form');
        expect(form).toHaveLength(1);
    });
});