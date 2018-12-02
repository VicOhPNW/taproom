import React from 'react';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({formVisibleOnPage: true});
  }

  render() {
    return(
      <div>
        <p>this is newKegControl</p>
      </div>
    );
  }
}

export default NewKegControl;