import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showAvatarSelector, hideAvatarSelector } from './actions';
import AvatarImage from './components/AvatarImage';
import UnusedAvatars from './components/UnusedAvatars';
import './reset.css';
import './GravatarSelector.css';

class GravatarSelector extends Component {
  onClick(e) {
    if(this.props.hidden === true) {
    this.props.dispatch(showAvatarSelector())
  } else {
    this.props.dispatch(hideAvatarSelector())
    }
  }

  render() {
    const hidden=this.props.hidden;
    const classNames = hidden ? 'deselect':'selected';

    return (
      <div className="gravitar-selector">
        <div
        className={classNames} 
        onClick={(e) => this.onClick(e)}>
          <AvatarImage 
          src={require(`./images/${this.props.currentAvatar.src}`)}
          label={this.props.currentAvatar.label}
          id={this.props.currentAvatar.id}
          alt="selected-avatar-image" />
        </div>
        <UnusedAvatars 
          currentAvatar={this.props.currentAvatar}
          gravatars={this.props.gravatars}
          hidden={this.props.hidden} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentAvatar: state.GravatarReducer.currentAvatar,
  gravatars: state.GravatarReducer.gravatars,
  hidden: state.GravatarReducer.hidden
})

export default connect(mapStateToProps)(GravatarSelector)
