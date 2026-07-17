const video=document.getElementById('miekeVideo');
const play=document.getElementById('videoPlay');
const wrap=document.querySelector('.video-wrap');
play.addEventListener('click',async()=>{
  try{await video.play();wrap.classList.add('playing')}catch(e){video.controls=true}
});
video.addEventListener('play',()=>wrap.classList.add('playing'));
video.addEventListener('ended',()=>wrap.classList.remove('playing'));
