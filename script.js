let btn=document.querySelector(".btn");
let text_area=document.querySelector(".input_text");
let ul=document.getElementById("list");
let li=document.querySelectorAll("ul li");
let p=document.querySelectorAll("ul li p");
let list=[];
let delete_btn=document.querySelectorAll(".delete");

let my_body=document.querySelector(".body");


ul.innerHTML=localStorage.getItem("data");
let save=function(){
 localStorage.setItem("data",ul.innerHTML);
}


let take_text=function(){
 let in_text;
 delete_btn=document.querySelectorAll(".delete");
li=document.querySelectorAll("ul li");
p=document.querySelectorAll("ul li p");
 // if(catching()){
 //  alert("already exist");
 //  return null;
 // }
 // else
  if (text_area.value===""){
  alert("please type something");
  return null;
 }

 else{
 in_text=text_area.value;
 delete_btn=document.querySelectorAll(".delete");
li=document.querySelectorAll("ul li");
p=document.querySelectorAll("ul li p");

 }

 return in_text;
}
let creat_li=function(){

 if (take_text()!==null){
let li= document.createElement("li");
li.innerHTML=`<p >${take_text()}</p><input type="button" value="delete" class="delete">`;

return li;
}

}
let catching=function(){
 for (let index=0;index<(document.getElementById("list").getElementsByTagName("li").length);index++){
 if(list.includes(text_area.value)){
  alert("already exist");
 
  return null;
 }


 }
    list.push(text_area.value);
}


btn.addEventListener("click",function(){

console.log(localStorage.getItem("data"));

li=document.querySelectorAll("ul li");
p=document.querySelectorAll("ul li p");
delete_btn=document.querySelectorAll(".delete");
save();

 if (take_text()!==null && catching()!==null){

let lii=creat_li();
ul.appendChild(lii);}
else console.log("null");
  text_area.value="";
delete_btn=document.querySelectorAll(".delete");
li=document.querySelectorAll("ul li");
p=document.querySelectorAll("ul li p");

for(let i=0;i<delete_btn.length;i++){
delete_btn[i].addEventListener("click",function(){
 li[i].remove();
 list.splice(i,i+1);
})
}




// for(let j=0;j<p.length;j++){
// p[j].addEventListener("click",function(){

//  p[j].classList.add("dashed");
// })
// }





delete_btn=document.querySelectorAll(".delete");
li=document.querySelectorAll("ul li");
p=document.querySelectorAll("ul li p");
save();}
)

// let dashing=function(){
//  p.forEach(function(e){
//   e.target.classList.add("dashed");
//  })
// }

ul.addEventListener("click",function(e){
  if(e.target.tagName === "P"){
    e.target.classList.toggle("dashed");
    save();
  }
  else if(e.target.tagName === "INPUT"){
    e.target.parentElement.remove();
    save();
  }
})
