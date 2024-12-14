window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isSafari=!1;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){window.isSafari=!0}
window.isSafariVersion='';if(window.isSafari){var version=(navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);if(version!==null){window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
window.requestAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)}})();function t270_scroll(hash,offset){if(!hash)return;t270_checkLoad(hash,offset);if(hash.indexOf('#!/tproduct/')!==-1||hash.indexOf('#!/tab/')!==-1){return!0}
var isHistoryChangeAllowed=window.location.hash!==hash;var wrapperBlock=document.querySelector('.t270');var dontChangeHistory=wrapperBlock?Boolean(wrapperBlock.getAttribute('data-history-disabled')):!1;t270_scrollToEl(hash,offset);if(!dontChangeHistory&&isHistoryChangeAllowed){if(history.pushState){history.pushState(null,null,hash)}else{window.location.hash=hash}
isHistoryChangeAllowed=!1}
return!0}
function t270_checkLoad(hash,offset){if(window.t270_loadChecked)return;var sliderWrappers=document.body.querySelectorAll('.t-slds__items-wrapper');if(!sliderWrappers.length)return;var lastWrapper=sliderWrappers[sliderWrappers.length-1];var sliderImgs=lastWrapper?lastWrapper.querySelectorAll('.t-slds__bgimg'):[];var lastImg=sliderImgs[sliderImgs.length-1];var imageUrl=lastImg?window.getComputedStyle(lastImg).backgroundImage:'';imageUrl=imageUrl.substring(5,imageUrl.length-2);var preloaderImg=document.createElement('img');preloaderImg.src=imageUrl?imageUrl:'';preloaderImg.addEventListener('load',function(){t270_scroll(hash,offset);window.t270_loadChecked=!0})}
function t270_scrollToEl(hash,offset){if(document.body.getAttribute('data-scroll'))return;var scrollTargetY=t270_getTarget(hash,offset);if(isNaN(scrollTargetY))return;var body=document.body;var canSmoothScroll=window.CSS&&window.CSS.supports('scroll-behavior','smooth');if(window.isMobile&&canSmoothScroll&&'scrollBehavior' in document.documentElement.style){body.setAttribute('data-scroll','true');window.scrollTo({left:0,top:scrollTargetY,behavior:'smooth'});setTimeout(function(){body.removeAttribute('data-scroll')},500)}else{var html=document.querySelector('html');var documentHeight=Math.max(body.scrollHeight,body.offsetHeight,body.clientHeight,html.offsetHeight);var scrollY=window.scrollY||document.documentElement.scrollTop;var speed=2000;var time=Math.max(.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,.8));var currentTime=0;function t270_easeInQuad(pos){return Math.pow(pos,2)}
function t270_animationScroll(){currentTime+=1/60;var newDocumentHeight=Math.max(body.scrollHeight,body.offsetHeight,body.clientHeight,html.offsetHeight);if(documentHeight<newDocumentHeight){documentHeight=newDocumentHeight;scrollTargetY=t270_getTarget(hash,offset);scrollY=window.scrollY||document.documentElement.scrollTop;time=Math.max(.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,.8))}
var difference=currentTime/time;var animation=t270_easeInQuad(difference);if(difference<1){requestAnimationFrame(t270_animationScroll);window.scrollTo(0,scrollY+((scrollTargetY-scrollY)*animation))}else{body.removeAttribute('data-scroll');body.removeAttribute('data-scrollable');window.scrollTo(0,scrollTargetY)}}
body.setAttribute('data-scroll','true');body.setAttribute('data-scrollable','true');t270_animationScroll()}}
function t270_getTarget(hash,offset){var target;try{if(hash.substring(0,1)==='#'){target=document.getElementById(hash.substring(1))}else{target=document.querySelector(hash)}}catch(event){console.log('Exception t270: '+event.message);return}
if(!target){target=document.querySelector('a[name="'+hash.substr(1)+'"]');if(!target)return}
target=parseInt((target.getBoundingClientRect().top+window.pageYOffset)-offset,10);target=Math.max(target,0);return target}
function t674_init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var backgroundImage=rec.querySelector('.t674__img-holder');if(!backgroundImage)return;backgroundImage.onload=function(){var delay=0;var allRecords=document.getElementById('allrecords');if(allRecords.getAttribute('data-blocks-animationoff')!=='yes'){delay=600}
setTimeout(function(){document.body.classList.add('t674__body_with-bg')},delay)};var event=document.createEvent('HTMLEvents');event.initEvent('load',!0,!1);backgroundImage.dispatchEvent(event)}