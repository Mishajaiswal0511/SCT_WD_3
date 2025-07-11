let divs=document.querySelectorAll(".box");
let butt=document.querySelector(".res");

let hiden=document.querySelector(".hidecontainer");
let box=document.querySelector(".container");
let para=document.querySelector("p");
let newbtn=document.querySelector(".new");
let cv=document.querySelector(".container");
cv.classList.remove("container");
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let i=0;
let count=0;
let iswinner=false;
newbtn.addEventListener("click",() =>{
  cv.classList.remove("container");
    hiden.classList.add("hide");
    resethandler();
});

divs.forEach((div) => {
  div.addEventListener("click", () => {
    if (div.getAttribute("data-clicked") === "true" || iswinner) return;

    if (i == 0) {
      div.innerText = 'X';
      i = 1;
    
    } else {
      div.innerText = 'O';
      i = 0;
    }
      count++;    
 div.setAttribute("data-clicked", "true");
   if(checkWinner()){
    iswinner=true;
    return;
   };
if(count==9 && !iswinner){
  cv.classList.add("container");
    hiden.classList.remove("hide");
         
          para.innerText="match is draw!";
          
}
   
  });
});



function resethandler(){
divs.forEach(function(div){
    div.innerText=" ";
      div.setAttribute("data-clicked", "false");
});
  i = 0;
  count = 0;
  iswinner = false;
};


function checkWinner() {
    for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        let val1 = divs[a].innerText;
        let val2 = divs[b].innerText;
        let val3 = divs[c].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
          cv.classList.add("container");
          hiden.classList.remove("hide");
         
          para.innerText=`Congratulations, winner is ${val1}`;
          

            return true;
        }
    }

   return false;
   };


butt.addEventListener("click",resethandler);

