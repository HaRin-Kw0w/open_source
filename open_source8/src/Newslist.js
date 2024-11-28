function Newslist(props){
	let data=props.propsValu;

	return(
		<div className="newslist">
			<ul>
				{/* <li>
					<a href="">
						<span>코로나19 관련 일부 영업점 중단 및 영업시간 변경 안내</span>
						<p>2021-11-15</p>
					</a>
				</li>
				<li>
					<a href="">
						<span>10월 26일, 주요기능을 중심으로 인터넷뱅킹이 새단장합니다!</span>
						<p>2021-10-20</p>
					</a>
				</li>
				<li>
					<a href="">
						<span>영업점 통폐합 일정안내(2021.10.25)</span>
						<p>2021-07-23</p>
					</a>
				</li> */}

				{
					data.news.map(d =>
						<NewsList key={d.idx} propValue={d}/>
					)
				}
			</ul>
		</div>
	);
}

function NewsList(props){
	let { idx, text, date}=props.propValue;

	return(
		<li>
			<a href="">
				<span>{text}</span>
				<p>{date}</p>
			</a>
		</li>
	);
}

export default Newslist;