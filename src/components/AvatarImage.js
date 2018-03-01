import React, { Component } from 'react';
import './AvatarImage.css';

class AvatarImage extends Component {
	render() {
		if(this.props.className === 'current') {
		return (
			<img
			className={"avatar-image current"} 
			src={this.props.src} 
			id={this.props.id} 
			label={this.props.label}
			alt={this.props.alt} />
		)
	} else {
		return(
			<img
			className={"avatar-image"} 
			src={this.props.src} 
			id={this.props.id} 
			label={this.props.label}
			alt={this.props.alt} />		
			)
		}
	}
}

export default AvatarImage;