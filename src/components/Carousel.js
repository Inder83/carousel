import React, {Component} from 'react';
import "../styles/carousel.css";

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {xPos: 0, currentSlide: 0}
		this.containerRef = React.createRef();
		this.totalSlides = this.props.children.length;
	}

	nextSlide = (num) => {
		const offset = 402; // width of box is 400 and 2 px for left and right borders
		let slide = this.state.currentSlide + num;
		if(slide < 0) slide = 0;
		else if(slide >= this.totalSlides) slide = this.totalSlides - 1;
		this.setState({currentSlide: slide, xPos: slide*-offset});
		console.log(slide);
	}

	render() {
		return (
			<div>
				<button onClick={() => {this.nextSlide(-1)}}>{'<'}</button>
				<button onClick={() => {this.nextSlide(1)}}>{'>'}</button>
				<div className='carousel'>
					<div className='container' ref={this.containerRef} style={{transform: `translateX(${this.state.xPos}px)`}}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default Carousel;