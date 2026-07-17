const video=document.getElementById('miekeVideo');
const play=document.getElementById('videoPlay');
const wrap=document.querySelector('.video-wrap');
play.addEventListener('click',async()=>{
  try{
    video.muted=true;
    await video.play();
    wrap.classList.add('playing');
    setTimeout(()=>{video.muted=false;video.volume=.9},180);
  }catch(e){
    video.controls=true;
    window.location.href=video.querySelector('source').src;
  }
});
video.addEventListener('play',()=>wrap.classList.add('playing'));
video.addEventListener('ended',()=>wrap.classList.remove('playing'));
if(new URLSearchParams(location.search).get('autoplay')==='1'){
  video.volume=.9;
  video.play().then(()=>wrap.classList.add('playing')).catch(()=>{});
}
