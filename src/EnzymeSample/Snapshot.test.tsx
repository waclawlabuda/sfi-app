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

    const component: ShallowWrapper = shallow(<EnzymeSample {...props} />);
    const mountedComponent: ReactWrapper = mount(<EnzymeSample {...props} />);

    return {
        props,
        renderer,
        component,
        mountedComponent,
    }
}

describe('EnzymeSample', () => {
    it('should render properly (using renderer)', () => {
        const { renderer } = setup();
        expect(renderer().toJSON()).toMatchSnapshot();
    });

    it('should render properly (using mount)', () => {
        const { mountedComponent } = setup();
        expect(toJson(mountedComponent)).toMatchSnapshot();
    });

    it('should render properly (using shallow)', () => {
        const { component } = setup();
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should display error message when user type number into name input', () => {
        const { mountedComponent } = setup();

        mountedComponent.find('#name_input').simulate('change', { target: {
            value: '1234'
        }});
        
        expect(toJson(mountedComponent)).toMatchSnapshot();
    });

    it('should change state on checkbox click (checked -> true)', () => {
        const { mountedComponent } = setup();

        expect(mountedComponent.state('checked')).toBeFalsy();

        mountedComponent
            .find('label')
            .find('input')
            .simulate('change');

        expect(toJson(mountedComponent)).toMatchSnapshot();
    });

    it('should be disabled if inputs are invalid', () => {
        const { mountedComponent } = setup();

        expect(toJson(mountedComponent)).toMatchSnapshot();
    });

    it('should be enabled if inputs are valid', () => {
        const { mountedComponent } = setup();

        mountedComponent.setState({
            name: 'John Doe',
            age: '44',
            checked: true,
            error: false,
        });

        expect(toJson(mountedComponent)).toMatchSnapshot();
    });

    it('should call onSubmit when button was clicked', () => {
        const { component, props } = setup();
        component.find('button').simulate('click');
        expect(props.onSubmit).toBeCalled();    // wut?
    });

    it('should clear all fields on button click', () => {
        const { mountedComponent } = setup();

        mountedComponent.setState({
            name: 'John Doe',
            age: '44',
            checked: true,
        });

        const button = mountedComponent.find('button');
        button.simulate('click');

        expect(toJson(mountedComponent)).toMatchSnapshot();
    });
});