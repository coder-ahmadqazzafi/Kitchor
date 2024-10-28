let slide= document.querySelector('.m_slider_frame .slider')
let our_project_details = document.querySelectorAll(".our_project_samples .project ")
let menu_activator=document.querySelector("header .header-2 .fa-bars-staggered")
let ul=document.querySelector("header .header-2 ul")
let header=document.querySelector("header")
let dropdown=document.querySelector("main .m-content .m_info .dropdown .dropdown_slide")
let down_indicator=document.querySelector("main .m-content .m_info .dropdown")
let menu_hider=header.querySelector(".header-2 ul .fa-xmark")
menu_hider.addEventListener("click",()=>{
    ul.classList.remove("ul-active")
})


setInterval(()=>{
    dropdown.classList.toggle('down')

},1500)
window.addEventListener("scroll",()=>{
    header.classList.toggle("active_header", window.scrollY > 0)
    down_indicator.classList.toggle("dropdown_vanish" , window.scrollY > 0)
    
    // console.log(header.classList)
    // window.alert(header)
})
menu_activator.addEventListener("click",()=>{
    ul.classList.toggle("ul-active")
})

let img=slide.querySelector("img")
console.log(img)
img.setAttribute("src","./img9.webp")

let slider_imgs=["img9.webp","img7.jpg","img2.webp"]
let i=0;
setInterval(()=>{
if(i==0){
    img.setAttribute("src",`./${slider_imgs[1]}`)
   i++
}
else if (i==1){
img.setAttribute("src",`./${slider_imgs[2]}`)
i++;
}
else{
    img.setAttribute("src",`./${slider_imgs[0]}`)
    i=0
}
},7000)

let slider_img=document.querySelector(".m_slider_frame .slider img")


setTimeout(()=>{
slider_img.classList.add("img_vanish")
setTimeout(()=>{
    slider_img.classList.remove("img_vanish")
},2000)
setInterval(()=>{
    slider_img.classList.add("img_vanish")
    setTimeout(()=>{
        slider_img.classList.remove("img_vanish")
    },2000)
},7000)
},5000)

let collections=document.querySelectorAll(".collections .collection")
collections.forEach((collection)=>{
collection.addEventListener("mouseover",(e)=>{

e.currentTarget.childNodes[3].classList.add("c_detail_active")
})
})

collections.forEach((collection)=>{
    collection.addEventListener("mouseleave",(e)=>{
    // window.alert(e.target.childNodes[])
    e.currentTarget.childNodes[3].classList.remove("c_detail_active")
    })
    })

our_project_details.forEach((prodetail)=>{
prodetail.addEventListener("mouseover",()=>{
prodetail.childNodes[3].classList.add("show_detail")
})
})

our_project_details.forEach((prodetail)=>{
    prodetail.addEventListener("mouseleave",()=>{
    prodetail.childNodes[3].classList.remove("show_detail")
    })
    })
    

// let count=0
// do{
//     setTimeout(()=>{
//         count++
//     },300)
//     console.log(count)
// }while(
//     count<=10

// let total=0
// for(let i=0; i<=10;){
// setTimeout(()=>{
//     i++
//     total=total+i
//     console.log(total)
// },1000)
// }
