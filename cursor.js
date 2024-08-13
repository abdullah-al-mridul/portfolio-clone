var innerCursor = document.getElementsByTagName('div')[1];
var outerCursor = document.getElementById('outer-cursor');
document.addEventListener("mousemove", (e) => {
  innerCursor.style.top = e.clientY - 5 + "px";
  innerCursor.style.left = e.clientX - 5 + "px";
  outerCursor.style.top = e.clientY - 2 + "px";
  outerCursor.style.left = e.clientX - 2 + "px";
});
let navItemA = document.getElementById('nav-a');
let navItemB = document.getElementById('nav-b');
let navItemC = document.getElementById('nav-c');
let navItemD = document.getElementById('nav-d');
let navItemE = document.getElementById('nav-e');
let navHover = document.getElementById('nav-hover');
navHover.addEventListener('mouseover', function () {
    outerCursor.style.border = 1 + 'px' + ' solid' + ' #f3e95f';
});
navHover.addEventListener('mouseout', function () {
    outerCursor.style.border = 1 + 'px' + ' solid' + ' #409cff';
});
navHover.addEventListener('mouseover', function () {
    innerCursor.style.backgroundColor = '#f3e95f';
});
navHover.addEventListener('mouseout', function () {
    innerCursor.style.backgroundColor = '#409cff';
});
navItemA.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
});
navItemA.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    outerCursor.style.visibility = 'visible';
});
navItemB.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
});
navItemB.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    outerCursor.style.visibility = 'visible';
});
navItemC.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
});
navItemC.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    outerCursor.style.visibility = 'visible';
});
navItemD.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
});
navItemD.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    outerCursor.style.visibility = 'visible';
});
navItemE.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
});
navItemE.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    outerCursor.style.visibility = 'visible';
});
let menuOpenHover = document.getElementById('menu-open-hover');
menuOpenHover.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
});
menuOpenHover.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    outerCursor.style.visibility = 'visible';
});
let getStarted = document.getElementById('get-started-btn');
getStarted.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
getStarted.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let getCv = document.getElementById('get-cv-btn');
getCv.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
getCv.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let sendM = document.getElementById('send-message');
sendM.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
sendM.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let cardItem1 = document.getElementById('card-item-1');
cardItem1.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
cardItem1.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let cardItem2 = document.getElementById('card-item-2');
cardItem2.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
cardItem2.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let cardItem3 = document.getElementById('card-item-3');
cardItem3.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
cardItem3.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let imageCard = document.getElementById('image-card');
imageCard.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
imageCard.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let card1 = document.getElementById('card-1');
card1.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
card1.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let card2 = document.getElementById('card-2');
card2.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
card2.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let card3 = document.getElementById('card-3');
card3.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
card3.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let card4 = document.getElementById('card-4');
card4.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
card4.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let myImage = document.getElementById('image-me');
myImage.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
});
myImage.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    outerCursor.style.visibility = 'visible';
});
let doCard1 = document.getElementById('do-card-1');
doCard1.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard1.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
doCard1.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard1.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let doCard2 = document.getElementById('do-card-2');
doCard2.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard2.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
doCard2.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard2.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let doCard3 = document.getElementById('do-card-3');
doCard3.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard3.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
doCard3.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard3.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let doCard4 = document.getElementById('do-card-4');
doCard4.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard4.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
doCard4.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard4.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let doCard5 = document.getElementById('do-card-5');
doCard5.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard5.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
doCard5.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard5.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let doCard6 = document.getElementById('do-card-6');
doCard6.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
doCard6.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let im1 = document.getElementById('im-1');
im1.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
im1.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let im2 = document.getElementById('im-2');
im2.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
im2.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let im3 = document.getElementById('im-3');
im3.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
im3.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let im4 = document.getElementById('im-4');
im4.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
im4.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let im5 = document.getElementById('im-5');
im5.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
im5.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let im6 = document.getElementById('im-6');
im6.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
im6.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let sel1 = document.getElementById('sel-1');
sel1.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
sel1.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let sel2 = document.getElementById('sel-2');
sel2.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
sel2.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let sel3 = document.getElementById('sel-3');
sel3.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
sel3.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let sel4 = document.getElementById('sel-4');
sel4.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
sel4.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let sel5 = document.getElementById('sel-5');
sel5.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
sel5.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let sel6 = document.getElementById('sel-6');
sel6.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    doCard6.classList.remove('opacity-70')
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
sel6.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    doCard6.classList.add('opacity-70')
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let selRes = document.getElementById('sel-res');
sel1.addEventListener('click', () => {
    im1.classList.remove('hidden');
    im1.classList.add('flex');
    im2.classList.remove('hidden');
    im2.classList.add('flex');
    im3.classList.remove('hidden');
    im3.classList.add('flex');
    im4.classList.remove('hidden');
    im4.classList.add('flex');
    im5.classList.remove('hidden');
    im5.classList.add('flex');
    im6.classList.remove('hidden');
    im6.classList.add('flex');
    selRes.classList.add('max-[650px]:h-[1940px]');
    selRes.classList.remove('max-[650px]:h-[350px]');
    selRes.classList.add('max-[650px]:grid-rows-6');
    selRes.classList.remove('max-[650px]:h-[700px]');
    selRes.classList.remove('max-[650px]:grid-rows-2');
    selRes.classList.add('max-[1000px]:h-[1000px]');
    selRes.classList.remove('max-[1000px]:h-[350px]');
    selRes.classList.add('max-[1000px]:grid-cols-2');
    selRes.classList.add('max-[1000px]:grid-rows-3');
    selRes.classList.add('grid-rows-2');
    selRes.classList.add('h-[700px]');
})
sel2.addEventListener('click', () => {
    im1.classList.add('hidden');
    im1.classList.remove('flex');
    selRes.classList.add('max-[650px]:grid-rows-6');
    selRes.classList.remove('max-[650px]:grid-rows-2');
    im2.classList.add('hidden');
    selRes.classList.remove('grid-rows-2');
    selRes.classList.remove('h-[700px]');
    selRes.classList.add('grid-rows-1');
    selRes.classList.add('h-[350px]');
    im2.classList.remove('flex');
    im3.classList.add('hidden');
    im3.classList.remove('flex');
    im4.classList.add('hidden');
    im4.classList.remove('flex');
    im5.classList.add('hidden');
    im5.classList.remove('flex');
    im6.classList.remove('hidden');
    selRes.classList.remove('max-[650px]:h-[700px]');
    im6.classList.add('flex');
    selRes.classList.remove('max-[650px]:h-[1940px]');
    selRes.classList.add('max-[650px]:h-[350px]');
    selRes.classList.remove('max-[1000px]:h-[1000px]');
    selRes.classList.add('max-[1000px]:h-[350px]');
    selRes.classList.add('max-[1000px]:grid-rows-1');
    selRes.classList.remove('max-[1000px]:grid-rows-3');
})
sel3.addEventListener('click', () => {
    im1.classList.add('hidden');
    im1.classList.remove('flex');
    im2.classList.add('hidden');
    im2.classList.remove('flex');
    im3.classList.add('hidden');
    im3.classList.remove('flex');
    im4.classList.remove('hidden');
    im4.classList.add('flex');
    im5.classList.remove('hidden');
    im5.classList.add('flex');
    im6.classList.add('hidden');
    im6.classList.remove('flex');
    selRes.classList.remove('max-[650px]:h-[1940px]');
    selRes.classList.add('max-[650px]:h-[700px]');
    selRes.classList.remove('max-[650px]:h-[350px]');
    selRes.classList.remove('max-[650px]:grid-rows-6');
    selRes.classList.add('max-[650px]:grid-rows-2');
    selRes.classList.remove('max-[1000px]:h-[1000px]');
    selRes.classList.add('max-[1000px]:h-[350px]');
    selRes.classList.add('max-[1000px]:grid-rows-1');
    selRes.classList.remove('grid-rows-2');
    selRes.classList.remove('h-[700px]');
    selRes.classList.add('grid-rows-1');
    selRes.classList.add('h-[350px]');
    selRes.classList.remove('max-[1000px]:grid-rows-3');
})
sel4.addEventListener('click', () => {
    im1.classList.add('hidden');
    im1.classList.remove('flex');
    im2.classList.add('hidden');
    im2.classList.remove('flex');
    im3.classList.remove('hidden');
    im3.classList.add('flex');
    im4.classList.add('hidden');
    im4.classList.remove('flex');
    im5.classList.add('hidden');
    im5.classList.remove('flex');
    im6.classList.add('hidden');
    im6.classList.remove('flex');
    selRes.classList.remove('max-[650px]:h-[700px]');
    selRes.classList.remove('max-[650px]:h-[1940px]');
    selRes.classList.add('max-[650px]:h-[350px]');
    selRes.classList.remove('max-[1000px]:h-[1000px]');
    selRes.classList.add('max-[1000px]:h-[350px]');
    selRes.classList.add('max-[1000px]:grid-rows-1');
    selRes.classList.remove('grid-rows-2');
    selRes.classList.remove('h-[700px]');
    selRes.classList.add('grid-rows-1');
    selRes.classList.add('h-[350px]');
    selRes.classList.remove('max-[1000px]:grid-rows-3');
})
sel5.addEventListener('click', () => {
    im1.classList.add('hidden');
    im1.classList.remove('flex');
    im2.classList.remove('hidden');
    im2.classList.add('flex');
    im3.classList.add('hidden');
    im3.classList.remove('flex');
    im4.classList.add('hidden');
    im4.classList.remove('flex');
    im5.classList.add('hidden');
    im5.classList.remove('flex');
    selRes.classList.remove('grid-rows-2');
    selRes.classList.remove('h-[700px]');
    selRes.classList.add('grid-rows-1');
    selRes.classList.add('h-[350px]');
    im6.classList.add('hidden');
    im6.classList.remove('flex');
    selRes.classList.remove('max-[650px]:h-[700px]');
    selRes.classList.remove('max-[650px]:h-[1940px]');
    selRes.classList.add('max-[650px]:h-[350px]');
    selRes.classList.remove('max-[1000px]:h-[1000px]');
    selRes.classList.add('max-[1000px]:h-[350px]');
    selRes.classList.add('max-[1000px]:grid-rows-1');
    selRes.classList.remove('max-[1000px]:grid-rows-3');
})
sel6.addEventListener('click', () => {
    im1.classList.remove('hidden');
    im1.classList.add('flex');
    im2.classList.add('hidden');
    im2.classList.remove('flex');
    im3.classList.add('hidden');
    im3.classList.remove('flex');
    im4.classList.add('hidden');
    im4.classList.remove('flex');
    im5.classList.add('hidden');
    im5.classList.remove('flex');
    im6.classList.add('hidden');
    selRes.classList.remove('grid-rows-2');
    selRes.classList.remove('h-[700px]');
    selRes.classList.add('grid-rows-1');
    selRes.classList.add('h-[350px]');
    im6.classList.remove('flex');
    selRes.classList.remove('max-[650px]:h-[700px]');
    selRes.classList.remove('max-[650px]:h-[1940px]');
    selRes.classList.add('max-[650px]:h-[350px]');
    selRes.classList.remove('max-[1000px]:h-[1000px]');
    selRes.classList.add('max-[1000px]:h-[350px]');
    selRes.classList.add('max-[1000px]:grid-rows-1');
    selRes.classList.remove('max-[1000px]:grid-rows-3');
})
let link1 = document.getElementById('link1');
link1.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
link1.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let link2 = document.getElementById('link2');
link2.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
link2.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let link3 = document.getElementById('link3');
link3.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#409cff';
});
link3.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});
let link4 = document.getElementById('link4');
link4.addEventListener('mouseover', function () {
    innerCursor.style.transform = 'scale(12)';
    innerCursor.style.opacity = '0.2';
    outerCursor.style.visibility = 'hidden';
    innerCursor.style.backgroundColor = '#f3e95f';
});
link4.addEventListener('mouseout', function () {
    innerCursor.style.transform = 'none';
    innerCursor.style.opacity = '1';
    innerCursor.style.backgroundColor = '#409cff';
    outerCursor.style.visibility = 'visible';
});