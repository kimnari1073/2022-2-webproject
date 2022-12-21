$('.color-bt h3').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})
function toggleImg(){
    const best = document.getElementsById('best');
    best.style.display = 'none';
}