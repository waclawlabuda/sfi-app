import React from 'react';

export interface EnzymeSampleProps {
  onAgeChange(e: any): void;
  age: string;
}

class AgeInput extends React.Component<EnzymeSampleProps, {}> {

  onChange = (e) => {
    this.props.onAgeChange(e);
  };

  render() {
    const { age } = this.props;

    return (
      <input type="number" id="age_input" placeholder="Age" value={age} onChange={this.onChange} />
    );
  }
}

export default AgeInput;
