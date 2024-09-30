function init()
{ 
   showDiv(newArray) ;  
   f(newArray);
   newGame();
}
let array = new Array(24);
let i=0;
while(i<array.length)
{
    if(i<12)
    {
      array[i]=(i+1)+".jpg";  
    }
    else
    {
      array[i]=(array.length-i)+".jpg";
    }
 i++;
} 

function shuffleArray(arr)
{
   let temp;
   for(let i=0;i<arr.length;i++)
  {
   var randomNum = Math.floor(Math.random() * arr.length);
   temp=arr[i];
   arr[i]=arr[randomNum];
   arr[randomNum]=temp;
  }
  return arr;
}
let newArray= shuffleArray(array);

function showDiv(arr1)
{ 
  document.querySelector(".main").innerHTML+=`<div id="id_win">CONGRATS YOU WON ! for NEW GAME press the red button below</div>`;
  for(let i=1;i<=arr1.length;i++)
    { 
     document.querySelector("#id_main").innerHTML+=`<div tabindex="-1" class="card_${i}"><img id="${i}" src="${newArray[i-1]}"></div>`;
    }
  let images=document.getElementsByTagName("img");
  for(let x of images)
   {
     x.style.display="none";
   }  
  document.getElementById("id_win").style.display="none";
}

let bool=false;
let id1;
let id2;
let count=0;
let counter=0;
let isOn;

function f(arr2)
{ 
 for(let i=0;i<arr2.length; i++)
  {
   document.querySelector(".card_"+(i+1)).onkeyup=function()
   {
    if(!bool)
    {  
        isOn=false;
        if(document.getElementById(i+1).style.display!="none")
         { isOn=true;}
        document.getElementById(i+1).style.display="";
        if(!isOn)
         { count++;}
        if(count%2==0&&!isOn)
         { id2=i+1;}
       else if(count%2!=0&&!isOn)
         { id1=i+1;}
    }
   if(count>1)     
   {
     if(id1!=id2)
     {
       count=0;
       bool=true;
       setTimeout(hashvaa,1000)    
     }
   }
  } 
 }
}



function hashvaa()
 {
     let src1=document.getElementById(`${id1}`).src;
     let src2=document.getElementById(`${id2}`).src;
     if(src1!=src2)
     {
        document.getElementById(`${id1}`).style.display="none";
        document.getElementById(`${id2}`).style.display="none"; 
     }
     else
     {
        document.getElementById(`${id1}`).style.display="";
        document.getElementById(`${id2}`).style.display="";
        counter++;  
     }
    
    id1=0;
    id2=0;
    bool=false;
    if(counter==12)
    {
        document.getElementById("id_win").style.display="";  
    }
 }

function newGame()
{
    document.querySelector(`#id_button`).onclick=function()
    { 
       counter=0;
       document.getElementById("id_win").style.display="none";
       newArray=shuffleArray(array);
       let i=0;
       let images=document.getElementsByTagName("img");
       for(let x of images)
       {    
        x.src=`${newArray[i]}`;
        x.style.display="none";
        i++;
       } 
       count=0;
    }
}
