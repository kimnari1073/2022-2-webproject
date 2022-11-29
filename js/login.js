//jquery 위주
let id = $('#id');
let pw = $('#pw'); let rpw = $('#rpw');
let user = $('#user');
let year = $('#year'); let month = $('#month'); let day = $('#day');
let gender = $('#gender')
let btn = $('#btn');
let clock = 1; //유효성 검사 성공 여부

function right(a){ //성공
  a.next('span').css("display","none");
}
function wrong(a, text){ //실패
  a.next('span').css({"display":"block","color":"red"})
  a.next('span').text(text)
  a.focus()
  clock = 0
}
function next(){ //자동 탭(생년월일)
  if(year.val().length == 4) month.focus()
  if(month.val().length == 2) day.focus()
}
//버튼 클릭
btn.click(function () {
  clock = 1
  // id
  if (id.val() == '') wrong(id, "필수 입력사항 입니다.");
  else if (id.val() != '') right(id);
  // pw & rpw
  if (pw.val() == '') {
    wrong(pw, "필수 입력사항 입니다.")
    wrong(rpw, "일치하지 않습니다.")
  } 
  else if (rpw.val() != pw.val()) {
    right(pw)
    wrong(rpw,"일치하지 않습니다.") 
  }
  else if (rpw.val() == pw.val()) {
    right(pw)
    right(rpw)
  }
  // name
  if (user.val() == '') wrong(user,"필수 입력사항 입니다.")
  else right(user)
  //birth
  let today = new Date()
  let yearVal = Number(year.val()) //string -> number
  let monthVal = Number(month.val())
  let dayVal = Number(day.val())
  //getMonth() == 0~11의 값이 나옴
  let age = today.getFullYear()-yearVal //만 나이
  let dayArr = [31,28,31,30,31,30,31,31,30,31,30,31]
  if(yearVal%4==0 && (yearVal%100!=0||yearVal%400==0)) //윤년&평년
    dayArr[1]=29
  if(monthVal <= 0 || monthVal >=13 || dayVal<=0 ||dayVal > dayArr[monthVal-1]){
    alert("생년월일을 잘못 입력하였습니다.")
    year.focus()
    year.val('')
    month.val('')
    day.val('')
    clock = 0
  }
  else if(today.getMonth()+1<monthVal || (today.getMonth()+1==monthVal && today.getDate()<dayVal)){ //생일이 지났는지 확인
    age--
  }
  //gender
  let genderTxt
  if($("input[name='gender']:checked").val()==1) genderTxt="남자"
  else if($("input[name='gender']:checked").val()==2) genderTxt="여자"
  else genderTxt="비공개"
  //email & phone
  let emailTxt ; let telTxt
  if($('#email').val()=='') emailTxt="비공개"
  if($('#tel').val()=='') telTxt ="비공개" 
  if(clock == 1)
    alert("회원가입에 성공하였습니다. \n만 "+age+"세 성별: "+genderTxt)
})

