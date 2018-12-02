import React from 'react';
import ConfirmBeforeAdd from './ConfirmBeforeAdd';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmBeforeAdd = this.handleConfirmBeforeAdd.bind(this);
  }

  handleConfirmBeforeAdd() {
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewKegForm />;
    } else {
      currentlyVisibleContent = <ConfirmBeforeAdd onConfirmBeforeAdd={this.handleConfirmBeforeAdd} />;
    }

    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewKegControl;