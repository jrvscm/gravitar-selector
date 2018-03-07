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
  
  handleKeyboard(e) {
    //we need to disable if hidden is false so they cant select avatars when the popover is closed
    // eslint-disable-next-line 
    if(e.keyCode === 32 && this.props.hidden === false || e.keyCode === 13 && this.props.hidden === false) {
      let i = e.target.getAttribute('i')
      e.target.className = 'partial-border rotate';
      e.persist(); //persist event so we can use it inside setTimeout()
      this.props.dispatch(setLoading())
      //fake http request//
      //would normally dispatch an action to redux, sending dispatch as a prop so we can do async and then 
      //do something with the response, eg. update the state in another action
    setTimeout(() => {
      e.target.className = 'overlay current';
      this.props.dispatch(stopLoading())
      this.props.dispatch(hideAvatarSelector())
      this.props.dispatch(updateCurrentAvatar(i))
    }, 1000)
  } else {
      return;
    }
  }

  onClick(e) {
    let i = e.target.getAttribute('i')
    e.target.className = 'partial-border rotate';
    e.persist(); //persist event so we can use it inside setTimeout()
    this.props.dispatch(setLoading())
      //fake http request//
      //would normally dispatch an action to redux, sending dispatch as a prop so we can do async and then 
      //do something with the response, eg. update the state in another action
    setTimeout(() => {
      e.target.className = 'overlay current';
      this.props.dispatch(stopLoading())
      this.props.dispatch(hideAvatarSelector())
      this.props.dispatch(updateCurrentAvatar(i))
    }, 1000)
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
      <li 
      key={i} 
      i={i} 
      className="avatar-li" onClick={(e) => this.onClick(e)}>     
        <div 
        tabIndex={"0"}
        role="button"
        onKeyUp={(e) => this.handleKeyboard(e)}
        className={divClasses} i={i}></div>
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
