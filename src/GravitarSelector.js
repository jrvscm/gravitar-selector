import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvatarImage from './components/AvatarImage';
import './reset.css';
import './GravitarSelector.css';

class GravitarSelector extends Component {
  render() {
    return (
      <div className="gravitar-selector">
        <div className="current-avatar">
          <AvatarImage 
          src={require(`${this.props.currentAvatar.src}`)}
          label={this.props.currentAvatar.label}
          id={this.props.currentAvatar.id}
          alt="selected-avatar-image" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentAvatar: state.GravitarReducer.currentAvatar
})

export default connect(mapStateToProps)(GravitarSelector)
