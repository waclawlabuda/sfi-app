import React from 'react';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import TestComponent, { TestComponentProps } from './TestComponent';

describe('TestComponent', () => {
    let component: ShallowWrapper<TestComponentProps>;
    let props: TestComponentProps = {
        name: 'John Doe',
        age: '36',
        checked: true,
    }

    beforeEach(() => {
        component = shallow(
            <TestComponent {...props} />);
    });

    it('should display heading', () => {
        const heading = component.find('h2');
        expect(heading).toHaveLength(1);
        expect(heading.text()).toEqual('Submitted form:');
    });

    it('should display summary box', () => {
        const summary = component.find('.summary');
        expect(summary).toHaveLength(1);
    });

    describe('summary', () => {
        it('should display name if provided', () => {
            const name = component.find('#name');
            expect(name).toHaveLength(1);
            expect(name.text()).toBe(`User name is: ${props.name}`);
        });

        it('should not display name if not provided', () => {
            component.setProps({ name: '' });
            const name = component.find('#name');
            expect(name).toHaveLength(0);
        });

        it('should display age if provided', () => {
            const age = component.find('#age');
            expect(age).toHaveLength(1);
            expect(age.text()).toBe(`User age is: ${props.age} years`);
        });

        it('should not display age if not provided', () => {
            component.setProps({ age: '' });
            const age = component.find('#age');
            expect(age).toHaveLength(0);
        });

        describe('info about checkbox state', () => {
            test('checked scenario', () => {
                const chkbx = component.find('#chkbx');
                expect(chkbx.text()).toBe(`User checked checkbox?: yes`);
            });

            test('not checked scenario', () => {
                component.setProps({ checked: false });
                const chkbx = component.find('#chkbx');
                expect(chkbx.text()).toBe(`User checked checkbox?: no`);
            });
        });
    });
});