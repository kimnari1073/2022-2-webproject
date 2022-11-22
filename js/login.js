let id = $('#id');
let pw = $('#pw'); let rpw = $('#rpw');
let user = $('#user');
let year = $('#year'); let month = $('#month'); let day = $('#day');
let btn = $('#btn');

function right(a){
  a.next('span').css("display","none");
}
function wrong(a, text){
  a.next('span').css({"display":"block","color":"red"})
  a.next('span').text(text)
  a.focus();
}
function next(){
  if(year.val().length == 4) month.focus()
  if(month.val().length == 2) day.focus()
}

btn.click(function () {
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
  // let today = new Date();
  let today = new Date()
  let birth = new Date(Number(year.val()),Number(month.val())+1,Number(day.val()));// getMonth = 0~11의 값이 나옴.
  alert(birth.getMonth()+today())
})

