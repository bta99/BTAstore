let slideitem = document.querySelectorAll('.slideitem');
let btn = document.querySelectorAll('.slider > button');
let title1 = document.querySelectorAll('.title_slide h1');
let title2 = document.querySelectorAll('.title_slide h3');
let title3 = document.querySelectorAll('.title_slide button');
let nav = document.querySelector('.menu');
let btnMoveTop = document.querySelector('.btn_move_top');
let btnNav = document.querySelector('.btnNav');
let menu_nav = document.querySelector('.nav_link');
console.log(btn[0]);
let index = 0;
let status_1 = 1;
slide(index);
autoSlide();
function slide(index){
    for(let i = 0;i < slideitem.length; i++)
    {
        slideitem[i].style.opacity = '0';
        slideitem[i].style.visibility = 'hidden';
    }
    slideitem[index].style.opacity = '1';
    slideitem[index].style.visibility = 'visible';
    title1[index].style.opacity = '1';
    title1[index].style.transform = 'translateY(0)';
    title2[index].style.opacity = '1';
    title2[index].style.transform = 'translateY(0)';
    title3[index].style.opacity = '1';
    title3[index].style.transform = 'translateY(0)';
    // title1.style.opacity = '1';
}

btn[1].onclick = () => {
if(status_1 == 1){
if(index < slideitem.length - 1)
{
    index++;
    title1[index - 1].style.opacity = '0';
    title1[index - 1].style.transform = 'translateY(100px)';
    title2[index - 1].style.opacity = '0';
    title2[index - 1].style.transform = 'translateY(130px)';
    title3[index - 1 ].style.opacity = '0';
    title3[index - 1].style.transform = 'translateY(170px)';
}
else{
    index = 0;
    title1[slideitem.length - 1].style.opacity = '0';
    title1[slideitem.length - 1].style.transform = 'translateY(100px)';
    title2[slideitem.length - 1].style.opacity = '0';
    title2[slideitem.length - 1].style.transform = 'translateY(130px)';
    title3[slideitem.length - 1].style.opacity = '0';
    title3[slideitem.length - 1].style.transform = 'translateY(170px)';
}
slide(index);
}
status_1 = 2;
}

btn[1].onclick = () => {
    if(status_1 == 1){
    if(index < slideitem.length - 1)
    {
        index++;
        title1[index - 1].style.opacity = '0';
        title1[index - 1].style.transform = 'translateY(100px)';
        title2[index - 1].style.opacity = '0';
        title2[index - 1].style.transform = 'translateY(150px)';
        title3[index - 1 ].style.opacity = '0';
        title3[index - 1].style.transform = 'translateY(200px)';
    }
    else{
        index = 0;
        title1[slideitem.length - 1].style.opacity = '0';
        title1[slideitem.length - 1].style.transform = 'translateY(100px)';
        title2[slideitem.length - 1].style.opacity = '0';
        title2[slideitem.length - 1].style.transform = 'translateY(150px)';
        title3[slideitem.length - 1].style.opacity = '0';
        title3[slideitem.length - 1].style.transform = 'translateY(200px)';
    }
    slide(index);
    }
    status_1 = 2;
    }

    btn[0].onclick = () => {
        if(status_1 == 1){
        if(index > 0)
        {
            index--;
            title1[slideitem.length - 1].style.opacity = '0';
            title1[slideitem.length - 1].style.transform = 'translateY(100px)';
            title2[slideitem.length - 1].style.opacity = '0';
            title2[slideitem.length - 1].style.transform = 'translateY(150px)';
            title3[slideitem.length - 1].style.opacity = '0';
            title3[slideitem.length - 1].style.transform = 'translateY(200px)';
        }
        else{
            index = slideitem.length - 1;
            title1[index - 1].style.opacity = '0';
            title1[index - 1].style.transform = 'translateY(100px)';
            title2[index - 1].style.opacity = '0';
            title2[index - 1].style.transform = 'translateY(150px)';
            title3[index - 1 ].style.opacity = '0';
            title3[index - 1].style.transform = 'translateY(200px)';
        }
        slide(index);
        }
        status_1 = 2;
        }

title3[index].addEventListener('transitionend',()=>{
    status_1 = 1;
 console.log(index);
})


function autoSlide()
{
    if(status_1 == 1){
        if(index < slideitem.length - 1)
        {
            index++;
            title1[index - 1].style.opacity = '0';
            title1[index - 1].style.transform = 'translateY(100px)';
            title2[index - 1].style.opacity = '0';
            title2[index - 1].style.transform = 'translateY(150px)';
            title3[index - 1 ].style.opacity = '0';
            title3[index - 1].style.transform = 'translateY(200px)';
        }
        else{
            index = 0;
            title1[slideitem.length - 1].style.opacity = '0';
            title1[slideitem.length - 1].style.transform = 'translateY(100px)';
            title2[slideitem.length - 1].style.opacity = '0';
            title2[slideitem.length - 1].style.transform = 'translateY(150px)';
            title3[slideitem.length - 1].style.opacity = '0';
            title3[slideitem.length - 1].style.transform = 'translateY(200px)';
        }
        slide(index);
        }
        status_1 = 2;
        setTimeout(autoSlide,5000);
}

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 70)
    {
       nav.classList.add('active_nav_fixed');
    }
    else if(window.pageYOffset < 70){
        nav.classList.remove('active_nav_fixed');
    }
})


window.addEventListener('scroll',()=>{
    if(window.pageYOffset >500)
    {
        btnMoveTop.style.opacity = '1';
        btnMoveTop.style.visibility = 'visible';
    }
    else if(window.pageYOffset < 500){
        btnMoveTop.style.opacity = '0';
        btnMoveTop.style.visibility = 'hidden';
    }
})

let count_click = 0;
btnNav.onclick = ()=>{
    if(count_click == 0)
    {
        menu_nav.classList.add('btn_active_nav');
    count_click = 1;
    }
    else{
        menu_nav.classList.remove('btn_active_nav');
        count_click = 0;
    }
}

