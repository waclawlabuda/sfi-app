import React from 'react';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import TestComponent, { TestComponentProps } from './TestComponent';

describe('TestComponent', () => {
  let component: ShallowWrapper<TestComponentProps>;
  let props: TestComponentProps = {
    name: 'John Doe',
    age: '36',
    checked: true,
  };

  beforeEach(() => {
    component = shallow(<TestComponent {...props} />);
  });

  it('should display heading', () => {
    // ############### part 1 #################
    // find heading by html tag
    /**
     *
     *
     *
     * tests go here
     *
     *
     *
     */
    // ############### part 2 #################
    // check text inside
    /**
     *
     *
     *
     * tests go here
     *
     *
     *
     */
  });

  it('should display summary box', () => {
    // ############### part 1 #################
    // find summary by it's class name
    /**
     *
     *
     *
     * tests go here
     *
     *
     *
     */
  });

  describe('summary', () => {
    it('should display name if provided', () => {
      // ############### part 1 #################
      // find name by it's id
      /**
       *
       *
       *
       * tests go here
       *
       *
       *
       */
      // ############### part 2 #################
      // check text inside
      /**
       *
       *
       *
       * tests go here
       *
       *
       *
       */
    });

    it('should not display name if not provided', () => {
      // ############### part 3 #################
      // set different props and check if name exists
      /**
       *
       *
       *
       * tests go here
       *
       *
       *
       */
    });

    it('should display age if provided', () => {
      // ############### part 1 #################
      // find age by it's id
      /**
       *
       *
       *
       * tests go here
       *
       *
       *
       */
      // ############### part 2 #################
      // check text inside
      /**
       *
       *
       *
       * tests go here
       *
       *
       *
       */
    });

    it('should not display age if not provided', () => {
      // ############### part 3 #################
      // set different props and check if age exists
      /**
       *
       *
       *
       * tests go here
       *
       *
       *
       */
    });

    describe('info about checkbox state', () => {
      test('checked scenario', () => {
        // ############### part 1 #################
        // find checkbox by it's id
        /**
         *
         *
         *
         * tests go here
         *
         *
         *
         */
        // ############### part 2 #################
        // check text inside
        /**
         *
         *
         *
         * tests go here
         *
         *
         *
         */
      });

      test('not checked scenario', () => {
        // ############### part 3 #################
        // set different props and check text
        /**
         *
         *
         *
         * tests go here
         *
         *
         *
         */
      });
    });
  });
});
