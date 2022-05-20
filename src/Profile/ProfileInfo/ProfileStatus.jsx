import { render } from '@testing-library/react';
import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  actaveEditMode() {
    this.setState({
      editMode: true
    });
  }
  deactaveEditMode() {
    this.setState(
      { editMode: false }
    );
  }

  

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.actaveEditMode.bind(this)}> {this.props.status} </span>
          </div>}
        {this.state.editMode &&
          <div>
            <input onBlur={this.deactaveEditMode.bind(this)} value={this.props.status}/>
          </div>}
      </div>
    )
  }

}

export default ProfileStatus;