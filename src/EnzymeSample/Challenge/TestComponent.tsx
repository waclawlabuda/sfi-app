import React from 'react';

export interface TestComponentProps {
   name: string;
   age: string;
   checked: boolean;
   className?: string;
}

class TestComponent extends React.PureComponent<TestComponentProps, {}> {
   render() {
      const { 
         className,
         name,
         age,
         checked,
      } = this.props;

      return (
         <div className={className}>
            <h3>Submitted form:</h3>
            <div className='summary'>
               <div>
                  <br />
                  {name && <div id={'name'}>User name is: {name}</div>}
                  <br />
                  {age && <div id={'age'}>User age is: {age} years</div>}
                  <br />
                  <br />
                  <div id={'chkbx'}>User checked checkbox?: {checked ? 'yes' : 'no'}</div>
               </div>
            </div>
         </div>
      )
   }
}

export default TestComponent;