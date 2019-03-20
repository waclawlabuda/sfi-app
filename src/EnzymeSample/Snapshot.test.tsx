import React from 'react';
import testRenderer from 'react-test-renderer';
import EnzymeSample, { EnzymeSampleProps, EnzymeSampleState } from './EnzymeSample';
import { ShallowWrapper, ReactWrapper, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const setup = (propsOverride?: Partial<EnzymeSampleProps>) => {
    const props = {
        onSubmit: jest.fn(),
        ...propsOverride,
    }

    const renderer = () => testRenderer.create(
        <EnzymeSample {...props} />
    );

    const component: ShallowWrapper<EnzymeSampleProps, EnzymeSampleState> = shallow(<EnzymeSample {...props} />);
    const mountedComponent: ReactWrapper = mount(<EnzymeSample {...props} />);

    return {
        props,
        renderer,
        component,
        mountedComponent,
    }
}

describe('EnzymeSample', () => {
    it('should render properly', () => {
        const { renderer } = setup();
        expect(renderer().toJSON()).toMatchSnapshot();
    });

    it('should render properly', () => {
        const { mountedComponent } = setup();
        expect(toJson(mountedComponent)).toMatchSnapshot();
    });

    it('should display error message when user type number into name input', () => {
        const { component } = setup();

        expect(component.state('error')).toBeFalsy();
        expect(component.find('.error')).toHaveLength(0);

        component.find('#name_input').simulate('change', { target: {
            value: '1234'
        }});

        expect(component.state('error')).toBeTruthy();
        expect(component.find('.error')).toHaveLength(1);
    });

    it('should change state on checkbox click (checked -> true)', () => {
        const { component } = setup();

        expect(component.state('checked')).toBeFalsy();

        component
            .find('label')
            .find('input')
            .simulate('change');

        expect(component.state('checked')).toBeTruthy();
    });

    it('should be disabled if inputs are invalid', () => {
        const { component } = setup();
        const button = component.find('button');
        expect(button.prop('disabled')).toBeTruthy();
    });

    it('should be enabled if inputs are valid', () => {
        const { component } = setup();
        component.setState({
            name: 'John Doe',
            age: '44',
            checked: true,
            error: false,
        });
        const button = component.find('button');
        expect(button.prop('disabled')).toBeFalsy();
    });

    it('should call onSubmit when button was clicked', () => {
        const { component, props } = setup();
        component.find('button').simulate('click');
        expect(props.onSubmit).toBeCalled();
    });

    it('should clear all fields on button click', () => {
        const { component } = setup();
        component.setState({
            name: 'John Doe',
            age: '44',
            checked: true,
        });

        const button = component.find('button');
        button.simulate('click');

        expect(component.state('name')).toBe('');
        expect(component.state('age')).toBe('');
        expect(component.state('checked')).toBeFalsy();
    });
});