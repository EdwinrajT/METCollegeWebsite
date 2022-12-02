function showDrawer(){
    document.getElementById("mobile-side-menu").classList.toggle('open');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let imageIndex;
function showImage(ths) {
    let slides1 = document.getElementsByClassName("zoom");
    imageIndex=Array.from(slides1).indexOf(ths)+1;
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = ths.src;

}

function plusSlideImage(n) {
    showSlidesImage(imageIndex += n);
}


function showSlidesImage(n) {
    
    let slides = document.getElementsByClassName("zoom");
    
    if (n > slides.length) 
    { 
        imageIndex = 1;
    }
    if (n < 1) { 
        imageIndex = slides.length;
    }
    showImage(slides[imageIndex-1])
}

function closeImage(){
    document.getElementById("myModal").style.display = "none";
}

let divWidth=0;

function moveDivPlus(n)
{
    
    var width=document.getElementsByClassName('facilitiesDiv').clientWidth;
    
        divWidth=divWidth+n;
   
   
    document.getElementsByClassName('facilitiesDiv')[0].style.marginLeft=divWidth+'%';
}