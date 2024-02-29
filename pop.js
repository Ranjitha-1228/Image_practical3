var popup_one = document.querySelector(".popup-one")
var popup_two = document.querySelector(".popup-two")
var popup_three = document.querySelector(".popup-three")
var image_gallery_sec1 = document.querySelector(".image-gallery-sec1")
var close1 = document.querySelector(".close1")

popup_one.addEventListener("click",function(){
    image_gallery_sec1.style.display = "block"
})
close1.addEventListener("click",function(){
    image_gallery_sec1.style.display = "none";   
})


var image_gallery_sec2 = document.querySelector(".image-gallery-sec2")
var close2 = document.querySelector(".close2")
popup_two.addEventListener("click",function(){
    image_gallery_sec2.style.display = "block"
})
close2.addEventListener("click",function(){
    image_gallery_sec2.style.display = "none";   
})

var image_gallery_sec3 = document.querySelector(".image-gallery-sec3")
var close3 = document.querySelector(".close3")
popup_three.addEventListener("click",function(){
    image_gallery_sec3.style.display = "block"
})
close3.addEventListener("click",function(){
    image_gallery_sec3.style.display = "none"
})
