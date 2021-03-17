const items = document.querySelector('.nav-link');
//const about = document.querySelector('#carouselExampleCaptions');

items.addEventListener('click', function(e){
//about.classList.toggle('d-none');
alert(e.target + '을 클릭했습니다');
})