import { useEffect } from "react";
import data from './data.js';

function News(){
	useEffect(() => { 
	})

	return(
		<div id="news" className="mx-auto max-w-[1000px] text-center">
		<form>
		<div className="NewSearch flex justify-end gap-4 pt-5 pb-6 px-0">
			<input type="text" placeholder="제목 + 내용" className="w-[195px] align-middle py-2 px-3 h-10 font-sans text-base text-gray-800 border border-gray-300"/>
			<input type="image" src="/images/btn_search.gif" alt="검색" className="align-top"/>
		</div>
		</form>
			<table className="w-full table-auto">
				<thead className="bg-gray-200 p-5">
				<tr>
					<th scope="col" className="py-2 px-3 text-gray-600 font-medium border border-white">번호</th>
					<th scope="col" className="py-2 px-3 text-gray-600 font-medium border border-white">구분</th>
					<th scope="col" className="py-2 px-3 text-gray-600 font-medium border border-white">제목</th>
					<th scope="col" className="py-2 px-3 text-gray-600 font-medium border border-white">등록일</th>
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
			<td class="num" className="w-[2em] text-sm py-3 px-1.5">{num}</td>
			<td class="divide" className="w-[2em] text-sm py-3 px-1.5">
				<img className="max-w-full align-top border-0 mx-auto" src={"/images/"+image}/>
			</td>
			<td class="title" className="w-[12em] text-sm py-3 px-1.5 relative pl-2 text-left">
				<a href="" className="absolute top-5 left-4 overflow-hidden w-1/2 whitespace-nowrap text-ellipsis">{text}</a>
			</td>
			<td class="date" className="w-[5em] text-sm py-3 px-1.5">{day}</td>
		</tr>
	);
}

export default News;