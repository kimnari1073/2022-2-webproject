$('.color-bt h3').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    let img = $(this).parent().parent().siblings('#best');
    if($(this).text()!=img.attr("src").match($(this).text())){
        img.attr("src",function(index,attr){
            if(attr.match('worst')) return attr.replace("worst","best")
            else return attr.replace('best','worst')
        })
    }
})
// function asideScrol(name){
//     let location = docuemnt.querySelector(name).offsetTop;
//     window.scrollTo({top: location, behavior:'smooth'})
// }