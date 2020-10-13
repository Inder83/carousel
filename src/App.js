import React from "react";
import Carousel from "./components/Carousel";

import "./styles/carousel.css"

class App extends React.Component {
	render() {
		return (
			<div>
				<Carousel>
					<div className='box'>1</div>
					<div className='box'>2</div>
					<div className='box'>3</div>
					<div className='box'>4</div>
					<div className='box'>5</div>
					<div className='box'>6</div>
				</Carousel>
			</div>
		);
	}
}

export default App;