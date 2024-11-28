import { useEffect } from "react";
import data from "./data";

function Container(){
	let videoList=data.map(d=> d.video)

	useEffect(()=>{
		let container=document.querySelector(".container");
		let video=document.getElementById("my_video");

		video.muted=true;

		let buttonList=[];
		let flag;


		for(let item of container.children){
			if(item.tagName === "BUTTON"){
				buttonList.push(item);
			}
		}

		for(let i=0; i<buttonList.length; i++){
			buttonList[i].addEventListener("click", function(){
				if(flag === i) return;
				flag=i;

				video.setAttribute("src", "video/"+videoList[i]);
				video.currentTime=0;
				video.play();
			});
		}

		video.addEventListener("ended", function(){
			flag=null;
		});
	})

	return(
		<div class="container">
			{/* <button id="video1">video1</button>
			<button id="video2">video2</button>
			<button id="video3">video3</button> */}
			{/* <video id="my_video" src="video/seoul.mp4"></video> */}
			{
				videoList.map((d, i) =>
					<button key={i} id={"video"+(i+1)}>{"video"+(i+1)}</button>
				)
				
			}
			<video id="my_video" src={`/video/${videoList[0]}`}></video> 
		</div>
	)
}

export default Container;