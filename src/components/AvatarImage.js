import React, { Component } from 'react';
import './AvatarImage.css';

class AvatarImage extends Component {
	render() {
		let classNames;
		
		if(this.props.className === 'current') {
			classNames = 'avatar-image current';
		} else {
			classNames = 'avatar-image';
		}
		
		return (
			<img
			role={"button"}
			className={classNames} 
			src={this.props.src} 
			id={this.props.id} 
			label={this.props.label}
			alt={this.props.alt} />
		)
	} 
}

export default AvatarImage;