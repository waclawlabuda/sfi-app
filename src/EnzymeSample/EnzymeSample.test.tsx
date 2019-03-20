import React from 'react';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import EnzymeSample, { EnzymeSampleProps, EnzymeSampleState } from './EnzymeSample';

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

    describe('form', () => {
        it('should display one text input', () => {
            const textInput = component.find('input[type="text"]');
            expect(textInput).toHaveLength(1);
            expect(textInput.prop('placeholder')).toBe('Write your name');
        });

        it('should set error flag to true if name contains any number', () => {
            const textInput = component.find('input[type="text"]');
            textInput.simulate('change', { target: { value: '1234' } })
            expect(component.state('error')).toBeTruthy();
        });

        it('should display one number input', () => {
            const ageInput = component.find('input#age_input');
            expect(ageInput).toHaveLength(1);
            expect(ageInput.prop('placeholder')).toBe('Age');
        });

        it('should display one checkbox', () => {
            const checkbox = component.find('label').find('input');
            expect(checkbox).toHaveLength(1);
        });

        it('should change state on checkbox click (checked -> true)', () => {
            expect(component.state('checked')).toBeFalsy();
            component
                .find('label')
                .find('input')
                .simulate('change');
            expect(component.state('checked')).toBeTruthy();
        });

        it('should not display error message', () => {
            expect(component.find('.error')).toHaveLength(0);
        });

        it('should display error message when error flag is true', () => {
            component.setState({ error: true });
            expect(component.find('.error')).toHaveLength(1);
            expect(component.find('.error').text()).toBe('name cannot have numbers');
        });
    });

    it('should display submit button', () => {
        const btn = component.find('button');
        expect(btn).toHaveLength(1);
    });

    describe('submit button', () => {
        it('should display submition text on button', () => {
            const btn = component.find('button');
            expect(btn.text()).toEqual('Submit!');
        });

        it('should be disabled if inputs are invalid', () => {
            const button = component.find('button');
            expect(button.prop('disabled')).toBeTruthy();
        });

        it('should be enabled if inputs are valid', () => {
            component.setState({
                name: 'John Doe',
                age: '44',
                checked: true,
                error: false,
            });
            const button = component.find('button');
            expect(button.prop('disabled')).toBeFalsy();
        });

        it('should call onSubmit method on button click', () => {
            component.setState({
                name: 'John Doe',
                age: '44',
                checked: true,
            });

            const button = component.find('button');
            button.simulate('click');
            expect(mockFn).toHaveBeenCalled();
        });

        it('should clear all fields on button click', () => {
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
});