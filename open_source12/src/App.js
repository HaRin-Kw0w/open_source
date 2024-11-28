import { useState } from 'react';
import ProductBanner from './ProduceBanner';
import data from './data';
import './css/style.css';

function App(){
	let [count, setCount]=useState(3);

	let moreProduct=e => {
		e.preventDefault();

		// console.log(data.length);

		if(count < data.length){
			count+=3;

			setCount(count);
		}
	};

	return(
		<div className="wrapper">
			<section id="portfolio">
				<div className="inner">
					<div className="title">
						<h3>OUR PORTFOLIO</h3>
					</div>
					<div className="content clearfix">
						<div className="banner">
							<ul>
								{/*
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								*/}

								{
									data.map((d, i) => {
										if(i < count){
											return (<ProductBanner key={i+1} propsValue={d} />);
										}
									})
								}
							</ul>
						</div>
					</div>
					<a href="" className="more" onClick={moreProduct}>More</a>
				</div>
			</section>
		</div>
	);
}

export default App;