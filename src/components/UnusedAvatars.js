import React, { Component } from 'react';
import AvatarImage from '../components/AvatarImage';
import '../reset.css';
import './UnusedAvatars.css';

class UnusedAvatars extends Component {
  render() { 
    const hidden = this.props.hidden;
    const avatars = this.props.gravatars.map((avatar, i) => {
    
    if(this.props.currentAvatar.label === avatar.label) {
    return (  
    <li key={i} i={i} className="avatar-li">
    <div className="overlay current"></div>
       <AvatarImage
       src={require(`../images/${this.props.gravatars[i].src}`)}
       label={avatar.label}
       id={avatar.id}
       alt='avatar-image' />
    </li>
      )
    } else {
      return(
    <li key={i} i={i} className="avatar-li">
    <div className="overlay"></div>
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

export default UnusedAvatars
