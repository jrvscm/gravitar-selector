import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  showAvatarSelector, 
  hideAvatarSelector,
  firstLoad } from './actions';
import AvatarImage from './components/AvatarImage';
import UnusedAvatars from './components/UnusedAvatars';
import './reset.css';
import './GravatarSelector.css';

export class GravatarSelector extends Component {

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.dispatch(hideAvatarSelector());
  }


  onClick(e) {
    if(this.props.hidden === true) {
    this.props.dispatch(showAvatarSelector())
    this.props.dispatch(firstLoad())
    } else {
      this.props.dispatch(hideAvatarSelector())
    }
  }

  render() {
    const hidden=this.props.hidden;
    const classNames = hidden ? 'deselect':'selected';

    return (
      <div ref={node => this.node = node} className="gravitar-selector">
        <div className={classNames} onClick={(e) => this.onClick(e)}>
          <AvatarImage 
            src={require(`./images/${this.props.currentAvatar.src}`)}
            label={this.props.currentAvatar.label}
            id={this.props.currentAvatar.id}
            alt="selected-avatar-image" />
        </div>
        <UnusedAvatars
          loading={this.props.loading} 
          currentAvatar={this.props.currentAvatar}
          gravatars={this.props.gravatars}
          hidden={this.props.hidden}
          firstLoad={this.props.firstLoad} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentAvatar: state.GravatarReducer.currentAvatar,
  gravatars: state.GravatarReducer.gravatars,
  hidden: state.GravatarReducer.hidden,
  loading: state.GravatarReducer.loading,
  firstLoad: state.GravatarReducer.firstLoad
})

export default connect(mapStateToProps)(GravatarSelector)
