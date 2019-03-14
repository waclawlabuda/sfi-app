import React from 'react';

export interface EnzymeSampleState {
   name: string;
   age: string;
   checked: boolean;
   error: boolean;
}

export interface EnzymeSampleProps {
   className?: string;
   onSubmit(): void;
}

class EnzymeSample extends React.Component<EnzymeSampleProps, EnzymeSampleState> {
   state = {
      name: '',
      age: '',
      checked: false,
      error: false,
   }

   onNameChange = (e) => {
      const newName = e.target.value;
      if (/\d/.test(newName)) {
         this.setState({ error: true });
      } else {
         this.setState({ error: false });
      }
      this.setState({ name: e.target.value });
   }

   onAgeChange = (e) => {
      this.setState({ age: e.target.value });
   }

   onCheckboxChange = () => {
      this.setState((prevState) => ({ checked: !prevState.checked }));
   }

   onSubmitHandle = () => {
      this.setState({
         name: '',
         age: '',
         checked: false,
      });

      this.props.onSubmit();
   }

   render() {
      const { name, age, checked, error } = this.state;
      const { className } = this.props;

      return (
         <div className={className}>
            <h2>Some random heading</h2>
            <form className='form'>
               <div>
                  {error && <span className='error'>name cannot have numbers</span>}
                  <br />
                  <input
                     type='text'
                     id="name_input"
                     placeholder='Write your name'
                     value={name}
                     onChange={this.onNameChange}
                  />
                  <br />
                  <input
                     type='number'
                     id="age_input"
                     placeholder='Age'
                     value={age}
                     onChange={this.onAgeChange}
                  />
                  <br />
                  <br />
                  <label
                     htmlFor='checkbox'
                  >
                     <input
                        id='checkbox'
                        type='checkbox'
                        checked={checked}
                        onChange={this.onCheckboxChange}
                     />
                     check me!
                  </label>
               </div>
               <button onClick={this.onSubmitHandle} disabled={!Boolean(name && age && checked && !error)}>Submit!</button>
            </form>
         </div>
      )
   }
}

export default EnzymeSample;