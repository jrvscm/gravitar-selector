import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvatarImage from './components/AvatarImage';
import './GravitarSelector.css';

class GravitarSelector extends Component {
  render() {
    return (
      <div className="GravitarSelector">
        <div className="currentAvatar">
          <AvatarImage 
          src={this.props.currentAvatar.src}
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
