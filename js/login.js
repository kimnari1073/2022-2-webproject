let id = $('#id');
let pw = $('#pw');
let rpw = $('#rpw');
let user = $('#user');
let btn = $('#btn');


btn.click(function () {
  // id
  if (id.val() == '') {
    id.next('span').css("display", "block");
    id.focus();
  } else if (id.val() != '') {
    id.next('span').css("display", "none")
  }
  // pw & rpw
  if (pw.val() == '') {
    pw.next('span').css("display", "block")
    if (id.val() != '') pw.focus();
  } else if (rpw.val() == '') {
    pw.next('span').css("display", "none")
    rpw.next('span').css("display", "block")
    if (id.val() != '' && pw.val() != '') rpw.focus();
  } else if (rpw.val() != pw.val()) {
    rpw.next('span').css("display", "block")
    rpw.next('span').css({
      "display": "block",
      "color": "red"
    });
    rpw.next('span').text("일치하지 않습니다.")
    if (id.val() != '' && pw.val() != '') {
      rpw.val('');
      rpw.focus();

    }
  } else if (rpw.val() == pw.val()) {
    rpw.next('span').css({
      "display": "block",
      "color": "green"
      
    });
    rpw.next('span').text("일치합니다.")
  }
  // name
  if (user.val() == '') {
    user.next('span').css("display", "block")
    if (id.val() != '' && pw.val() != '' && (pw.val() == rpw.val())) user.focus();
  } else user.next('span').css("display", "none")
})
