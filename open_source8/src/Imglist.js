function Imglist(props){
	let data=props.propsValu;

	return(
		<>
			<ul>
				{/* <li><a href=""><img src="/images/hana_app1.png" alt="app1"></img></a></li>	
				<li><a href=""><img src="/images/hana_app2.png" alt="app2"></img></a></li>	
				<li><a href=""><img src="/images/hana_app3.png" alt="app3"></img></a></li>	
				<li><a href=""><img src="/images/hana_app4.png" alt="app4"></img></a></li>	
				<li><a href=""><img src="/images/hana_app5.png" alt="app5"></img></a></li>	
				<li><a href=""><img src="/images/hana_app6.png" alt="app6"></img></a></li>	 */}
		
				{data.banner.map((d) =>
					<li key={d}><a href=""><img src={"/images/"+d.src} alt={"app"+d.idx}></img></a></li>	
				)}
			</ul>
		</>	
	)
}

export default Imglist;