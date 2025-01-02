/* SHOW SIDEBAR */

const navMenu=document.getElementById('sidebar'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('.nav-close');
/* SIDEBAR SHOW */
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-sidebar');
    })
}
/* SIDEBAR HIDDEN */
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar');
    })
}
/*SKILLS TABS */
const tabs=document.querySelectorAll('[data-target]');
const tabContent=document.querySelectorAll('[data-content]');
tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target=document.querySelector(tab.dataset.target);
        tabContent.forEach(tabContents=>{
            tabContents.classList.remove('skills__active');
        });
        target.classList.add('skills__active');
        tabs.forEach(tab=>{
            tab.classList.remove('skills__active');
        });
        tab.classList.add('skills__active');
    });
});
/* Mix it up portfolio */
let mixerPortfolio=mixitup('.work__container',{
    selectors:{
        target:'.work__card'
    },
    animation:{
        duration:300
    }
});
/* Link Active Work */
const linkWork=document.querySelectorAll('.work__item');
function activeWork(){
    linkWork.forEach(l=>i.classList.remove('active-work'))
    this.classList.add('active-work');
}
linkWork.forEach(l=>i.addEventListener("click",activeWork));
/* Work Popup */
document.addEventListener("click",(e)=>{
    if(e.target.classList.container("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup);
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src=portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML=portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body span").innerHTML=portfolioItem.querySelector(".portfolio__item-details").innerHTML;

}
/* SERVICES MODAL */
const modalViews=document.querySelectorAll('.services__modal');
const modalBtns=document.querySelectorAll('.services__button');
const modalCloses=document.querySelectorAll('services__modal-close');
let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i);
    });
});
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click",()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal');
        });
    });
});
/* SWIPER TESTIMONIAL */
let swiper=new Swiper(".testimonials__container",{
    spaceBetween:24,
    loop:true,
    grabCursor:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        576:{
            slidesPreview:2,
            // spaceBetween:20,
        },
        768:{
            slidesPreview:4,
            spaceBetween:40,
        },
        // 1024:{
        //     slidesPreview:5,
        //     spaceBetween:50,
        // },
    }
})
/* INPUT ANIMATION */
const input=document.querySeelctorAll(".input");
function focusFunc(){
    let parent=this.parentMode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent=this.parentNode;
    if(this.value=="")
        parent.classList.remove(focus);
}
inputs.forEach((input)=>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})
/* SCROLL SECTIONS ACTIVE LINK */


/* SHOW SCROLL UP */
