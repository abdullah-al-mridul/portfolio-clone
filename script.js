let menu = document.getElementById('menu-mobile');
let menuOpen = document.getElementById('menu-open');
let mobileNav = document.getElementById('mobile-nav');
let hiddenMenu1 = document.getElementById('mobile-nav-1-hidden');
let hiddenMenu2 = document.getElementById('mobile-nav-2-hidden');
let hiddenMenu3 = document.getElementById('mobile-nav-3-hidden');
let hiddenMenu4 = document.getElementById('mobile-nav-4-hidden');
let hiddenMenu5 = document.getElementById('mobile-nav-5-hidden');
let hiddenMenu6 = document.getElementById('mobile-nav-6-hidden');
let hiddenMenu7 = document.getElementById('mobile-nav-7-hidden');
let hiddenMenu8 = document.getElementById('mobile-nav-8-hidden');
let hiddenMenu9 = document.getElementById('mobile-nav-9-hidden');
let hiddenMenu10 = document.getElementById('mobile-nav-10-hidden');
let hiddenMenu11 = document.getElementById('mobile-nav-11-hidden');
let hiddenMenu12 = document.getElementById('mobile-nav-12-hidden');
let hiddenMenu13 = document.getElementById('mobile-nav-13-hidden');
let hiddenMenu14 = document.getElementById('mobile-nav-14-hidden');
let hiddenMenu15 = document.getElementById('mobile-nav-15-hidden');
let hiddenMenu16 = document.getElementById('mobile-nav-16-hidden');
const menuOpener = () => {
    menu.classList.add('max-[600px]:flex');
    menu.classList.remove('max-[600px]:hidden');
    mobileNav.classList.remove('max-[600px]:block');
    hiddenMenu1.classList.add('hidden');
    hiddenMenu2.classList.add('hidden');
    hiddenMenu3.classList.add('hidden');
    hiddenMenu4.classList.add('hidden');
    hiddenMenu5.classList.add('hidden');
    hiddenMenu6.classList.add('hidden');
    hiddenMenu7.classList.add('hidden');
    hiddenMenu8.classList.add('hidden');
    hiddenMenu9.classList.add('hidden');
    hiddenMenu10.classList.add('hidden');
    hiddenMenu11.classList.add('hidden');
    hiddenMenu12.classList.add('hidden');
    hiddenMenu13.classList.add('hidden');
    hiddenMenu14.classList.add('hidden');
    hiddenMenu15.classList.add('hidden');
    hiddenMenu16.classList.add('hidden');
}
const menuCloser = () => {
    menu.classList.add('max-[600px]:hidden');
    menu.classList.remove('max-[600px]:flex');
    mobileNav.classList.add('max-[600px]:block');
    hiddenMenu1.classList.remove('hidden');
    hiddenMenu2.classList.remove('hidden');
    hiddenMenu3.classList.remove('hidden');
    hiddenMenu4.classList.remove('hidden');
    hiddenMenu5.classList.remove('hidden');
    hiddenMenu6.classList.remove('hidden');
    hiddenMenu7.classList.remove('hidden');
    hiddenMenu8.classList.remove('hidden');
    hiddenMenu9.classList.remove('hidden');
    hiddenMenu10.classList.remove('hidden');
    hiddenMenu11.classList.remove('hidden');
    hiddenMenu12.classList.remove('hidden');
    hiddenMenu13.classList.remove('hidden');
    hiddenMenu14.classList.remove('hidden');
    hiddenMenu15.classList.remove('hidden');
    hiddenMenu16.classList.remove('hidden');
}
let a = document.getElementById('im-1');
let b = document.getElementById('im-2');
let c = document.getElementById('im-3');
let d = document.getElementById('im-4');
let e = document.getElementById('im-5');
let f = document.getElementById('im-6');
let popup = document.getElementById('popup-visible');
a.addEventListener("mouseover", () => {
    popup.classList.remove('opacity-0')
})
a.addEventListener("mouseout", () => {
    popup.classList.add('opacity-0');
})
let popup1 = document.getElementById('popup-visible-1');
b.addEventListener("mouseover", () => {
    popup1.classList.remove('opacity-0')
})
b.addEventListener("mouseout", () => {
    popup1.classList.add('opacity-0');
})
let popup2 = document.getElementById('popup-visible-2');
c.addEventListener("mouseover", () => {
    popup2.classList.remove('opacity-0')
})
c.addEventListener("mouseout", () => {
    popup2.classList.add('opacity-0');
})
let popup3 = document.getElementById('popup-visible-3');
d.addEventListener("mouseover", () => {
    popup3.classList.remove('opacity-0')
})
d.addEventListener("mouseout", () => {
    popup3.classList.add('opacity-0');
})
let popup4 = document.getElementById('popup-visible-4');
e.addEventListener("mouseover", () => {
    popup4.classList.remove('opacity-0')
})
e.addEventListener("mouseout", () => {
    popup4.classList.add('opacity-0');
})
let popup5 = document.getElementById('popup-visible-5');
f.addEventListener("mouseover", () => {
    popup5.classList.remove('opacity-0')
})
f.addEventListener("mouseout", () => {
    popup5.classList.add('opacity-0');
})