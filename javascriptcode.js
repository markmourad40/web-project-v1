var ind=0;
window.onload=function(){
  localStorage["load"]=new Date();
}
window.onunload=function(){
  localStorage["unload"]=new Date();
}



uinput=document.getElementById("u_input");
uclick=document.getElementById("u_click");
div_item=document.getElementById("letter_generate");
div_img=document.getElementById("img_container")
var letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
uclick.addEventListener("click", function(e){

  localStorage[e.target.textContent]=new Date();

  var count=uinput.value;
  if (!(count>=1&&count<=26))
  {
    alert("please enter valid num");
    return;
  }
  var arr=new Array(count);
  div_item.innerHTML="";
  var random_value;
  for(var i=0;i<count;i++)
  {
    random_value=Math.floor(Math.random()*26);
    while(arr.indexOf(random_value)!=-1)
    {
      random_value=Math.floor(Math.random()*26);
    }
    arr[i]=random_value
    var btn=document.createElement("button");
    var btn_txt=document.createTextNode(letter[random_value]);
    btn.appendChild(btn_txt);
    div_item.appendChild(btn);
  }
});

div_item.addEventListener("click",function(e){
  var x=e.target.textContent;
  if(e.target.tagName=="BUTTON"){
  var src1=x+".jpg";
  div_img.innerHTML="";
  var img1=document.createElement("img");
  img1.src=src1;
  div_img.appendChild(img1);
  }
  else {
    var src1="alphabet.jpg";
    div_img.innerHTML="";
    var img1=document.createElement("img");
    img1.src=src1;
    div_img.appendChild(img1);
  }
  localStorage[e.target.textContent]=new Date();
});
 setInterval(function(){localStorage.clear()},5000);
