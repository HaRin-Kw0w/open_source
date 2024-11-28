import { useEffect } from "react";
import data from './data.js';

function News(){
	useEffect(() => { 
	})

	return(
		<div id="news">
			<div class="NewSearch">
				<from>
					<input type="text" value="제목 + 내용"/>
					<input type="image" src="/images/btn_search.gif" alt="검색"/>
				</from>
			</div>
			<table>
				<thead>
					<tr>
						<th scope="col" class="num">번호</th>
						<th scope="col" class="divide">구분</th>
						<th scope="col" class="title">제목</th>
						<th scope="col" class="date">등록일</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map(d =>
							<NewsList propValue={d}/>
						)
					} 
				</tbody>
			</table>
		</div>
	)
}


function NewsList(props){
	let { num, text, image, day}=props.propValue;

	return(
		<tr>
			<td class="num">{num}</td>
			<td class="divide"><img src={"/images/"+image}/></td>
			<td class="title"><a href="">{text}</a></td>
			<td class="date">{day}</td>
		</tr>
	);
}

export default News;