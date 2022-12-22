function moveScroll(name){ //이동시킬 위치의 아이디값을 받되, getElementById 이용을 위해 #은 빼고 받는다.
	let e = document.getElementById(name) //name의 객체 저장
	e.scrollIntoView({behavior: 'smooth'}); //scrollIntoView를 이용하면 객체의 위치로 이동할 수 있음. 
}