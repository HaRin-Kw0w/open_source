import { useEffect } from 'react';
import './css/style.css';
import data from './data';

function App(){
	useEffect(() =>{
		let tab=document.querySelector(".tab_cont");
		let tabList=tab.firstElementChild.children;
		tabList[0].classList.add("on");

		for(let i=0; i<tabList.length; i++){
			tabList[i].addEventListener("click", function(e){
				e.preventDefault();

				for(let j=0; j<tabList.length; j++){
					if(j === i){
						tabList[j].classList.add("on");
					}
					else{
						tabList[j].classList.remove("on");
					}
				}
			});
		}
	})
	return(
		<div class="tab_cont">
		<ul>
			{
				data.map((d, i) =>
					<li key={i}>
						<h3><a href="">{d.alt}</a></h3>
						<div class="tab1"><a href=""><img src={`/images/${d.image}`} alt={d.alt}/></a></div>
					</li>
				)
			}
		</ul>
	</div>
			
	);
}

export default App;