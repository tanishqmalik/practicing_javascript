
const paragraph= document.getElementById('clickme')


paragraph.addEventListener('click', ()=>{
    var paragraph1= document.getElementById('hello')
    paragraph1.style.color='red'
})


const imagecontainer= document.getElementById('imagecontainer');
const imgageone = document.getElementById('img1');
const imagetwo= document.getElementById('img2');

imagecontainer.addEventListener("mouseenter", ()=>{
    imgageone.style.display='none'
    imagetwo.style.display='inline-block'
})

imagecontainer.addEventListener("mouseleave", ()=>{
    imagetwo.style.display="none"
    imgageone.style.display="inline-block"
})