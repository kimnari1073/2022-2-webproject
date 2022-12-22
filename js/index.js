$('.color-bt h3').click(function () { //best, worst를 클릭할 때
	$(this).addClass('active') //active 클래스 추가(->검은색배경)
	$(this).siblings().removeClass('active') //형제는 active 클래스 제거(->흰색배경)
	let img = $(this).parent().parent().siblings('#best'); //best, worst의 부모의 부모의 형제태그(img태그,id='best')
	if ($(this).text() != img.attr("src").match($(this).text())) { //best를 클릭했는데 이미 img가 best이미지라면 밑의 토글함수가 작동안함
		img.attr("src", function (index, attr) { //토글함수. best이미지는 worst이미지로, worst이미지는 best이미지로 변경되는 함수
			if (attr.match('worst')) return attr.replace("worst", "best") //attr.replace를 통해 소스링크에서 best, worst 단어를 찾고 worst,best 단어로 변경 -> 이미지 교체
			else return attr.replace('best', 'worst')
		})
	}
})

function moveScroll(name) { //name(이동할 위치의 아이디값)을 인자로 받음
	window.scrollTo({ //윈도우를 이동시킨다
		top: document.querySelector(name).offsetTop - 180, //offsetTop은 해당 쿼리의 위치값을 절댓값으로 리턴함.
		behavior: 'smooth' //스크롤될 때 부드럽게 이동됨
	});
}
