let body=document.querySelector("body");
let para=document.createElement("p");
let div=document.createElement("div");
let btn=document.createElement("button");
let btn2=document.createElement("button");
let h1=document.querySelector("h1");


div.classList.add("prop");
para.classList.add("para");
btn.innerText="Generate color!";
btn2.innerText="Reset";
btn2.style.marginTop="100px";


btn.addEventListener("click",()=>{
    let a=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let c=Math.floor(Math.random()*255);

    
    para.innerText=`rgb(${a},${b},${c})`
    div.style.backgroundColor=`rgb(${a},${b},${c})`;
    h1.style.color=`rgb(${a},${b},${c})`;
    
});
btn2.addEventListener("click",()=>{
    para.innerText=""
    div.style.backgroundColor=`rgb(255,255,255)`;
    h1.style.color=`rgb(0,0,0)`;
});

body.append(para);
body.append(btn);
body.append(div);
body.append(btn2)