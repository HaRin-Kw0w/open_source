import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function SwiperJS(){
	
	let [mainSwiper, setState]=useState(null);

	useEffect(()=> {
		if(mainSwiper === null) return; 

		let mainSlider=document.querySelector(".main_slider");
		let controller=mainSlider.querySelector(".controller");
		let prev=controller.querySelector(".prev");
		let next=controller.querySelector(".next");
		let pausePlay=document.querySelector("#pause_play");
	
	
		prev.addEventListener("click", function(e){
			e.preventDefault();
			mainSwiper.slidePrev();
		});
	
		next.addEventListener("click", function(e){
			e.preventDefault();
			mainSwiper.slideNext();
		});
	
		pausePlay.addEventListener("click", function(e){
			e.preventDefault();
	
			if(e.target.classList.contains("play")){
				e.target.removeAttribute("class");
				e.target.classList.add("pause");
				e.target.innerText="pause";
				mainSwiper.autoplay.start();
			}
			else{
				e.target.removeAttribute("class");
				e.target.classList.add("play");
				e.target.innerText="play";
				mainSwiper.autoplay.stop();
			}
		});
	});

	let slideChange=swiper => {    
		let account=document.querySelector(".account");
		let current=account.firstElementChild;
		let total=account.lastElementChild;
  
		current.innerText=swiper.realIndex+1; 
		total.innerText=swiper.slides.length;  
	};
	return(
		<>
			<Swiper 
				speed={1200}
				effect="fade" 
				fadeEffect={true}
				loop={true}
				autoplay={true}
				pagination={true}
				modules={[Autoplay, Pagination, EffectFade]}
				
				onSwiper={swiper => {
					slideChange(swiper);
					setState(swiper); 
				}}
				onSlideChange={swiper => {
					slideChange(swiper);
				}}
				className="swiper-container mainSwiper"
			>
				<SwiperSlide><img src="/images/main1.jpg" alt="main1"/></SwiperSlide>
				<SwiperSlide><img src="/images/main2.jpg" alt="main2"/></SwiperSlide>
				<SwiperSlide><img src="/images/main3.jpg" alt="main3"/></SwiperSlide>
				<SwiperSlide><img src="/images/main4.jpg" alt="main4"/></SwiperSlide>
				<SwiperSlide><img src="/images/main5.jpg" alt="main5"/></SwiperSlide>		
			</Swiper>
			<div className="controller">
				<ul>
					<li><a href="" className="prev">previous</a></li>
					<li><a href="" className="next">next</a></li>
				</ul>
				<a href="" id="pause_play" className="pause">pause</a>
			</div>
			<div className="account">
				<span className="current">current</span> / <span className="total">total</span>
			</div>
		</>
	)
}

export default SwiperJS;