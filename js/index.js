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
function moveScroll(name){
    window.scrollTo({top: document.querySelector(name).offsetTop-180, behavior: 'smooth'});
}
