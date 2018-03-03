import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvatarImage from '../components/AvatarImage';
import { 
updateCurrentAvatar, 
setLoading, 
stopLoading, 
hideAvatarSelector } from '../actions';
import '../reset.css';
import './UnusedAvatars.css';

export class UnusedAvatars extends Component {
  onClick(e) {
    let i = e.target.getAttribute('i')
    e.target.className = 'partial-border rotate';
    e.persist(); //persist event so we can use it inside setTimeout()
    this.props.dispatch(setLoading())
    //fake http request//
    setTimeout(() => {
      e.target.className = 'overlay current';
      this.props.dispatch(stopLoading())
      this.props.dispatch(hideAvatarSelector())
      this.props.dispatch(updateCurrentAvatar(i))
    }, 1500)
  }

  render() { 
    const firstLoad = this.props.firstLoad;
    const hidden = this.props.hidden;
    let divClasses;
    let hiddenClasses;
    const avatars = this.props.gravatars.map((avatar, i) => {
    
    if(this.props.currentAvatar.label === avatar.label) {
      divClasses = 'overlay current';
    } else {
      divClasses = 'overlay';
    }

    if(firstLoad === true) {
      hiddenClasses = "avatars-container " + (hidden ? 'hidden' : 'shown');
    } else {
      hiddenClasses = "avatars-container " + (hidden ? 'scale-out' : 'shown');
    }
    
    return (  
      <li key={i} i={i} className="avatar-li" onClick={(e) => this.onClick(e)}>
        <div className={divClasses} i={i}></div>
        <AvatarImage
        src={require(`../images/${this.props.gravatars[i].src}`)}
        label={avatar.label}
        id={avatar.id}
        alt='avatar-image' />
      </li>
      )
    } 
  )

    return (
      <div className={hiddenClasses}>
        <h2 className="avatars-container-heading">Choose your avatar</h2>
        <ul className="avatar-choices">
          { avatars }
        </ul>
      </div>
    );
  }
}    

export default connect()(UnusedAvatars)
