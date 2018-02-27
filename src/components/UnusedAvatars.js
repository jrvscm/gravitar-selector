import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvatarImage from '../components/AvatarImage';
import '../reset.css';
import './UnusedAvatars.css';

class UnusedAvatars extends Component {
  render() {
    
    const avatars = this.props.avatars.map((avatar, i) =>
    <li key={i} i={i} className="avatar-li">
       <AvatarImage
       src={require(`${avatar.src}`)}
       label={avatar.label}
       id={avatar.id}
       alt='avatar-image' />
    </li>
    )

    return (
      <div className="avatars-container">
        <ul className="avatar-choices">
          { avatars }
        </ul>
      </div>
      );
  }
}

const mapStateToProps = (state) => ({
  avatars: state.GravitarReducer.gravitars
})

export default connect(mapStateToProps)(UnusedAvatars)
