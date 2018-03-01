import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvatarImage from '../components/AvatarImage';
import { updateCurrentAvatar } from '../actions';
import '../reset.css';
import './UnusedAvatars.css';

class UnusedAvatars extends Component {

  onClick(e) {
    this.props.dispatch(updateCurrentAvatar(e.target.getAttribute('i')))
  }

  render() { 
    const hidden = this.props.hidden;
    const avatars = this.props.gravatars.map((avatar, i) => {
    
    if(this.props.currentAvatar.label === avatar.label) {
      return (  
      <li 
      key={i} 
      i={i} 
      className="avatar-li"
      onClick={(e) => this.onClick(e)}>
        <div className="overlay current" i={i}></div>
        <AvatarImage
        src={require(`../images/${this.props.gravatars[i].src}`)}
        label={avatar.label}
        id={avatar.id}
        alt='avatar-image' />
      </li>
      )
    } else {
      return(
      <li 
      key={i} 
      i={i} 
      className="avatar-li"
      onClick={(e) => this.onClick(e)}>
        <div className="overlay" i={i}></div>
        <AvatarImage
        src={require(`../images/${this.props.gravatars[i].src}`)}
        label={avatar.label}
        id={avatar.id}
        alt='avatar-image' />
      </li>        
      )
    }
  }  
)

    return (
      <div className={"avatars-container " + (hidden ? 'hidden' : 'shown')}>
        <h2 className="avatars-container-heading">Choose your avatar</h2>
        <ul className="avatar-choices">
          { avatars }
        </ul>
      </div>
    );
  }
}    


const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(UnusedAvatars)
